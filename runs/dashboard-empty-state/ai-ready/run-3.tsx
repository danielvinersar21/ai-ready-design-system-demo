import { Button, EmptyState, Heading, Stack, Text } from "@acme/ui";

export const styles = `
.invoices-page {
  container-type: inline-size;
  padding: var(--acme-space-md);
}
@container (min-width: 480px) {
  .invoices-page .acme-empty-state {
    padding: calc(var(--acme-space-xl) * 1.5) var(--acme-space-xl);
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
          description="Invoices you create or import will appear here, along with their status, amount due and payment dates."
          actions={
            <>
              <Button variant="primary">Create invoice</Button>
              <Button variant="link">Import from CSV</Button>
            </>
          }
        />
      </Stack>
    </div>
  );
}
