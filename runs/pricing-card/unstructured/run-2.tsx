import { Button, Card, Col, Heading, Row, Tag, Text } from "@shared/ui";

const features = [
  "Unlimited projects and workspaces",
  "Advanced analytics and reporting",
  "Up to 10 team members",
  "Priority email and chat support",
];

export const styles = `
:host { display: block; }

.pricing {
  container-type: inline-size;
  container-name: pricing;
}

.pricing__card > .card {
  border-color: var(--blue-500);
  border-width: 2px;
}


.pricing__price {
  margin: 0;
  display: flex;
  align-items: baseline;
  gap: var(--spacing-1);
}

.pricing__amount {
  font-size: var(--text-3xl);
  font-weight: 700;
  line-height: 1.1;
  color: var(--gray-900);
}

.pricing__period {
  font-size: var(--text-base);
  color: var(--gray-500);
}

.pricing__features {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
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
  color: var(--teal-600);
}

.pricing__cta .btn { width: 100%; }

.pricing__cta .btn:focus-visible {
  outline: 2px solid var(--blue-700);
  outline-offset: 2px;
}

@container pricing (min-width: 480px) {
  .pricing__features { grid-template-columns: 1fr 1fr; column-gap: var(--spacing-6); }
  .pricing__amount { font-size: 36px; }
}
`;

function CheckIcon() {
  return (
    <svg className="pricing__check" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="var(--teal-50)" />
      <path d="M6 10.5l2.5 2.5L14 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ProPricingCard() {
  return (
    <section className="pricing" aria-labelledby="pro-plan-title">
      <div className="pricing__card">
        <Card padding={24} shadow>
          <Col gap={20}>
            <Col gap={8}>
              <Row gap={8} align="center" style={{ justifyContent: "space-between", flexWrap: "wrap" }}>
                <h2 id="pro-plan-title" className="heading heading--2">Pro</h2>
                <Tag color="blue">Most popular</Tag>
              </Row>
              <Text size="sm" gray>
                Everything a growing team needs to ship faster.
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
                {features.map((feature) => (
                  <li key={feature} className="pricing__feature">
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Col>
          </Col>
        </Card>
      </div>
    </section>
  );
}
