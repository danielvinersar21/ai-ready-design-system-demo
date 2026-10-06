import { Badge, Button, Card, CheckList, Divider, Heading, Stack, Text } from "@acme/ui";

const FEATURES = [
  "Unlimited projects",
  "Up to 10 team members",
  "Advanced reporting and exports",
  "Priority email support",
];

export const styles = `
:host {
  display: block;
  container-type: inline-size;
}

.pricing-price {
  font-size: var(--acme-font-size-xl);
  font-weight: 650;
  line-height: var(--acme-line-height-tight);
  letter-spacing: -0.02em;
  color: var(--acme-color-text-default);
}

@container (min-width: 480px) {
  .pricing-card .acme-card {
    padding: var(--acme-space-xl);
  }
}
`;

export default function ProPricingCard() {
  return (
    <div className="pricing-card">
      <Card emphasis="highlighted">
        <Stack gap="lg">
          <Stack gap="sm">
            <Stack direction="row" gap="sm" align="center">
              <Heading level={2} size="md">
                Pro
              </Heading>
              <Badge>Most popular</Badge>
            </Stack>
            <Stack direction="row" gap="xs" align="baseline">
              <span className="pricing-price">€29</span>
              <Text tone="muted">per month</Text>
            </Stack>
            <Text size="sm" tone="muted">
              Billed annually at €348 per year
            </Text>
          </Stack>
          <Button variant="primary" fullWidth>
            Start free trial
          </Button>
          <Divider />
          <CheckList items={FEATURES} />
        </Stack>
      </Card>
    </div>
  );
}
