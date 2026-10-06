import { useState } from "react";
import { Button, Card, Heading, PrimaryButton, Text } from "@shared/ui";

export const styles = `
.empty-wrap {
  container-type: inline-size;
  container-name: empty;
}
.empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--spacing-5);
  max-width: 440px;
  margin: 0 auto;
}
.empty-art {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  border-radius: var(--radius-full);
  background: var(--blue-50);
  color: var(--blue-600);
}
.empty-copy {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
}
.empty-actions {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: var(--spacing-3);
  width: 100%;
}
.empty-actions > button {
  width: 100%;
  min-height: 44px;
}
.empty-actions button:focus-visible {
  outline: 2px solid var(--blue-600);
  outline-offset: 2px;
}
.empty-steps {
  list-style: none;
  margin: 0;
  padding: var(--spacing-4) 0 0;
  border-top: 1px solid var(--gray-200);
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
  text-align: left;
  font-size: var(--text-sm);
  color: var(--gray-700);
}
.empty-steps li {
  display: flex;
  gap: var(--spacing-2);
  align-items: flex-start;
  line-height: 1.5;
}
.empty-steps svg {
  flex: none;
  margin-top: 3px;
  color: var(--teal-600);
}
.empty-status {
  font-size: var(--text-sm);
  color: var(--gray-700);
  min-height: 1.5em;
  margin: 0;
}
@container empty (min-width: 440px) {
  .empty-actions {
    flex-direction: row;
    justify-content: center;
  }
  .empty-actions > button {
    width: auto;
  }
}
`;

function InvoiceIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8M8 17h5" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function InvoicesEmptyState() {
  const [status, setStatus] = useState("");

  return (
    <div className="empty-wrap">
      <Card padding={32}>
        <section className="empty" aria-labelledby="invoices-empty-title">
          <div className="empty-art">
            <InvoiceIcon />
          </div>

          <div className="empty-copy">
            <Heading level={2}>
              <span id="invoices-empty-title">No invoices yet</span>
            </Heading>
            <Text gray>
              Create your first invoice to start billing clients. Sent, paid and overdue invoices will show up here.
            </Text>
          </div>

          <div className="empty-actions">
            <PrimaryButton onClick={() => setStatus("Opening a new invoice…")}>Create invoice</PrimaryButton>
            <Button color="gray" outline onClick={() => setStatus("Choose a CSV file to import.")}>
              Import from CSV
            </Button>
          </div>

          <p className="empty-status" role="status" aria-live="polite">
            {status}
          </p>

          <ul className="empty-steps">
            <li>
              <CheckIcon />
              <span>Add line items, taxes and due dates in a couple of minutes.</span>
            </li>
            <li>
              <CheckIcon />
              <span>Moving from another tool? Import past invoices from a CSV file.</span>
            </li>
          </ul>
        </section>
      </Card>
    </div>
  );
}
