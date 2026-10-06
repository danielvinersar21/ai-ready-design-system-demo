import { Card, Col, Heading, PrimaryButton, Row, Tag, Text } from "@shared/ui";

const FEATURES = [
  "Unlimited projects and workspaces",
  "Advanced analytics and reporting",
  "Up to 10 team members",
  "Priority email and chat support",
];

export const styles = `
.pricing {
  container-type: inline-size;
  width: 100%;
}

.pricing__price {
  display: flex;
  align-items: baseline;
  gap: var(--spacing-1);
  margin: 0;
}

.pricing__amount {
  font-size: 40px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.02em;
  color: var(--gray-900);
}

.pricing__period {
  font-size: var(--text-base);
  color: var(--gray-500);
}

.pricing__divider {
  height: 1px;
  margin: 0;
  border: 0;
  background: var(--gray-200);
}

.pricing__features {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-3);
  margin: 0;
  padding: 0;
  list-style: none;
}

.pricing__feature {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-2);
  font-size: var(--text-sm);
  line-height: 1.5;
  color: var(--gray-700);
}

.pricing__check {
  flex: none;
  width: 20px;
  height: 20px;
  margin-top: 1px;
  color: var(--blue-600);
}

.pricing .primary-button {
  width: 100%;
  border-radius: var(--radius-md);
  font-size: var(--text-base);
  padding: var(--spacing-3) var(--spacing-5);
}

.pricing .primary-button:hover {
  background: var(--blue-700);
}

.pricing .primary-button:focus-visible {
  outline: 2px solid var(--blue-600);
  outline-offset: 2px;
}

@container (min-width: 480px) {
  .pricing__features {
    grid-template-columns: 1fr 1fr;
    column-gap: var(--spacing-6);
  }
  .pricing__amount {
    font-size: 48px;
  }
}
`;

function CheckIcon() {
  return (
    <svg className="pricing__check" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="9" fill="var(--blue-50)" />
      <path d="M6 10.5l2.5 2.5L14 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ProPricingCard() {
  return (
    <section className="pricing" aria-labelledby="pro-plan-title">
      <Card padding={24} shadow>
        <Col gap={20}>
          <Col gap={8}>
            <Row gap={8} align="center" style={{ justifyContent: "space-between", flexWrap: "wrap" }}>
              <span id="pro-plan-title">
                <Heading level={3}>Pro</Heading>
              </span>
              <Tag color="blue">Most popular</Tag>
            </Row>
            <Text size="sm" gray>
              For growing teams that need more power and flexibility.
            </Text>
          </Col>

          <Col gap={4}>
            <p className="pricing__price">
              <span className="pricing__amount">€29</span>
              <span className="pricing__period">/ month</span>
            </p>
            <Text size="sm" gray>
              Billed annually (€348 per year)
            </Text>
          </Col>

          <PrimaryButton>Start free trial</PrimaryButton>

          <hr className="pricing__divider" />

          <ul className="pricing__features" aria-label="Pro plan features">
            {FEATURES.map((feature) => (
              <li key={feature} className="pricing__feature">
                <CheckIcon />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </Col>
      </Card>
    </section>
  );
}
