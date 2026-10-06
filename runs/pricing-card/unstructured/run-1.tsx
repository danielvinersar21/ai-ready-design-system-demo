import { Button, Card, Col, Heading, Row, Tag, Text } from "@shared/ui";

const FEATURES = [
  "Unlimited projects and workspaces",
  "Up to 10 team members",
  "Advanced analytics and reporting",
  "Priority email and chat support",
];

export const styles = `
.pricing {
  container-type: inline-size;
  container-name: pricing;
}

.pricing__header {
  justify-content: space-between;
  flex-wrap: wrap;
}

.pricing__price {
  display: flex;
  align-items: baseline;
  gap: var(--spacing-1);
  margin: 0;
}
.pricing__amount {
  font-size: var(--text-3xl);
  font-weight: 700;
  line-height: 1.1;
  color: var(--gray-900);
}
.pricing__period {
  font-size: var(--text-sm);
  color: var(--gray-500);
}

.pricing__features {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: var(--spacing-3);
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

.pricing__cta .btn {
  width: 100%;
}
.pricing__cta .btn:focus-visible {
  outline: 2px solid var(--blue-600);
  outline-offset: 2px;
}

@container pricing (min-width: 480px) {
  .pricing__amount {
    font-size: 36px;
  }
  .pricing__features {
    grid-template-columns: 1fr 1fr;
    column-gap: var(--spacing-6);
  }
}
`;

function CheckIcon() {
  return (
    <svg className="pricing__check" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" focusable="false">
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0Z"
        clipRule="evenodd"
      />
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
              <h3 id="pro-plan-title" className="heading heading--2">
                Pro
              </h3>
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

          <div className="pricing__cta">
            <Button color="blue" size="lg">
              Start free trial
            </Button>
          </div>

          <Col gap={12}>
            <Heading level={3}>What's included</Heading>
            <ul className="pricing__features">
              {FEATURES.map((feature) => (
                <li key={feature} className="pricing__feature">
                  <CheckIcon />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </Col>
        </Col>
      </Card>
    </section>
  );
}
