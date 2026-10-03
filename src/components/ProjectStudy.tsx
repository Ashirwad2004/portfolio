import "./project-study.css";

function WindowBar({ name, mark, action }: { name: string; mark: string; action: string }) {
  return (
    <span className="study-window-bar">
      <span className="study-product-mark">{mark}</span><span className="study-product-name">{name}</span>
      <span className="study-window-action">{action}</span><span className="study-person">A</span>
    </span>
  );
}

function FinanceStudy() {
  return (
    <span className="project-study study-finance" aria-hidden="true">
      <span className="study-window">
        <WindowBar name="RupeBill" mark="R" action="Your workspace" />
        <span className="study-app-body">
          <span className="study-sidebar">
            <span className="study-nav-label">WORKSPACE</span>
            <span>Overview</span><span className="study-nav-active">Expenses</span><span>Invoices</span><span>Inventory</span>
            <span className="study-sidebar-bottom">Smart fill <span>↗</span></span>
          </span>
          <span className="study-main">
            <span className="study-heading-row"><span className="study-page-title">Expenses</span><span className="study-ui-action">+ Add expense</span></span>
            <span className="study-finance-summary"><span>This month<span className="study-number">₹4,750<span className="study-number-caption">Recorded expenses</span></span></span><span className="study-sparkline"><svg viewBox="0 0 160 60"><path d="M2 50 C20 50 20 28 37 33 S62 17 75 25 S95 8 111 13 S138 25 157 5" /></svg><span>Expense overview</span></span></span>
            <span className="study-table-head"><span>Recent transactions</span><span>Amount</span></span>
            {[["Electricity bill", "Utilities", "₹1,200", "E"], ["Cab ride", "Travel", "₹400", "C"], ["Office supplies", "Operations", "₹3,150", "O"]].map(([title, detail, value, letter]) => (
              <span className="study-transaction" key={title}><span className="study-transaction-icon">{letter}</span><span className="study-transaction-label">{title}<span>{detail}</span></span><span className="study-transaction-value">{value}</span></span>
            ))}
            <span className="study-prompt"><span className="study-prompt-spark">✳</span> “Rs 1200 electricity bill”<span>↗</span></span>
          </span>
        </span>
      </span>
      <span className="study-receipt study-floating-card"><span className="study-receipt-top"><span className="study-receipt-symbol">✓</span> Receipt scanned</span><span className="study-receipt-vendor">Electricity bill</span><span className="study-receipt-rule" /><span className="study-receipt-line">Amount <strong>₹1,200</strong></span><span className="study-receipt-line">Category <strong>Utilities</strong></span><span className="study-receipt-confirm">Ready to review <span>↗</span></span></span>
    </span>
  );
}

function ChatStudy() {
  return (
    <span className="project-study study-chat" aria-hidden="true">
      <span className="study-window">
        <WindowBar name="NexusChat" mark="N" action="Messages" />
        <span className="study-app-body">
          <span className="study-chat-sidebar"><span className="study-nav-label">YOUR CONVERSATIONS</span><span className="study-chat-contact study-contact-active"><span className="study-chat-avatar">P</span><span>Project team<span>Sounds good!</span></span><i /></span><span className="study-chat-contact"><span className="study-chat-avatar study-avatar-secondary">D</span><span>Design review<span>The layout is ready.</span></span></span><span className="study-chat-contact"><span className="study-chat-avatar study-avatar-tertiary">C</span><span>Community<span>Welcome to the team.</span></span></span></span>
          <span className="study-chat-main">
            <span className="study-chat-heading"><strong>Project team</strong><span><i /> Connected</span></span>
            <span className="study-chat-day">Today</span>
            <span className="study-message study-message-in">The new layout is ready to review.<span>10:24</span></span>
            <span className="study-message study-message-out">Thanks — I’ll take a look.<span>10:25 <b>✓✓</b></span></span>
            <span className="study-message study-message-in study-message-short">Sounds good!<span>10:25</span></span>
            <span className="study-typing"><i /><i /><i /></span>
            <span className="study-chat-input">Write a message… <span>↗</span></span>
          </span>
        </span>
      </span>
      <span className="study-message-notice study-floating-card"><span className="study-notice-icon">↗</span><span>Made for conversation<span>Personal & community messages</span></span></span>
    </span>
  );
}

function LogisticsStudy() {
  return (
    <span className="project-study study-logistics" aria-hidden="true">
      <span className="study-window">
        <WindowBar name="LogiFlow" mark="L" action="Fleet workspace" />
        <span className="study-route-toolbar"><strong>Fleet overview</strong><span><i /> Live routes</span></span>
        <span className="study-map">
          <svg className="study-map-drawing" viewBox="0 0 510 260" preserveAspectRatio="xMidYMid slice">
            <rect width="510" height="260" fill="#f0ede3" />
            <path d="M0 90 110 0H178L65 145ZM328 0H433L510 93V132L408 96Z M0 198L125 169 161 260H0Z M317 182 412 160 454 260H350Z" fill="#e1e4d5" />
            <path d="M-10 37 528 145 M52 -20 201 280 M300 -10 223 270 M-10 215 519 48 M440 -10 383 280" stroke="#fffdf8" strokeWidth="14" fill="none" />
            <path d="M-10 37 528 145 M52 -20 201 280 M300 -10 223 270 M-10 215 519 48 M440 -10 383 280" stroke="#dad7ce" strokeWidth="1" fill="none" />
            <path className="study-route-shadow" d="M105 165 C148 181 160 104 216 100 S310 128 361 66" />
            <path className="study-route-path" d="M105 165 C148 181 160 104 216 100 S310 128 361 66" />
            <circle cx="105" cy="165" r="10" fill="#fdfcf9" stroke="#556b74" strokeWidth="3" /><circle cx="105" cy="165" r="3" fill="#556b74" />
            <circle cx="361" cy="66" r="10" fill="#fdfcf9" stroke="#556b74" strokeWidth="3" /><circle cx="361" cy="66" r="3" fill="#556b74" />
            <g className="study-route-truck"><rect x="223" y="89" width="32" height="25" rx="6" fill="#556b74" /><path d="M232 98h8v7h-8zM240 100h4l3 3v2h-7" fill="none" stroke="white" strokeWidth="1.5" /><circle cx="234" cy="106" r="1.6" fill="white" /><circle cx="244" cy="106" r="1.6" fill="white" /></g>
            <text x="70" y="192">Hub A</text><text x="345" y="46">Hub B</text>
          </svg>
          <span className="study-map-route"><span className="study-map-route-dot" /><span>Route 01<strong>In transit</strong></span><span>↗</span></span>
        </span>
        <span className="study-route-bottom"><span><i /> Dispatch queue</span><span>View network ↗</span></span>
      </span>
      <span className="study-hub-card study-floating-card"><span className="study-hub-title">Hub A <span>Capacity overview</span></span><span className="study-hub-bar-label">Receiving <span>Inbound</span></span><span className="study-hub-bar"><i /></span><span className="study-hub-bar-label">Dispatch <span>Outbound</span></span><span className="study-hub-bar study-hub-bar-second"><i /></span></span>
    </span>
  );
}

function BankingStudy() {
  return (
    <span className="project-study study-banking" aria-hidden="true">
      <span className="study-window">
        <WindowBar name="BankBI" mark="B" action="Banking intelligence" />
        <span className="study-bank-main">
          <span className="study-heading-row"><span className="study-page-title">Ledger overview</span><span className="study-ui-action">Export report ↗</span></span>
          <span className="study-bank-summary"><span>Opening balance<strong>₹1,80,000</strong></span><span>Closing balance<strong>₹2,14,000</strong></span></span>
          <span className="study-bank-chart"><span>Cash-flow trend<span>Monthly view</span></span><svg viewBox="0 0 420 85" preserveAspectRatio="none"><path className="study-chart-grid" d="M0 15H420 M0 42H420 M0 70H420" /><path className="study-chart-area" d="M0 70 C32 70 30 44 61 51 S103 27 132 33 S174 56 209 43 S251 13 280 21 S326 36 350 22 S391 15 420 4 V85 H0Z" /><path className="study-chart-line" d="M0 70 C32 70 30 44 61 51 S103 27 132 33 S174 56 209 43 S251 13 280 21 S326 36 350 22 S391 15 420 4" /></svg><span className="study-chart-axis"><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span></span></span>
          <span className="study-ledger-table"><span className="study-ledger-head"><span>Account</span><span>Type</span><span>Balance</span></span><span><span>Cash & deposits</span><span>Asset</span><strong>₹2,14,000</strong></span><span><span>Loan portfolio</span><span>Asset</span><strong>₹3,60,000</strong></span></span>
        </span>
      </span>
      <span className="study-export-card study-floating-card"><span className="study-export-icon"><svg viewBox="0 0 24 24"><path d="M7 3h7l4 4v14H7z M14 3v5h4 M10 12h5 M10 15h5 M10 18h3" /></svg></span><span>Compliance report<span>Structured. Ready to export.</span></span><span className="study-export-check">✓</span></span>
    </span>
  );
}

export function ProjectStudy({ kind }: { kind: string }) {
  if (kind === "lavender") return <FinanceStudy />;
  if (kind === "blue") return <ChatStudy />;
  if (kind === "sand") return <LogisticsStudy />;
  return <BankingStudy />;
}
