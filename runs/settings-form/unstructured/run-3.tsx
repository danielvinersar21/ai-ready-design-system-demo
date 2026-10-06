import { useState, type FormEvent } from "react";
import { Button, Card, Col, Heading, Row, Select, Text, Toggle } from "@shared/ui";

const digestOptions = [
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" },
  { value: "never", label: "Never" },
];

export const styles = `
.ns-form { margin: 0; }
.ns-field-label {
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--gray-900);
}
.ns-field .select { width: 100%; }
.ns-setting {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
  padding: var(--spacing-4) 0;
  border-top: 1px solid var(--gray-200);
}
.ns-setting-text { display: flex; flex-direction: column; gap: 2px; }
.ns-footer {
  display: flex;
  flex-direction: column-reverse;
  align-items: stretch;
  gap: var(--spacing-3);
  padding-top: var(--spacing-4);
  border-top: 1px solid var(--gray-200);
}
.ns-footer .btn { width: 100%; }
.ns-status { min-height: 1.5em; }

@container (min-width: 440px) {
  .ns-setting {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing-4);
  }
  .ns-setting .toggle { flex-shrink: 0; }
  .ns-footer {
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
  .ns-footer .btn { width: auto; }
}
`;

export default function NotificationSettings() {
  const [saved, setSaved] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaved(true);
  }

  return (
    <div style={{ containerType: "inline-size" }}>
      <Card padding={24}>
        <form className="ns-form" onSubmit={handleSubmit} onChange={() => setSaved(false)}>
          <Col gap={20}>
            <Col gap={4}>
              <Heading level={2}>Notifications</Heading>
              <Text size="sm" gray>
                Choose how and when we contact you.
              </Text>
            </Col>

            <div className="ns-field">
              <Col gap={6}>
                <label className="ns-field-label" htmlFor="ns-digest-frequency">
                  Email digest frequency
                </label>
                <Select id="ns-digest-frequency" options={digestOptions} defaultValue="weekly" />
                <Text size="xs" gray>
                  A summary of activity across your workspace.
                </Text>
              </Col>
            </div>

            <div>
              <div className="ns-setting">
                <div className="ns-setting-text">
                  <Text size="sm">
                    <strong>Product updates</strong>
                  </Text>
                  <Text size="xs" gray>
                    News about new features and improvements.
                  </Text>
                </div>
                <Toggle label="Product updates" defaultChecked />
              </div>

              <div className="ns-setting">
                <div className="ns-setting-text">
                  <Text size="sm">
                    <strong>Security alerts</strong>
                  </Text>
                  <Text size="xs" gray>
                    Sign-ins, password changes and other account security events. Always on to keep your
                    account safe.
                  </Text>
                </div>
                <Toggle label="Security alerts" defaultChecked disabled />
              </div>
            </div>

            <div className="ns-footer">
              <div className="ns-status" role="status" aria-live="polite">
                {saved ? (
                  <Text size="sm" gray>
                    Settings saved.
                  </Text>
                ) : null}
              </div>
              <Row>
                <Button type="submit" color="blue">
                  Save changes
                </Button>
              </Row>
            </div>
          </Col>
        </form>
      </Card>
    </div>
  );
}
