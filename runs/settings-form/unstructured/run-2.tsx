import { useState, type FormEvent } from "react";
import { Button, Card, Col, Heading, Select, Tag, Text, Toggle } from "@shared/ui";

const DIGEST_OPTIONS = [
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" },
  { value: "never", label: "Never" },
];

export const styles = `
:host {
  display: block;
  container-type: inline-size;
}

.ns-form { margin: 0; }

.ns-field {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
}

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
  padding-top: var(--spacing-4);
  border-top: 1px solid var(--gray-200);
}

.ns-setting-text {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-1);
  min-width: 0;
}

.ns-setting-title {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  flex-wrap: wrap;
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--gray-900);
}

.ns-footer {
  display: flex;
  flex-direction: column-reverse;
  align-items: stretch;
  gap: var(--spacing-3);
  padding-top: var(--spacing-4);
  border-top: 1px solid var(--gray-200);
}

.ns-footer .btn { width: 100%; }

.ns-status {
  font-size: var(--text-sm);
  color: var(--teal-700);
  text-align: center;
}

@container (min-width: 440px) {
  .ns-field .select { width: auto; min-width: 200px; align-self: flex-start; }

  .ns-setting {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing-4);
  }

  .ns-footer {
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }

  .ns-footer .btn { width: auto; }
  .ns-status { text-align: right; }
}
`;

export default function NotificationSettingsForm() {
  const [saved, setSaved] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSaved(true);
  };

  return (
    <Card padding={24}>
      <form className="ns-form" onSubmit={handleSubmit} onChange={() => setSaved(false)}>
        <Col gap={20}>
          <Col gap={4}>
            <Heading level={3}>Notification settings</Heading>
            <Text size="sm" gray>
              Choose how and when we contact you.
            </Text>
          </Col>

          <div className="ns-field">
            <label className="ns-label" htmlFor="ns-digest-frequency">
              Email digest frequency
            </label>
            <Select id="ns-digest-frequency" options={DIGEST_OPTIONS} defaultValue="weekly" />
            <Text size="xs" gray>
              A summary of activity across your workspace.
            </Text>
          </div>

          <div className="ns-setting">
            <div className="ns-setting-text">
              <span className="ns-setting-title">Product updates</span>
              <Text size="xs" gray>
                News about new features and improvements.
              </Text>
            </div>
            <Toggle label="Product updates" defaultChecked />
          </div>

          <div className="ns-setting">
            <div className="ns-setting-text">
              <span className="ns-setting-title">
                Security alerts <Tag color="gray">Required</Tag>
              </span>
              <Text size="xs" gray>
                Sign-ins, password changes and other account activity. Always on to keep your account safe.
              </Text>
            </div>
            <Toggle label="Security alerts" defaultChecked disabled />
          </div>

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
  );
}
