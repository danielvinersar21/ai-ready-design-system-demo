import { Badge, Button, Card, CheckList, Divider, Heading, Stack, Text } from "@acme/ui";

const FEATURES = [
  "Unlimited projects",
  "Up to 10 team members",
  "Advanced reporting and exports",
  "Priority email support",
];

export const styles = `
.pricing {
  container-type: inline-size;
}
.pricing__header {
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  gap: var(--acme-space-sm);
}
.pricing__amount {
  font-size: var(--acme-font-size-xl);
  font-weight: 650;
  line-height: var(--acme-line-height-tight);
  letter-spacing: -0.02em;
  color: var(--acme-color-text-default);
}
.pricing__period {
  font-size: var(--acme-font-size-md);
  color: var(--acme-color-text-muted);
}
@container (min-width: 440px) {
  .pricing__header {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
`;

export default function ProPricingCard() {
  return (
    <section className="pricing" aria-labelledby="pro-plan-title">
      <Card emphasis="highlighted">
        <Stack gap="lg">
          <Stack gap="sm">
            <div className="pricing__header">
              <Heading level={2} size="md">
                <span id="pro-plan-title">Pro</span>
              </Heading>
              <Badge>Most popular</Badge>
            </div>
            <Text tone="muted">For growing teams that need more room to work.</Text>
          </Stack>

          <Stack gap="xs">
            <Stack direction="row" gap="xs" align="baseline">
              <span className="pricing__amount">€29</span>
              <span className="pricing__period">per month</span>
            </Stack>
            <Text size="sm" tone="muted">
              Billed annually at €348
            </Text>
          </Stack>

          <Button variant="primary" fullWidth>
            Start free trial
          </Button>

          <Divider />

          <CheckList items={FEATURES} />
        </Stack>
      </Card>
    </section>
  );
}
