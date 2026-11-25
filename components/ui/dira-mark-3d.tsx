"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type Point = { x: number; y: number };
type Normal = [number, number, number];

const ARC_SEGMENTS = 40;
const FLAT_SEGMENTS = 12;
const SIDE_SEGMENTS = 16;
const HALF_DEPTH = 0.13;

function createDContour(inner: boolean): Point[] {
  const centerX = inner ? -0.12 : 0.12;
  const radiusX = inner ? 0.45 : 0.73;
  const radiusY = inner ? 0.49 : 0.81;
  const leftX = inner ? -0.48 : -0.72;
  const points: Point[] = [];

  for (let index = 0; index <= ARC_SEGMENTS; index += 1) {
    const angle = -Math.PI / 2 + (Math.PI * index) / ARC_SEGMENTS;
    points.push({
      x: centerX + radiusX * Math.cos(angle),
      y: radiusY * Math.sin(angle)
    });
  }

  for (let index = 1; index <= FLAT_SEGMENTS; index += 1) {
    const progress = index / FLAT_SEGMENTS;
    points.push({ x: centerX + (leftX - centerX) * progress, y: radiusY });
  }

  for (let index = 1; index <= SIDE_SEGMENTS; index += 1) {
    points.push({ x: leftX, y: radiusY - (2 * radiusY * index) / SIDE_SEGMENTS });
  }

  for (let index = 1; index < FLAT_SEGMENTS; index += 1) {
    const progress = index / FLAT_SEGMENTS;
    points.push({ x: leftX + (centerX - leftX) * progress, y: -radiusY });
  }

  return points;
}

function appendVertex(
  output: number[],
  point: Point,
  depth: number,
  normal: Normal,
  material: number
) {
  output.push(point.x, point.y, depth, normal[0], normal[1], normal[2], material);
}

function appendTriangle(
  output: number[],
  a: Point,
  b: Point,
  c: Point,
  depth: number,
  normal: Normal,
  material: number
) {
  appendVertex(output, a, depth, normal, material);
  appendVertex(output, b, depth, normal, material);
  appendVertex(output, c, depth, normal, material);
}

function appendWall(
  output: number[],
  a: Point,
  b: Point,
  normal: Normal,
  material: number
) {
  const frontA = { ...a };
  const backA = { ...a };
  const frontB = { ...b };
  const backB = { ...b };

  appendVertex(output, frontA, HALF_DEPTH, normal, material);
  appendVertex(output, backA, -HALF_DEPTH, normal, material);
  appendVertex(output, backB, -HALF_DEPTH, normal, material);
  appendVertex(output, frontA, HALF_DEPTH, normal, material);
  appendVertex(output, backB, -HALF_DEPTH, normal, material);
  appendVertex(output, frontB, HALF_DEPTH, normal, material);
}

function createDMesh(): Float32Array {
  const vertices: number[] = [];
  const outer = createDContour(false);
  const inner = createDContour(true);

  for (let index = 0; index < outer.length; index += 1) {
    const next = (index + 1) % outer.length;
    const outerA = outer[index];
    const outerB = outer[next];
    const innerA = inner[index];
    const innerB = inner[next];

    appendTriangle(vertices, outerA, outerB, innerA, HALF_DEPTH, [0, 0, 1], 0);
    appendTriangle(vertices, outerB, innerB, innerA, HALF_DEPTH, [0, 0, 1], 0);
    appendTriangle(vertices, outerB, outerA, innerA, -HALF_DEPTH, [0, 0, -1], 0.12);
    appendTriangle(vertices, innerB, outerB, innerA, -HALF_DEPTH, [0, 0, -1], 0.12);

    const outerDx = outerB.x - outerA.x;
    const outerDy = outerB.y - outerA.y;
    const outerLength = Math.hypot(outerDx, outerDy) || 1;
    appendWall(vertices, outerA, outerB, [outerDy / outerLength, -outerDx / outerLength, 0], 1);

    const innerDx = innerB.x - innerA.x;
    const innerDy = innerB.y - innerA.y;
    const innerLength = Math.hypot(innerDx, innerDy) || 1;
    appendWall(vertices, innerA, innerB, [-innerDy / innerLength, innerDx / innerLength, 0], 1);
  }

  return new Float32Array(vertices);
}

function createShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;

  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function createProgram(gl: WebGLRenderingContext): WebGLProgram | null {
  const precision = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT)?.precision;
  const fragmentPrecision = precision ? "highp" : "mediump";
  const vertexSource = `
    attribute vec3 a_position;
    attribute vec3 a_normal;
    attribute float a_material;
    uniform mat4 u_projection;
    uniform float u_yaw;
    uniform float u_pitch;
    uniform float u_roll;
    uniform float u_bob;
    varying vec3 v_position;
    varying vec3 v_normal;
    varying float v_material;

    vec3 rotateObject(vec3 value) {
      float cx = cos(u_pitch);
      float sx = sin(u_pitch);
      float cy = cos(u_yaw);
      float sy = sin(u_yaw);
      float cz = cos(u_roll);
      float sz = sin(u_roll);
      vec3 pitch = vec3(value.x, value.y * cx - value.z * sx, value.y * sx + value.z * cx);
      vec3 yaw = vec3(pitch.x * cy + pitch.z * sy, pitch.y, -pitch.x * sy + pitch.z * cy);
      return vec3(yaw.x * cz - yaw.y * sz, yaw.x * sz + yaw.y * cz, yaw.z);
    }

    void main() {
      vec3 position = rotateObject(a_position);
      position.y += u_bob;
      v_position = position;
      v_normal = normalize(rotateObject(a_normal));
      v_material = a_material;
      gl_Position = u_projection * vec4(position + vec3(0.0, 0.0, -3.05), 1.0);
    }
  `;
  const fragmentSource = `
    precision ${fragmentPrecision} float;
    uniform float u_time;
    varying vec3 v_position;
    varying vec3 v_normal;
    varying float v_material;

    void main() {
      vec3 normal = normalize(v_normal);
      vec3 lightDirection = normalize(vec3(-0.42, 0.62, 0.78));
      vec3 viewDirection = normalize(vec3(0.0, 0.0, 3.05) - v_position);
      vec3 halfDirection = normalize(lightDirection + viewDirection);
      float diffuse = max(dot(normal, lightDirection), 0.0);
      float specular = pow(max(dot(normal, halfDirection), 0.0), 34.0) * 0.52;
      float edgeLight = pow(1.0 - max(dot(normal, viewDirection), 0.0), 2.4) * 0.22;
      vec3 sweepDirection = normalize(vec3(cos(u_time * 0.48), 0.28, 0.85 + sin(u_time * 0.48) * 0.24));
      float sweep = pow(max(dot(normal, sweepDirection), 0.0), 24.0) * 0.26;
      float vertical = smoothstep(-0.8, 0.78, v_position.y);
      vec3 frontMaterial = mix(vec3(0.045, 0.29, 0.63), vec3(0.09, 0.68, 0.62), vertical);
      vec3 sideMaterial = vec3(0.035, 0.12, 0.20);
      vec3 base = mix(frontMaterial, sideMaterial, v_material);
      vec3 color = base * (0.30 + diffuse * 0.74);
      color += vec3(0.70, 0.90, 1.0) * specular;
      color += vec3(0.25, 0.70, 0.75) * (edgeLight + sweep);
      gl_FragColor = vec4(color, 1.0);
    }
  `;

  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexSource);
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentSource);
  if (!vertexShader || !fragmentShader) {
    if (vertexShader) gl.deleteShader(vertexShader);
    if (fragmentShader) gl.deleteShader(fragmentShader);
    return null;
  }

  const program = gl.createProgram();
  if (!program) {
    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);
    return null;
  }

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  gl.deleteShader(vertexShader);
  gl.deleteShader(fragmentShader);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    gl.deleteProgram(program);
    return null;
  }

  return program;
}

function createProjection(aspect: number): Float32Array {
  const fieldOfView = 38 * (Math.PI / 180);
  const near = 0.1;
  const far = 12;
  const scale = 1 / Math.tan(fieldOfView / 2);

  return new Float32Array([
    scale / aspect, 0, 0, 0,
    0, scale, 0, 0,
    0, 0, (far + near) / (near - far), -1,
    0, 0, (2 * far * near) / (near - far), 0
  ]);
}

export function DiraMark3D({ isExiting }: { isExiting: boolean }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const exitingRef = useRef(isExiting);

  useEffect(() => {
    exitingRef.current = isExiting;
  }, [isExiting]);

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return;

    let gl: WebGLRenderingContext | null = null;
    let program: WebGLProgram | null = null;
    let buffer: WebGLBuffer | null = null;
    let frameId = 0;
    let elapsed = 0;
    let lastFrame = 0;
    let angularSpeed = 0.46;
    let reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let resizeObserver: ResizeObserver | null = null;
    let motionQuery: MediaQueryList | null = null;
    let onMotionPreferenceChange: ((event: MediaQueryListEvent) => void) | null = null;
    let onVisibilityChange: (() => void) | null = null;
    let onContextLost: ((event: Event) => void) | null = null;
    let draw: (time: number) => void = () => {};
    let resizeCanvas = () => {};

    const stopAnimation = () => {
      if (frameId !== 0) window.cancelAnimationFrame(frameId);
      frameId = 0;
    };

    const cleanup = () => {
      stopAnimation();
      if (motionQuery && onMotionPreferenceChange) {
        motionQuery.removeEventListener("change", onMotionPreferenceChange);
      }
      if (onVisibilityChange) document.removeEventListener("visibilitychange", onVisibilityChange);
      if (onContextLost) canvas.removeEventListener("webglcontextlost", onContextLost);
      window.removeEventListener("resize", resizeCanvas);
      resizeObserver?.disconnect();
      if (gl && buffer) gl.deleteBuffer(buffer);
      if (gl && program) gl.deleteProgram(program);
      buffer = null;
      program = null;
    };

    try {
      gl = canvas.getContext("webgl", {
        alpha: true,
        antialias: false,
        depth: true,
        powerPreference: "low-power",
        preserveDrawingBuffer: false
      });
      if (!gl) return cleanup;

      program = createProgram(gl);
      if (!program) return cleanup;

      buffer = gl.createBuffer();
      if (!buffer) {
        cleanup();
        return;
      }

      const vertices = createDMesh();
      const vertexCount = vertices.length / 7;
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
      gl.useProgram(program);

      const positionLocation = gl.getAttribLocation(program, "a_position");
      const normalLocation = gl.getAttribLocation(program, "a_normal");
      const materialLocation = gl.getAttribLocation(program, "a_material");
      const stride = 7 * Float32Array.BYTES_PER_ELEMENT;
      gl.enableVertexAttribArray(positionLocation);
      gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, stride, 0);
      gl.enableVertexAttribArray(normalLocation);
      gl.vertexAttribPointer(normalLocation, 3, gl.FLOAT, false, stride, 3 * Float32Array.BYTES_PER_ELEMENT);
      gl.enableVertexAttribArray(materialLocation);
      gl.vertexAttribPointer(materialLocation, 1, gl.FLOAT, false, stride, 6 * Float32Array.BYTES_PER_ELEMENT);

      const projectionLocation = gl.getUniformLocation(program, "u_projection");
      const yawLocation = gl.getUniformLocation(program, "u_yaw");
      const pitchLocation = gl.getUniformLocation(program, "u_pitch");
      const rollLocation = gl.getUniformLocation(program, "u_roll");
      const bobLocation = gl.getUniformLocation(program, "u_bob");
      const timeLocation = gl.getUniformLocation(program, "u_time");
      gl.enable(gl.DEPTH_TEST);
      gl.depthFunc(gl.LEQUAL);
      gl.disable(gl.CULL_FACE);
      gl.disable(gl.BLEND);

      let canvasWidth = 0;
      let canvasHeight = 0;
      draw = (time: number) => {
        if (!gl || !program) return;

        const turn = reducedMotion ? -0.34 : elapsed * angularSpeed + Math.sin(elapsed * 0.22) * 0.12;
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.uniform1f(yawLocation, turn);
        gl.uniform1f(pitchLocation, reducedMotion ? 0.12 : 0.15 + Math.sin(elapsed * 0.43) * 0.08);
        gl.uniform1f(rollLocation, reducedMotion ? -0.025 : Math.sin(elapsed * 0.31) * 0.055);
        gl.uniform1f(bobLocation, reducedMotion ? 0 : Math.sin(elapsed * 0.82) * 0.035);
        gl.uniform1f(timeLocation, reducedMotion ? 0 : time);
        if (canvasWidth > 0 && canvasHeight > 0) gl.drawArrays(gl.TRIANGLES, 0, vertexCount);
      };

      resizeCanvas = () => {
        if (!gl) return;
        const bounds = host.getBoundingClientRect();
        const lowPower = window.matchMedia("(max-width: 640px)").matches || (navigator.hardwareConcurrency || 8) <= 4;
        const pixelRatio = Math.min(window.devicePixelRatio || 1, lowPower ? 1 : 1.25);
        const width = Math.max(1, Math.round(bounds.width * pixelRatio));
        const height = Math.max(1, Math.round(bounds.height * pixelRatio));
        if (width === canvasWidth && height === canvasHeight) return;

        canvasWidth = width;
        canvasHeight = height;
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
        gl.uniformMatrix4fv(projectionLocation, false, createProjection(width / height));
        draw(elapsed);
      };

      const animate = (now: number) => {
        if (lastFrame === 0) lastFrame = now;
        const delta = Math.min((now - lastFrame) / 1000, 0.04);
        lastFrame = now;
        elapsed += delta;

        const targetSpeed = exitingRef.current ? 0.14 : 0.46;
        angularSpeed += (targetSpeed - angularSpeed) * Math.min(delta * 1.8, 1);
        draw(elapsed);

        if (!reducedMotion && !document.hidden) {
          frameId = window.requestAnimationFrame(animate);
        }
      };

      const startAnimation = () => {
        if (!reducedMotion && !document.hidden && frameId === 0) {
          lastFrame = 0;
          frameId = window.requestAnimationFrame(animate);
        }
      };

      onMotionPreferenceChange = (event: MediaQueryListEvent) => {
        reducedMotion = event.matches;
        stopAnimation();
        if (reducedMotion) draw(elapsed);
        else startAnimation();
      };

      onVisibilityChange = () => {
        if (document.hidden) stopAnimation();
        else if (reducedMotion) draw(elapsed);
        else startAnimation();
      };

      onContextLost = (event: Event) => {
        event.preventDefault();
        stopAnimation();
        delete host.dataset.webgl;
      };

      motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      resizeObserver = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(resizeCanvas);
      motionQuery.addEventListener("change", onMotionPreferenceChange);
      document.addEventListener("visibilitychange", onVisibilityChange);
      canvas.addEventListener("webglcontextlost", onContextLost);
      window.addEventListener("resize", resizeCanvas, { passive: true });
      resizeObserver?.observe(host);
      resizeCanvas();
      host.dataset.webgl = "true";
      if (reducedMotion) draw(0);
      else startAnimation();

      return cleanup;
    } catch {
      delete host.dataset.webgl;
      cleanup();
      return;
    }
  }, []);

  return (
    <div ref={hostRef} className="preloader-mark-3d" aria-hidden="true">
      <span className="preloader-mark-3d__glow" />
      <Image
        className="preloader-mark-3d__fallback"
        src="/brand/dira-logo.png"
        alt=""
        width={68}
        height={68}
        priority
        unoptimized
      />
      <canvas ref={canvasRef} className="preloader-mark-3d__canvas" />
    </div>
  );
}
