import type { ReactNode } from "react";

export type JsonLdData = Record<string, unknown>;

export function JsonLd({ data }: { data: JsonLdData }): ReactNode {
  const serialized = JSON.stringify(data).replace(/</g, "\\u003c");

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serialized }} />;
}
