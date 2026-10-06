import { Button, EmptyState, Heading, Icon, Stack, Text } from "@acme/ui";

export const styles = `
.invoices-page {
  container-type: inline-size;
  padding: var(--acme-space-md);
}
@container (max-width: 420px) {
  .invoices-page .acme-empty-state {
    padding: var(--acme-space-lg) var(--acme-space-md);
  }
  .invoices-page .acme-empty-state > .acme-stack[data-direction="row"] {
    flex-direction: column;
    align-self: stretch;
  }
  .invoices-page .acme-empty-state .acme-button[data-variant="primary"] {
    width: 100%;
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
          <Text tone="muted">Create, send and track payment on invoices for your clients.</Text>
        </Stack>
        <EmptyState
          icon="invoice"
          title="No invoices yet"
          description="Invoices you create or import will appear here, with their amount, due date and payment status."
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
