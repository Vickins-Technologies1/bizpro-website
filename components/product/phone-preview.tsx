import { Activity, Boxes, CircleDollarSign, Wifi } from "lucide-react";

const capabilities = [
  { icon: Activity, label: "Sales activity", value: "In view" },
  { icon: Boxes, label: "Stock movement", value: "Connected" },
  { icon: CircleDollarSign, label: "Expenses", value: "Recorded" }
];

export function PhonePreview() {
  return (
    <div className="phone-stage" role="img" aria-label="Illustrative Dira OS mobile workspace preview">
      <div className="phone-orbit phone-orbit--one" />
      <div className="phone-orbit phone-orbit--two" />
      <div className="phone-device">
        <div className="phone-island" />
        <div className="phone-screen">
          <div className="phone-status"><span>9:41</span><span>●●●  ▰</span></div>
          <div className="phone-topline"><span className="phone-mark">D</span><span>DIRA OS <small>BUSINESS SYSTEM</small></span><span className="phone-avatar">V</span></div>
          <p className="phone-greeting">MONDAY · BUSINESS OVERVIEW</p>
          <h2>Good morning.</h2>
          <p className="phone-subtitle">Your work, connected.</p>
          <div className="phone-summary"><div><span>Today&apos;s sales</span><b>Activity overview</b></div><span className="phone-summary-icon"><Activity size={17} /></span><div className="phone-sparkline"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div></div>
          <div className="phone-list-heading"><b>Business activity</b><span>View all</span></div>
          <div className="phone-capabilities">{capabilities.map(({ icon: Icon, label, value }) => <div className="phone-capability" key={label}><span><Icon size={15} /></span><div><b>{label}</b><small>{value}</small></div><i /></div>)}</div>
          <div className="phone-sync"><Wifi size={14} /><span><b>Ready to work offline</b><small>Syncs when connected</small></span></div>
          <div className="phone-nav"><span className="is-current">Overview</span><span>Work</span><span>Insights</span><span>Profile</span></div>
        </div>
      </div>
      <div className="phone-caption"><span className="phone-caption-dot" /> Illustrative mobile workspace</div>
    </div>
  );
}
