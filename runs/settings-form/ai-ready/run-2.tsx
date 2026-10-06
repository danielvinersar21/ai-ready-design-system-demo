import { useState, type FormEvent } from "react";
import { Button, Card, Divider, Field, Heading, Select, Stack, Switch, Text } from "@acme/ui";

const DIGEST_OPTIONS = [
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" },
  { value: "never", label: "Never" },
];

export const styles = `
.notification-settings {
  container-type: inline-size;
}
.notification-settings form {
  margin: 0;
}
.notification-settings__actions {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: var(--acme-space-sm);
}
.notification-settings__actions .acme-button {
  width: 100%;
}
@container (min-width: 440px) {
  .notification-settings__actions {
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-start;
    gap: var(--acme-space-md);
  }
  .notification-settings__actions .acme-button {
    width: auto;
  }
}
`;

export default function NotificationSettings() {
  const [saved, setSaved] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaved(true);
  }

  return (
    <div className="notification-settings">
      <Card>
        <form onSubmit={handleSubmit} onChange={() => setSaved(false)} aria-labelledby="notification-settings-title">
          <Stack gap="lg">
            <Stack gap="xs">
              <Heading level={2} size="md">
                <span id="notification-settings-title">Notification settings</span>
              </Heading>
              <Text size="sm" tone="muted">
                Choose which emails you get from us and how often.
              </Text>
            </Stack>

            <Field
              id="email-digest-frequency"
              label="Email digest frequency"
              description="A summary of activity in your workspace."
            >
              <Select id="email-digest-frequency" options={DIGEST_OPTIONS} defaultValue="weekly" />
            </Field>

            <Divider />

            <Stack gap="md">
              <Switch
                id="product-updates"
                label="Product updates"
                description="News about new features and improvements."
                defaultChecked
              />
              <Switch
                id="security-alerts"
                label="Security alerts"
                description="Always on. We need to tell you about sign-ins and changes that affect your account's security."
                defaultChecked
                disabled
              />
            </Stack>

            <Divider />

            <div className="notification-settings__actions">
              <Button type="submit">Save changes</Button>
              <div role="status" aria-live="polite">
                {saved && (
                  <Text size="sm" tone="muted">
                    Notification settings saved.
                  </Text>
                )}
              </div>
            </div>
          </Stack>
        </form>
      </Card>
    </div>
  );
}
