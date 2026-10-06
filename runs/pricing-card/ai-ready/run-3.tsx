import { Badge, Button, Card, CheckList, Divider, Heading, Stack, Text } from "@acme/ui";

const FEATURES = [
  "Unlimited projects and workspaces",
  "Advanced reporting and exports",
  "Priority email and chat support",
  "Up to 10 team members",
];

export const styles = `
.pricing {
  container-type: inline-size;
  container-name: pricing;
}
.pricing__price {
  display: flex;
  align-items: baseline;
  gap: var(--acme-space-xs);
  margin: 0;
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
@container pricing (min-width: 480px) {
  .pricing .acme-card {
    padding: var(--acme-space-xl);
  }
}
`;

export default function ProPricingCard() {
  return (
    <div className="pricing">
      <Card emphasis="highlighted">
        <Stack gap="lg">
          <Stack gap="sm">
            <Stack direction="row" gap="sm" align="center">
              <Heading level={2} size="md">
                Pro
              </Heading>
              <Badge>Most popular</Badge>
            </Stack>
            <Stack gap="xs">
              <p className="pricing__price">
                <span className="pricing__amount">€29</span>
                <span className="pricing__period">per month</span>
              </p>
              <Text size="sm" tone="muted">
                Billed annually
              </Text>
            </Stack>
          </Stack>
          <Divider />
          <CheckList items={FEATURES} />
          <Button variant="primary" fullWidth>
            Start free trial
          </Button>
        </Stack>
      </Card>
    </div>
  );
}
