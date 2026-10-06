import { Button, Card, Heading, PrimaryButton, Text } from "@shared/ui";

export const styles = `
:host {
  display: block;
  container-type: inline-size;
}

.ies {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--spacing-5);
  max-width: 440px;
  margin: 0 auto;
}

.ies__art {
  display: grid;
  place-items: center;
  width: 72px;
  height: 72px;
  border-radius: var(--radius-full);
  background: var(--blue-50);
  color: var(--blue-600);
}

.ies__copy {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
}

.ies__steps {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
  text-align: left;
  width: 100%;
}

.ies__step {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-3);
  font-size: var(--text-sm);
  line-height: 1.5;
  color: var(--gray-700);
}

.ies__num {
  flex: none;
  display: grid;
  place-items: center;
  width: 22px;
  height: 22px;
  margin-top: 1px;
  border-radius: var(--radius-full);
  background: var(--gray-100);
  color: var(--gray-700);
  font-size: var(--text-xs);
  font-weight: 700;
}

.ies__actions {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
  width: 100%;
}

.ies__actions > button {
  width: 100%;
  justify-content: center;
}

.ies__actions button:focus-visible {
  outline: 2px solid var(--blue-600);
  outline-offset: 2px;
}

.ies__hint {
  margin: 0;
  font-size: var(--text-xs);
  line-height: 1.5;
  color: var(--gray-500);
}

@container (min-width: 440px) {
  .ies__actions {
    flex-direction: row;
    justify-content: center;
    width: auto;
  }
  .ies__actions > button {
    width: auto;
  }
  .ies__steps {
    max-width: 360px;
  }
}
`;

function InvoiceIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M6 2.75h9l3.25 3.25v15.25l-2-1.25-2 1.25-2-1.25-2 1.25-2-1.25-2 1.25V2.75z" />
      <path d="M15 2.75V6h3.25" />
      <path d="M9 10h6M9 13.5h6M9 17h3.5" />
    </svg>
  );
}

export default function InvoicesEmptyState() {
  return (
    <Card padding={32}>
      <section className="ies" aria-labelledby="invoices-empty-title">
        <div className="ies__art">
          <InvoiceIcon />
        </div>

        <div className="ies__copy">
          <Heading level={2}>
            <span id="invoices-empty-title">No invoices yet</span>
          </Heading>
          <Text size="sm" gray>
            Invoices you send will appear here, with their status, due date and amount, so you can see what's been paid and what's still outstanding.
          </Text>
        </div>

        <ol className="ies__steps" aria-label="How it works">
          <li className="ies__step">
            <span className="ies__num" aria-hidden="true">1</span>
            <span>Add a customer and the work or products you're billing for.</span>
          </li>
          <li className="ies__step">
            <span className="ies__num" aria-hidden="true">2</span>
            <span>Send the invoice by email or share a payment link.</span>
          </li>
          <li className="ies__step">
            <span className="ies__num" aria-hidden="true">3</span>
            <span>Track payments here as they come in.</span>
          </li>
        </ol>

        <div className="ies__actions">
          <PrimaryButton>Create your first invoice</PrimaryButton>
          <Button color="gray" outline>
            Import from CSV
          </Button>
        </div>

        <p className="ies__hint">Moving from another tool? Export your invoices as a CSV file and import them in one step.</p>
      </section>
    </Card>
  );
}
