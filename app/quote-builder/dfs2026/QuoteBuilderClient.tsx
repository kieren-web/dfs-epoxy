"use client";
import { useState, useEffect } from "react";

// ─── Business Constants ────────────────────────────────────────────────────────
const BIZ = {
  name: "Dynamic Flooring Solutions",
  abn: "88 679 629 522",
  address: "122 Vales Road, Mannering Park NSW 2259",
  phone: "0447 023 477",
  email: "cs@dynamicflooringsolution.com.au",
  preparedBy: "Carl Fletcher",
  bankName: "Dynamic Flooring Solutions",
  bsb: "082 677",
  accountNo: "31 692 8518",
  logoUrl: "https://dynamicflooringsolutions.com.au/images/logo.png",
};

const DEFAULTS = {
  residentialRate: 100,
  caulkingPrice: 350,
  tileRemovalPrice: 800,
};

// ─── Types ────────────────────────────────────────────────────────────────────
type Step = "customer" | "job" | "extras" | "preview";

interface GHLContact { id: string; opportunityId?: string; firstName: string; lastName: string; phone: string; email: string; address: string; stageName?: string; }

interface Customer {
  ghlId?: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
}

interface Job {
  projectType: string;
  isCommercial: boolean;
  sqm: string;
  rate: string;
  colour: string;
  quoteNumber: string;
  validity: "14" | "30";
}

interface Extras {
  caulking: { enabled: boolean; price: string };
  tileRemoval: { enabled: boolean; price: string };
}

interface LineItem { description: string; detail?: string; amount: number; }

// ─── Helpers ──────────────────────────────────────────────────────────────────
function n(v: string) { return parseFloat(v) || 0; }
function fmt(v: number) { return v.toLocaleString("en-AU", { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }

function todayStr() {
  return new Date().toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" });
}

function validityDate(days: "14" | "30") {
  const d = new Date();
  d.setDate(d.getDate() + parseInt(days));
  return d.toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" });
}

function defaultQuoteNum() {
  const d = new Date();
  const yy = String(d.getFullYear()).slice(2);
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `DFS-${yy}${mm}${dd}`;
}

function calcLines(job: Job, extras: Extras) {
  const lines: LineItem[] = [];
  const sqm = n(job.sqm);
  const rate = n(job.rate);

  if (sqm > 0 && rate > 0) {
    lines.push({
      description: `APC Epoxy Flooring System${job.projectType ? ` — ${job.projectType}` : ""}`,
      detail: `${sqm}m² @ $${rate}/m² (incl. diamond grinding, primer coat, 2× epoxy coats, 2× sealers)`,
      amount: sqm * rate,
    });
  }

  if (extras.caulking.enabled && n(extras.caulking.price) > 0) {
    lines.push({ description: "Caulking", amount: n(extras.caulking.price) });
  }

  if (extras.tileRemoval.enabled && n(extras.tileRemoval.price) > 0) {
    lines.push({ description: "Tile Removal & Disposal", amount: n(extras.tileRemoval.price) });
  }

  const subtotal = lines.reduce((s, l) => s + l.amount, 0);
  const gst = subtotal * 0.1;
  const total = subtotal + gst;
  const deposit = total * 0.3;

  return { lines, subtotal, gst, total, deposit };
}

// ─── PDF Generator ────────────────────────────────────────────────────────────
function generatePDF(customer: Customer, job: Job, extras: Extras) {
  const calc = calcLines(job, extras);
  const issueDate = todayStr();
  const validUntil = validityDate(job.validity);

  const scopeItems = [
    "Full mechanical preparation of concrete substrate via diamond grinding",
    "Removal of surface contaminants and laitance to ensure proper adhesion",
    "Repair of cracks, joints, and minor surface defects where required",
    "Application of primer coat",
    "Application of APC epoxy base coat (2 coats)",
    "Full broadcast of flake system to rejection",
    "Scrape and vacuum of excess flake",
    "Application of UV-stable polyaspartic clear topcoat (2 coats)",
    ...(extras.caulking.enabled ? ["Caulking of wall-floor junctions and expansion joints"] : []),
    ...(extras.tileRemoval.enabled ? ["Removal and disposal of existing tiles prior to substrate preparation"] : []),
  ];

  const lineRows = calc.lines.map(l => `
    <tr>
      <td class="desc">${l.description}${l.detail ? `<br/><span class="detail">${l.detail}</span>` : ""}</td>
      <td class="amt">$${fmt(l.amount)}</td>
    </tr>`).join("");

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>Quote ${job.quoteNumber} — Dynamic Flooring Solutions</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif; color: #1a1a1a; background: #fff; font-size: 13px; line-height: 1.55; }
  .page { max-width: 800px; margin: 0 auto; padding: 0 0 64px; }

  /* Header */
  .header { background: #111; padding: 28px 40px; display: flex; justify-content: space-between; align-items: flex-start; }
  .logo-wrap img { height: 52px; object-fit: contain; }
  .logo-fallback { color: #fff; font-size: 20px; font-weight: 800; }
  .quote-meta { text-align: right; }
  .quote-label { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #888; margin-bottom: 4px; }
  .quote-num { font-size: 22px; font-weight: 900; color: #F05A28; }
  .meta-line { font-size: 11px; color: #aaa; margin-top: 3px; }

  /* Body */
  .body { padding: 32px 40px; }

  /* Parties */
  .parties { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 28px; padding-bottom: 28px; border-bottom: 1px solid #e8e8e8; }
  .party-label { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #aaa; margin-bottom: 6px; }
  .party-name { font-weight: 800; font-size: 15px; color: #111; }
  .party-detail { font-size: 12px; color: #555; margin-top: 2px; }

  /* Section heading */
  .section-heading { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #aaa; margin-bottom: 10px; margin-top: 24px; }

  /* Scope box */
  .scope-box { background: #f9f9f9; border: 1px solid #eee; border-radius: 8px; padding: 16px 20px; margin-bottom: 24px; }
  .scope-box ul { padding-left: 18px; }
  .scope-box li { font-size: 12px; color: #444; margin-bottom: 4px; }
  .colour-line { margin-top: 10px; padding-top: 10px; border-top: 1px solid #eee; font-size: 12px; font-weight: 600; color: #111; }

  /* System features */
  .features { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; margin-bottom: 24px; }
  .feature { font-size: 11px; color: #555; display: flex; align-items: flex-start; gap: 6px; }
  .feature::before { content: "✓"; color: #F05A28; font-weight: 700; flex-shrink: 0; }

  /* Line items table */
  table { width: 100%; border-collapse: collapse; margin-bottom: 0; }
  thead th { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #888; padding: 9px 12px; background: #f5f5f5; border-bottom: 1px solid #e0e0e0; text-align: left; }
  thead th.amt { text-align: right; width: 120px; }
  tbody tr { border-bottom: 1px solid #f0f0f0; }
  tbody tr:last-child { border-bottom: none; }
  td.desc { padding: 11px 12px; vertical-align: top; }
  td.amt { padding: 11px 12px; text-align: right; font-weight: 700; white-space: nowrap; vertical-align: top; }
  .detail { font-size: 11px; color: #999; margin-top: 2px; display: block; font-weight: 400; }

  /* Totals */
  .totals-wrap { border-top: 2px solid #e0e0e0; }
  .totals-wrap table td { padding: 7px 12px; }
  .tot-lbl { color: #666; }
  .tot-val { text-align: right; font-weight: 600; width: 120px; }
  .grand-row td { font-size: 16px; font-weight: 900; color: #111; padding: 13px 12px !important; background: #f9f9f9; border-top: 2px solid #F05A28; }

  /* Deposit box */
  .deposit-box { margin-top: 24px; background: #fff7f4; border: 2px solid #F05A28; border-radius: 10px; padding: 18px 22px; }
  .dep-title { font-size: 12px; font-weight: 700; color: #111; margin-bottom: 4px; }
  .dep-amount { font-size: 26px; font-weight: 900; color: #F05A28; margin-bottom: 12px; }
  .bank-grid { display: grid; grid-template-columns: 110px 1fr; gap: 4px 12px; font-size: 12px; }
  .bank-lbl { color: #999; font-weight: 600; }
  .bank-val { color: #111; font-weight: 700; }

  /* Exclusions */
  .exclusions { margin-top: 24px; padding: 16px 20px; background: #fafafa; border: 1px solid #eee; border-radius: 8px; }
  .excl-title { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #aaa; margin-bottom: 8px; }
  .exclusions ul { padding-left: 18px; }
  .exclusions li { font-size: 11px; color: #777; margin-bottom: 3px; }

  /* Terms */
  .terms { margin-top: 20px; }
  .terms p { font-size: 11px; color: #888; margin-bottom: 3px; }

  /* Signature */
  .sig { margin-top: 32px; display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
  .sig-line { border-top: 1px solid #ccc; padding-top: 6px; font-size: 11px; color: #aaa; }

  @media print {
    body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .page { padding-bottom: 32px; }
  }
</style>
</head>
<body>
<div class="page">

  <div class="header">
    <div class="logo-wrap">
      <img src="${BIZ.logoUrl}" alt="Dynamic Flooring Solutions"
        onerror="this.style.display='none';document.getElementById('logo-fallback').style.display='block'"/>
      <div id="logo-fallback" class="logo-fallback" style="display:none">${BIZ.name}</div>
      <div style="color:#888;font-size:11px;margin-top:6px;">ABN ${BIZ.abn}</div>
      <div style="color:#888;font-size:11px;">${BIZ.address}</div>
      <div style="color:#888;font-size:11px;">${BIZ.phone} &nbsp;·&nbsp; ${BIZ.email}</div>
    </div>
    <div class="quote-meta">
      <div class="quote-label">Quotation</div>
      <div class="quote-num">${job.quoteNumber}</div>
      <div class="meta-line">Date: ${issueDate}</div>
      <div class="meta-line">Valid until: ${validUntil}</div>
    </div>
  </div>

  <div class="body">

    <div class="parties">
      <div>
        <div class="party-label">Quote prepared for</div>
        <div class="party-name">${customer.firstName} ${customer.lastName}</div>
        ${customer.phone ? `<div class="party-detail">${customer.phone}</div>` : ""}
        ${customer.email ? `<div class="party-detail">${customer.email}</div>` : ""}
        ${customer.address ? `<div class="party-detail">${customer.address}</div>` : ""}
      </div>
      <div>
        <div class="party-label">Prepared by</div>
        <div class="party-name">${BIZ.preparedBy}</div>
        <div class="party-detail">${BIZ.name}</div>
        <div class="party-detail">${BIZ.phone}</div>
        <div class="party-detail">${BIZ.email}</div>
      </div>
    </div>

    <div class="section-heading">Scope of Works</div>
    <div class="scope-box">
      <ul>
        ${scopeItems.map(s => `<li>${s}</li>`).join("")}
      </ul>
      ${job.colour ? `<div class="colour-line">Finished floor colour: ${job.colour}</div>` : ""}
    </div>

    <div class="section-heading">System Features</div>
    <div class="features">
      <div class="feature">Seamless, hard-wearing finish</div>
      <div class="feature">UV-stable topcoat to reduce yellowing</div>
      <div class="feature">Slip-resistant texture</div>
      <div class="feature">Easy to clean and maintain</div>
    </div>

    <div class="section-heading">Quote Breakdown</div>
    <table>
      <thead><tr><th>Description</th><th class="amt">Amount (ex. GST)</th></tr></thead>
      <tbody>${lineRows}</tbody>
    </table>

    <div class="totals-wrap">
      <table>
        <tr><td class="tot-lbl">Subtotal (ex. GST)</td><td class="tot-val">$${fmt(calc.subtotal)}</td></tr>
        <tr><td class="tot-lbl">GST (10%)</td><td class="tot-val">$${fmt(calc.gst)}</td></tr>
        <tr class="grand-row"><td>Total (incl. GST)</td><td style="text-align:right">$${fmt(calc.total)}</td></tr>
      </table>
    </div>

    <div class="deposit-box">
      <div class="dep-title">30% Deposit Required to Secure Booking</div>
      <div class="dep-amount">$${fmt(calc.deposit)}</div>
      <div class="bank-grid">
        <span class="bank-lbl">Account Name</span><span class="bank-val">${BIZ.bankName}</span>
        <span class="bank-lbl">BSB</span><span class="bank-val">${BIZ.bsb}</span>
        <span class="bank-lbl">Account No.</span><span class="bank-val">${BIZ.accountNo}</span>
        <span class="bank-lbl">Reference</span><span class="bank-val">${customer.firstName} ${customer.lastName} — ${job.quoteNumber}</span>
      </div>
    </div>

    <div class="exclusions">
      <div class="excl-title">Exclusions</div>
      <ul>
        <li>Removal of existing floor coverings unless specifically listed above</li>
        <li>Rectification of latent substrate defects not visible at time of quotation</li>
        <li>Plumbing, drainage modifications, electrical works, or builder's works</li>
        <li>Any works not specifically listed within this quotation</li>
      </ul>
    </div>

    <div class="terms">
      <p>• 30% deposit required to secure booking and allocate labour. Balance payable upon completion.</p>
      <p>• This quote is valid for ${job.validity} days from the date of issue (until ${validUntil}).</p>
      <p>• Any unforeseen structural repairs or moisture issues may incur additional costs (to be discussed prior).</p>
    </div>

    <div class="sig">
      <div><div class="sig-line">Customer signature &amp; date</div></div>
      <div><div class="sig-line">Dynamic Flooring Solutions — authorised signature</div></div>
    </div>

  </div>
</div>
</body>
</html>`;

  const w = window.open("", "_blank");
  if (!w) { alert("Allow popups to generate the PDF."); return; }
  w.document.write(html);
  w.document.close();
  setTimeout(() => w.print(), 600);
}

// ─── UI Helpers ───────────────────────────────────────────────────────────────
const ORANGE = "#F05A28";
const goldBtn: React.CSSProperties = { background: "linear-gradient(135deg, #7B35CC, #D4187A, #F05A28)", color: "#fff" };
const ghostBtn: React.CSSProperties = { background: "#111", color: "#9CA3AF", border: "1px solid #2A2A2A" };

function FieldRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <label className="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-1.5">{label}</label>
      {children}
    </div>
  );
}

function Input({ value, onChange, placeholder, type = "text" }: { value: string; onChange: (v: string) => void; placeholder?: string; type?: string }) {
  return (
    <input
      type={type}
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none"
      style={{ background: "#111", border: "1px solid #2A2A2A" }}
    />
  );
}

function NumberInput({ value, onChange, placeholder }: { value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <input
      type="number"
      inputMode="decimal"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none"
      style={{ background: "#111", border: "1px solid #2A2A2A" }}
    />
  );
}

function Toggle({ label, enabled, onToggle, children }: { label: string; enabled: boolean; onToggle: () => void; children?: React.ReactNode }) {
  return (
    <div className="rounded-xl mb-3 overflow-hidden" style={{ border: `1px solid ${enabled ? ORANGE : "#222"}` }}>
      <button type="button" onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-3.5 text-left"
        style={{ background: enabled ? "#1A0A00" : "#111" }}>
        <span className="text-sm font-semibold" style={{ color: enabled ? ORANGE : "#9CA3AF" }}>{label}</span>
        <span className="text-xs px-2 py-0.5 rounded-full font-bold"
          style={{ background: enabled ? `${ORANGE}30` : "#222", color: enabled ? ORANGE : "#555" }}>
          {enabled ? "ON" : "OFF"}
        </span>
      </button>
      {enabled && children && <div className="px-4 pb-4 pt-2" style={{ background: "#0D0700" }}>{children}</div>}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function QuoteBuilderClient() {
  const [step, setStep] = useState<Step>("customer");

  // GHL contact search
  const [search, setSearch] = useState("");
  const [allLeads, setAllLeads] = useState<GHLContact[]>([]);
  const [leadsLoading, setLeadsLoading] = useState(true);
  const [leadsError, setLeadsError] = useState("");
  const [isNewCustomer, setIsNewCustomer] = useState(false);

  const [customer, setCustomer] = useState<Customer>({ firstName: "", lastName: "", phone: "", email: "", address: "" });
  const setC = (k: keyof Customer, v: string) => setCustomer(p => ({ ...p, [k]: v }));

  useEffect(() => {
    fetch("/api/ghl-search-contacts")
      .then(r => r.json())
      .then(data => {
        if (Array.isArray(data)) setAllLeads(data);
        else setLeadsError(data?.error ?? "Failed to load leads");
      })
      .catch(() => setLeadsError("Network error"))
      .finally(() => setLeadsLoading(false));
  }, []);

  const filteredLeads = search.length < 1 ? allLeads : allLeads.filter(c => {
    const q = search.toLowerCase();
    return `${c.firstName} ${c.lastName}`.toLowerCase().includes(q) || c.phone.replace(/\D/g, "").includes(q.replace(/\D/g, ""));
  });

  const [job, setJob] = useState<Job>({
    projectType: "",
    isCommercial: false,
    sqm: "",
    rate: String(DEFAULTS.residentialRate),
    colour: "",
    quoteNumber: defaultQuoteNum(),
    validity: "14",
  });
  const setJ = (k: keyof Job, v: string | boolean) => setJob(p => ({ ...p, [k]: v }));

  const [extras, setExtras] = useState<Extras>({
    caulking: { enabled: false, price: String(DEFAULTS.caulkingPrice) },
    tileRemoval: { enabled: false, price: String(DEFAULTS.tileRemovalPrice) },
  });

  const calc = calcLines(job, extras);

  // ── Step: Customer ──────────────────────────────────────────────────────────
  const stepCustomer = (
    <div>
      <h2 className="text-lg font-bold text-white mb-1">Who is this quote for?</h2>
      <p className="text-xs text-gray-500 mb-6">Search existing customers or add a new one</p>

      {!isNewCustomer ? (
        <>
          <FieldRow label="Pre-Qualified Leads">
            {leadsLoading ? (
              <p className="text-xs text-gray-500 py-2">Loading leads from CRM...</p>
            ) : leadsError ? (
              <p className="text-xs text-red-400 py-2">{leadsError}</p>
            ) : (
              <div>
                <Input value={search} onChange={setSearch} placeholder={`Search ${allLeads.length} leads by name or phone...`} />
                <div className="mt-2 rounded-xl overflow-hidden max-h-72 overflow-y-auto" style={{ border: "1px solid #2A2A2A" }}>
                  {filteredLeads.length === 0 ? (
                    <p className="text-xs text-gray-600 px-4 py-3">No matches</p>
                  ) : filteredLeads.map(c => (
                    <button key={c.id} type="button"
                      onClick={() => {
                        setCustomer({ ghlId: c.id, firstName: c.firstName, lastName: c.lastName, phone: c.phone, email: c.email, address: c.address });
                        setSearch(`${c.firstName} ${c.lastName}`.trim());
                      }}
                      className="w-full text-left px-4 py-3 hover:bg-white/5 transition-colors border-b last:border-b-0"
                      style={{ borderColor: "#1A1A1A", background: customer.ghlId === c.id ? "#1A0A00" : "transparent" }}>
                      <div className="text-sm font-semibold text-white">{c.firstName} {c.lastName}</div>
                      <div className="text-xs text-gray-500">{c.phone}{c.email ? ` · ${c.email}` : ""}{c.stageName ? ` · ${c.stageName}` : ""}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </FieldRow>

          {customer.ghlId && (
            <div className="rounded-xl p-4 mb-5" style={{ background: "#0D0700", border: `1px solid ${ORANGE}50` }}>
              <p className="text-xs font-bold mb-1" style={{ color: ORANGE }}>Customer loaded from Pre-Qualified pipeline</p>
              <p className="text-sm text-white font-semibold">{customer.firstName} {customer.lastName}</p>
              <p className="text-xs text-gray-400">{customer.phone}{customer.email ? ` · ${customer.email}` : ""}</p>
              {customer.address && <p className="text-xs text-gray-400">{customer.address}</p>}
            </div>
          )}

          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 h-px" style={{ background: "#222" }} />
            <span className="text-xs text-gray-600">or</span>
            <div className="flex-1 h-px" style={{ background: "#222" }} />
          </div>

          <button type="button"
            onClick={() => { setIsNewCustomer(true); setCustomer({ firstName: "", lastName: "", phone: "", email: "", address: "" }); }}
            className="w-full py-3.5 rounded-xl font-bold text-sm" style={ghostBtn}>
            + New Customer
          </button>
        </>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-3">
            <FieldRow label="First Name *"><Input value={customer.firstName} onChange={v => setC("firstName", v)} placeholder="First" /></FieldRow>
            <FieldRow label="Last Name"><Input value={customer.lastName} onChange={v => setC("lastName", v)} placeholder="Last" /></FieldRow>
          </div>
          <FieldRow label="Mobile *"><Input value={customer.phone} onChange={v => setC("phone", v)} placeholder="04XX XXX XXX" type="tel" /></FieldRow>
          <FieldRow label="Email"><Input value={customer.email} onChange={v => setC("email", v)} placeholder="email@example.com" /></FieldRow>
          <FieldRow label="Job Address"><Input value={customer.address} onChange={v => setC("address", v)} placeholder="123 Example St, Suburb NSW" /></FieldRow>
          <button type="button" onClick={() => setIsNewCustomer(false)} className="text-xs text-gray-600 hover:text-gray-400 mt-1">← Back to search</button>
        </>
      )}

      <button type="button"
        disabled={!customer.firstName || !customer.phone}
        onClick={() => setStep("job")}
        className="w-full py-4 rounded-xl font-black text-base uppercase tracking-wide mt-6 disabled:opacity-40"
        style={goldBtn}>
        Next — Job Details →
      </button>
    </div>
  );

  // ── Step: Job ───────────────────────────────────────────────────────────────
  const stepJob = (
    <div>
      <h2 className="text-lg font-bold text-white mb-1">Job Details</h2>
      <p className="text-xs text-gray-500 mb-6">Enter the flooring scope and pricing</p>

      <FieldRow label="Quote Number">
        <Input value={job.quoteNumber} onChange={v => setJ("quoteNumber", v)} placeholder="e.g. DFS-001" />
      </FieldRow>

      <FieldRow label="Quote Validity">
        <div className="grid grid-cols-2 gap-2">
          {(["14", "30"] as const).map(d => (
            <button key={d} type="button"
              onClick={() => setJ("validity", d)}
              className="py-3 rounded-xl text-sm font-bold transition-all"
              style={job.validity === d ? { background: ORANGE, color: "#fff" } : ghostBtn}>
              {d} Days
            </button>
          ))}
        </div>
      </FieldRow>

      <FieldRow label="Job Type">
        <div className="grid grid-cols-2 gap-2 mb-3">
          {[{ v: false, label: "Residential" }, { v: true, label: "Commercial" }].map(opt => (
            <button key={String(opt.v)} type="button"
              onClick={() => {
                setJ("isCommercial", opt.v);
                if (!opt.v) setJ("rate", String(DEFAULTS.residentialRate));
              }}
              className="py-3 rounded-xl text-sm font-bold transition-all"
              style={job.isCommercial === opt.v ? { background: ORANGE, color: "#fff" } : ghostBtn}>
              {opt.label}
            </button>
          ))}
        </div>
      </FieldRow>

      <FieldRow label="Project Description (free text)">
        <Input value={job.projectType} onChange={v => setJ("projectType", v)} placeholder="e.g. Garage, Warehouse floor, Balcony" />
      </FieldRow>

      <FieldRow label="Floor Area (m²)">
        <NumberInput value={job.sqm} onChange={v => setJ("sqm", v)} placeholder="e.g. 60" />
      </FieldRow>

      <FieldRow label={`Rate ($/m²)${!job.isCommercial ? " — default $100" : ""}`}>
        <NumberInput value={job.rate} onChange={v => setJ("rate", v)} placeholder={job.isCommercial ? "e.g. 200" : "100"} />
      </FieldRow>

      {n(job.sqm) > 0 && n(job.rate) > 0 && (
        <div className="rounded-xl p-3 mb-4" style={{ background: "#0D0700", border: `1px solid ${ORANGE}40` }}>
          <p className="text-xs text-gray-400">Base job total (ex. GST)</p>
          <p className="text-xl font-black" style={{ color: ORANGE }}>${fmt(n(job.sqm) * n(job.rate))}</p>
        </div>
      )}

      <FieldRow label="Finish Colour (leave blank if not decided)">
        <Input value={job.colour} onChange={v => setJ("colour", v)} placeholder="e.g. Grey, Charcoal, Light Stone" />
      </FieldRow>

      <div className="flex gap-3 mt-2">
        <button type="button" onClick={() => setStep("customer")} className="py-3 px-5 rounded-xl text-sm font-bold" style={ghostBtn}>← Back</button>
        <button type="button"
          disabled={!job.sqm || !job.rate || !job.quoteNumber}
          onClick={() => setStep("extras")}
          className="flex-1 py-4 rounded-xl font-black text-base uppercase tracking-wide disabled:opacity-40" style={goldBtn}>
          Next — Extras →
        </button>
      </div>
    </div>
  );

  // ── Step: Extras ────────────────────────────────────────────────────────────
  const stepExtras = (
    <div>
      <h2 className="text-lg font-bold text-white mb-1">Any extras on this job?</h2>
      <p className="text-xs text-gray-500 mb-6">Toggle each item and set the price</p>

      <Toggle label="Caulking" enabled={extras.caulking.enabled}
        onToggle={() => setExtras(p => ({ ...p, caulking: { ...p.caulking, enabled: !p.caulking.enabled } }))}>
        <FieldRow label="Price ($)">
          <NumberInput value={extras.caulking.price} onChange={v => setExtras(p => ({ ...p, caulking: { ...p.caulking, price: v } }))} />
        </FieldRow>
      </Toggle>

      <Toggle label="Tile Removal & Disposal" enabled={extras.tileRemoval.enabled}
        onToggle={() => setExtras(p => ({ ...p, tileRemoval: { ...p.tileRemoval, enabled: !p.tileRemoval.enabled } }))}>
        <FieldRow label="Price ($)">
          <NumberInput value={extras.tileRemoval.price} onChange={v => setExtras(p => ({ ...p, tileRemoval: { ...p.tileRemoval, price: v } }))} />
        </FieldRow>
      </Toggle>

      <div className="flex gap-3 mt-6">
        <button type="button" onClick={() => setStep("job")} className="py-3 px-5 rounded-xl text-sm font-bold" style={ghostBtn}>← Back</button>
        <button type="button" onClick={() => setStep("preview")}
          className="flex-1 py-4 rounded-xl font-black text-base uppercase tracking-wide" style={goldBtn}>
          Review Quote →
        </button>
      </div>
    </div>
  );

  // ── Step: Preview ───────────────────────────────────────────────────────────
  const stepPreview = (
    <div>
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-lg font-bold text-white">Quote Preview</h2>
        <span className="text-xs font-mono" style={{ color: ORANGE }}>{job.quoteNumber}</span>
      </div>
      <p className="text-xs text-gray-500 mb-5">{customer.firstName} {customer.lastName} · {customer.phone}</p>

      {/* Line items */}
      <div className="rounded-xl overflow-hidden mb-4" style={{ border: "1px solid #2A2A2A" }}>
        {calc.lines.map((l, i) => (
          <div key={i} className="flex justify-between items-start px-4 py-3"
            style={{ borderBottom: i < calc.lines.length - 1 ? "1px solid #1A1A1A" : "none" }}>
            <div>
              <p className="text-sm text-white font-medium">{l.description}</p>
              {l.detail && <p className="text-xs text-gray-500 mt-0.5">{l.detail}</p>}
            </div>
            <span className="text-sm font-bold ml-4 whitespace-nowrap text-white">${fmt(l.amount)}</span>
          </div>
        ))}
        {calc.lines.length === 0 && (
          <p className="text-xs text-gray-600 px-4 py-3">No items — go back and enter job details.</p>
        )}
      </div>

      {/* Totals */}
      <div className="rounded-xl overflow-hidden mb-5" style={{ border: "1px solid #2A2A2A" }}>
        {[
          { label: "Subtotal (ex. GST)", value: `$${fmt(calc.subtotal)}` },
          { label: "GST (10%)", value: `$${fmt(calc.gst)}` },
        ].map((r, i) => (
          <div key={i} className="flex justify-between px-4 py-3" style={{ borderBottom: "1px solid #1A1A1A" }}>
            <span className="text-sm text-gray-400">{r.label}</span>
            <span className="text-sm font-semibold text-white">{r.value}</span>
          </div>
        ))}
        <div className="flex justify-between px-4 py-4" style={{ background: "#0D0700" }}>
          <span className="text-base font-black text-white">Total (incl. GST)</span>
          <span className="text-xl font-black" style={{ color: ORANGE }}>${fmt(calc.total)}</span>
        </div>
      </div>

      {/* Deposit */}
      <div className="rounded-xl p-4 mb-6" style={{ background: "#0D0700", border: `1px solid ${ORANGE}50` }}>
        <p className="text-xs text-gray-400 mb-0.5">30% Deposit Required to Secure Booking</p>
        <p className="text-2xl font-black" style={{ color: ORANGE }}>${fmt(calc.deposit)}</p>
        <p className="text-xs text-gray-600 mt-1">BSB {BIZ.bsb} &nbsp;·&nbsp; Acc {BIZ.accountNo}</p>
      </div>

      <div className="space-y-3">
        <button type="button"
          disabled={calc.lines.length === 0}
          onClick={() => generatePDF(customer, job, extras)}
          className="w-full py-4 rounded-xl font-black text-base uppercase tracking-wide disabled:opacity-40"
          style={goldBtn}>
          Generate PDF / Print Quote
        </button>
        <button type="button" onClick={() => setStep("extras")}
          className="w-full py-3 rounded-xl text-xs text-gray-600 hover:text-gray-400">
          ← Edit Extras
        </button>
      </div>
    </div>
  );

  // ─── Step Indicator ──────────────────────────────────────────────────────────
  const steps: { key: Step; label: string }[] = [
    { key: "customer", label: "Customer" },
    { key: "job", label: "Job" },
    { key: "extras", label: "Extras" },
    { key: "preview", label: "Quote" },
  ];
  const stepIndex = steps.findIndex(s => s.key === step);

  return (
    <div style={{ background: "#0C0C0C", minHeight: "100vh", color: "#fff" }}>
      {/* Header */}
      <header style={{ borderBottom: "1px solid #1A1A1A", background: "#0C0C0C" }}>
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: ORANGE }}>Dynamic Flooring Solutions</p>
            <p className="text-white font-black text-lg leading-tight">Quote Builder</p>
          </div>
          <span className="text-xs font-mono text-gray-600">{job.quoteNumber}</span>
        </div>
      </header>

      {/* Step indicator */}
      <div style={{ borderBottom: "1px solid #1A1A1A", background: "#111" }}>
        <div className="max-w-2xl mx-auto px-4 py-3 flex gap-1">
          {steps.map((s, i) => (
            <div key={s.key} className="flex-1 text-center">
              <div className="text-xs font-bold"
                style={{ color: i < stepIndex ? ORANGE : i === stepIndex ? "#fff" : "#444" }}>
                {i < stepIndex ? "✓ " : ""}{s.label}
              </div>
              <div className="mt-1.5 h-0.5 rounded-full"
                style={{ background: i <= stepIndex ? ORANGE : "#222" }} />
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 py-8">
        {step === "customer" && stepCustomer}
        {step === "job" && stepJob}
        {step === "extras" && stepExtras}
        {step === "preview" && stepPreview}
      </div>
    </div>
  );
}
