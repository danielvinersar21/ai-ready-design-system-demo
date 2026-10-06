import { useState } from "react";
import type { FormEvent } from "react";
import { Button, Card, Divider, Field, Heading, Select, Stack, Switch, Text } from "@acme/ui";

export const styles = `
:host {
  display: block;
  container-type: inline-size;
}

.notification-settings form {
  margin: 0;
}

.notification-settings__footer {
  display: flex;
  flex-direction: column-reverse;
  align-items: stretch;
  gap: var(--acme-space-sm);
}

.notification-settings__footer .acme-button {
  width: 100%;
}

@container (min-width: 440px) {
  .notification-settings__footer {
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: var(--acme-space-md);
  }

  .notification-settings__footer .acme-button {
    width: auto;
  }
}
`;

const DIGEST_OPTIONS = [
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
    <div className="notification-settings">
      <Card>
        <form onSubmit={handleSubmit} onChange={() => setSaved(false)} aria-labelledby="notification-settings-title">
          <Stack gap="lg">
            <Stack gap="xs">
              <Heading level={2} size="md">
                <span id="notification-settings-title">Notification settings</span>
              </Heading>
              <Text tone="muted">Choose which emails we send you and how often.</Text>
            </Stack>

            <Field
              id="digest-frequency"
              label="Email digest"
              description="A summary of activity in your workspace."
            >
              <Select id="digest-frequency" options={DIGEST_OPTIONS} defaultValue="weekly" />
            </Field>

            <Divider />

            <Stack gap="md">
              <Switch
                id="product-updates"
                label="Product updates"
                description="New features, improvements and tips."
                defaultChecked
              />
              <Switch
                id="security-alerts"
                label="Security alerts"
                description="Always on. We need to tell you about sign-ins and changes to your account."
                defaultChecked
                disabled
              />
            </Stack>

            <Divider />

            <div className="notification-settings__footer">
              <Text size="sm" tone="muted">
                <span role="status">{saved ? "Your notification settings are saved." : ""}</span>
              </Text>
              <Button type="submit" variant="primary">
                Save changes
              </Button>
            </div>
          </Stack>
        </form>
      </Card>
    </div>
  );
}
