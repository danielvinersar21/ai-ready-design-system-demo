import type { ReactNode } from "react";

/*
 * @acme/ui components. Each one documents when to use it. Screens compose
 * these instead of writing their own markup. Styling lives in ./styles.ts and
 * reads tokens only.
 */

type Gap = "xs" | "sm" | "md" | "lg";

/** Vertical or horizontal layout with a gap from the spacing scale. Use instead of margins. */
export function Stack({
  gap = "md",
  direction = "column",
  align,
  children,
}: {
  gap?: Gap;
  direction?: "column" | "row";
  align?: "start" | "center" | "baseline";
  children: ReactNode;
}) {
  return (
    <div className="acme-stack" data-gap={gap} data-direction={direction} data-align={align}>
      {children}
    </div>
  );
}

/** A raised surface. `highlighted` marks the one recommended option in a set (e.g. a plan). */
export function Card({ emphasis, children }: { emphasis?: "highlighted"; children: ReactNode }) {
  return (
    <div className="acme-card" data-emphasis={emphasis}>
      {children}
    </div>
  );
}

export function Divider() {
  return <hr className="acme-divider" />;
}

/** Headings. Pick `level` for the outline and `size` for the look. */
export function Heading({
  level = 2,
  size = "md",
  children,
}: {
  level?: 1 | 2 | 3;
  size?: "sm" | "md" | "xl";
  children: ReactNode;
}) {
  const Tag = `h${level}` as const;
  return (
    <Tag className="acme-heading" data-size={size}>
      {children}
    </Tag>
  );
}

export function Text({
  size = "md",
  tone = "default",
  id,
  children,
}: {
  size?: "sm" | "md";
  tone?: "default" | "muted";
  id?: string;
  children: ReactNode;
}) {
  return (
    <p className="acme-text" data-size={size} data-tone={tone} id={id}>
      {children}
    </p>
  );
}

/** Short status or highlight label. Never interactive. */
export function Badge({ children }: { children: ReactNode }) {
  return <span className="acme-badge">{children}</span>;
}

/**
 * Buttons. One `primary` per view; `secondary` for alternatives; `link` for
 * low-emphasis navigation. Always a real <button>.
 */
export function Button({
  variant = "primary",
  type = "button",
  fullWidth,
  onClick,
  children,
}: {
  variant?: "primary" | "secondary" | "link";
  type?: "button" | "submit";
  fullWidth?: boolean;
  onClick?: () => void;
  children: ReactNode;
}) {
  return (
    <button
      className="acme-button"
      data-variant={variant}
      data-full-width={fullWidth || undefined}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

const ICON_PATHS = {
  check: "M3.5 8.5l3 3 6-7",
  invoice: "M6 3h9l4 4v14H6zM15 3v4h4M9 12h7M9 16h5",
  upload: "M12 16V4M7 9l5-5 5 5M5 20h14",
} as const;

export function Icon({ name, size }: { name: keyof typeof ICON_PATHS; size?: "lg" }) {
  const viewBox = name === "check" ? "0 0 16 16" : "0 0 24 24";
  return (
    <svg className="acme-icon" data-size={size} viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={ICON_PATHS[name]} />
    </svg>
  );
}

/** Feature or benefit list with check marks. */
export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="acme-checklist">
      {items.map((item) => (
        <li key={item}>
          <Icon name="check" />
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Label + optional description + one control. Ids are static: each screen renders in its own shadow root. */
export function Field({
  id,
  label,
  description,
  children,
}: {
  id: string;
  label: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <div className="acme-field">
      <label htmlFor={id}>{label}</label>
      {description && (
        <Text size="sm" id={`${id}-description`}>
          {description}
        </Text>
      )}
      {children}
    </div>
  );
}

export function Select({
  id,
  options,
  defaultValue,
}: {
  id: string;
  options: { value: string; label: string }[];
  defaultValue?: string;
}) {
  return (
    <select className="acme-select" id={id} defaultValue={defaultValue}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

/**
 * On/off setting that applies immediately. Use `disabled` with a
 * `description` for settings that are locked, and say why.
 */
export function Switch({
  id,
  label,
  description,
  defaultChecked,
  disabled,
}: {
  id: string;
  label: string;
  description?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
}) {
  return (
    <div className="acme-switch">
      <Stack gap="xs">
        <label htmlFor={id}>{label}</label>
        {description && (
          <Text size="sm" tone="muted" id={`${id}-description`}>
            {description}
          </Text>
        )}
      </Stack>
      <input
        type="checkbox"
        role="switch"
        id={id}
        defaultChecked={defaultChecked}
        disabled={disabled}
        aria-describedby={description ? `${id}-description` : undefined}
      />
    </div>
  );
}

/**
 * First-run / no-data state for a page or panel. One primary action that
 * creates the missing thing; at most one secondary path, as a `link` button.
 * Copy: sentence case, say what will appear here, no exclamation marks or emoji.
 */
export function EmptyState({
  icon,
  title,
  description,
  actions,
}: {
  icon: keyof typeof ICON_PATHS;
  title: string;
  description: string;
  actions: ReactNode;
}) {
  return (
    <section className="acme-empty-state">
      <span className="acme-empty-state__icon">
        <Icon name={icon} size="lg" />
      </span>
      <Stack gap="xs" align="center">
        <Heading level={2} size="md">
          {title}
        </Heading>
        <Text tone="muted">{description}</Text>
      </Stack>
      <Stack direction="row" gap="md" align="center">
        {actions}
      </Stack>
    </section>
  );
}
