import { Button, EmptyState, Heading, Icon, Stack, Text } from "@acme/ui";

export const styles = `
:host {
  display: block;
  container-type: inline-size;
}

.invoices-page {
  padding: var(--acme-space-md);
  background: var(--acme-color-surface-subtle);
}

@container (min-width: 480px) {
  .invoices-page {
    padding: var(--acme-space-lg);
  }
}
`;

export default function InvoicesEmptyState() {
  return (
    <div className="invoices-page">
      <Stack gap="lg">
        <Stack gap="xs">
          <Heading level={1} size="xl">
            Invoices
          </Heading>
          <Text tone="muted">Bill clients and track what you're owed.</Text>
        </Stack>
        <EmptyState
          icon="invoice"
          title="No invoices yet"
          description="Invoices you create or import will appear here, with their status, due date and amount, so you can see what's been paid and what's outstanding."
          actions={
            <>
              <Button variant="primary">Create invoice</Button>
              <Button variant="link">
                <Icon name="upload" />
                Import from CSV
              </Button>
            </>
          }
        />
      </Stack>
    </div>
  );
}
