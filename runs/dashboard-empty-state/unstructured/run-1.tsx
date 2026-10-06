import { Button, Card, Col, Text } from "@shared/ui";

export const styles = `
:host {
  display: block;
  container-type: inline-size;
}

.empty {
  text-align: center;
}

.empty__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: var(--radius-full);
  background: var(--blue-50);
  color: var(--blue-600);
}

.empty__steps {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
  text-align: left;
  font-size: var(--text-sm);
  color: var(--gray-700);
}

.empty__steps li {
  display: flex;
  gap: var(--spacing-2);
  align-items: flex-start;
  line-height: 1.5;
}

.empty__step-num {
  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-top: 1px;
  border-radius: var(--radius-full);
  background: var(--gray-100);
  color: var(--gray-700);
  font-size: var(--text-xs);
  font-weight: 600;
}

.empty__actions {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
  width: 100%;
}

.empty__actions > .btn {
  width: 100%;
}

@container (min-width: 440px) {
  .empty__actions {
    flex-direction: row;
    justify-content: center;
    width: auto;
  }
  .empty__actions > .btn {
    width: auto;
  }
}
`;

function InvoiceIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8M8 17h5" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" aria-hidden="true" focusable="false">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function UploadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M12 15V3M7 8l5-5 5 5" />
      <path d="M4 15v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4" />
    </svg>
  );
}

export default function InvoicesEmptyState() {
  return (
    <section className="empty" aria-labelledby="invoices-empty-title">
      <Card padding={32}>
        <Col gap={24} align="center">
          <span className="empty__icon">
            <InvoiceIcon />
          </span>

          <Col gap={8} align="center" style={{ maxWidth: 400 }}>
            <h2 id="invoices-empty-title" className="heading heading--2">
              No invoices yet
            </h2>
            <Text size="sm" gray>
              Invoices you create or import will show up here, so you can see what's been sent, what's paid and what's overdue.
            </Text>
          </Col>

          <ol className="empty__steps" aria-label="How it works">
            <li>
              <span className="empty__step-num" aria-hidden="true">1</span>
              <span>Add a client, line items and a due date.</span>
            </li>
            <li>
              <span className="empty__step-num" aria-hidden="true">2</span>
              <span>Send it by email or share a payment link.</span>
            </li>
            <li>
              <span className="empty__step-num" aria-hidden="true">3</span>
              <span>Track its status here until it's paid.</span>
            </li>
          </ol>

          <div className="empty__actions">
            <Button color="blue" size="md">
              <PlusIcon />
              Create your first invoice
            </Button>
            <Button color="gray" size="md" outline>
              <UploadIcon />
              Import from CSV
            </Button>
          </div>

          <Text size="xs" gray>
            Moving from another tool? Export your invoices as a CSV and import them all at once.
          </Text>
        </Col>
      </Card>
    </section>
  );
}
