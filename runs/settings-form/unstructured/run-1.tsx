import { useState, type FormEvent } from "react";
import { Button, Card, Col, Heading, Row, Select, Tag, Text, Toggle } from "@shared/ui";

export const styles = `
.ns-form { margin: 0; }
.ns-label {
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--gray-700);
}
.ns-field .select { width: 100%; }
.ns-setting {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
  padding: var(--spacing-4) 0;
  border-top: 1px solid var(--gray-200);
}
.ns-setting-text { display: flex; flex-direction: column; gap: var(--spacing-1); min-width: 0; }
.ns-footer {
  display: flex;
  flex-direction: column-reverse;
  align-items: stretch;
  gap: var(--spacing-3);
  padding-top: var(--spacing-4);
  border-top: 1px solid var(--gray-200);
}
.ns-footer .btn { width: 100%; }
.ns-status { font-size: var(--text-sm); color: var(--gray-500); text-align: center; }

.ns-container { container-type: inline-size; }

@container (min-width: 440px) {
  .ns-setting {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing-4);
  }
  .ns-field .select { width: auto; min-width: 200px; }
  .ns-footer {
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
  .ns-footer .btn { width: auto; }
  .ns-status { text-align: right; }
}
`;

const FREQUENCY_OPTIONS = [
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" },
  { value: "never", label: "Never" },
];

export default function NotificationSettings() {
  const [saved, setSaved] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaved(true);
  }

  return (
    <div className="ns-container">
      <Card padding={24}>
        <form className="ns-form" onSubmit={handleSubmit} onChange={() => setSaved(false)}>
          <Col gap={20}>
            <Col gap={4}>
              <Heading level={3}>Notification settings</Heading>
              <Text size="sm" gray>
                Choose which emails you get from us and how often.
              </Text>
            </Col>

            <Col gap={0}>
              <div className="ns-setting ns-field">
                <div className="ns-setting-text">
                  <label className="ns-label" htmlFor="ns-digest-frequency">
                    Email digest frequency
                  </label>
                  <Text size="sm" gray>
                    A summary of activity on your account.
                  </Text>
                </div>
                <Select id="ns-digest-frequency" options={FREQUENCY_OPTIONS} defaultValue="weekly" />
              </div>

              <div className="ns-setting">
                <div className="ns-setting-text">
                  <span className="ns-label">Product updates</span>
                  <Text size="sm" gray>
                    News about new features and improvements.
                  </Text>
                </div>
                <Toggle label="Product updates" defaultChecked />
              </div>

              <div className="ns-setting">
                <div className="ns-setting-text">
                  <Row gap={8} align="center" style={{ flexWrap: "wrap" }}>
                    <span className="ns-label">Security alerts</span>
                    <Tag color="gray">Always on</Tag>
                  </Row>
                  <Text size="sm" gray>
                    Sign-ins from new devices and password changes. These can't be turned off.
                  </Text>
                </div>
                <Toggle label="Security alerts" defaultChecked disabled />
              </div>
            </Col>

            <div className="ns-footer">
              <span className="ns-status" role="status" aria-live="polite">
                {saved ? "Settings saved" : ""}
              </span>
              <Button type="submit" color="blue">
                Save settings
              </Button>
            </div>
          </Col>
        </form>
      </Card>
    </div>
  );
}
