import type { CSSProperties, ReactNode } from "react";

export function Row({ gap = 0, align, children, style }: { gap?: number; align?: CSSProperties["alignItems"]; children: ReactNode; style?: CSSProperties }) {
  return (
    <div className="row" style={{ gap, alignItems: align, ...style }}>
      {children}
    </div>
  );
}

export function Col({ gap = 0, align, children, style }: { gap?: number; align?: CSSProperties["alignItems"]; children: ReactNode; style?: CSSProperties }) {
  return (
    <div className="col" style={{ gap, alignItems: align, ...style }}>
      {children}
    </div>
  );
}

export function Button({
  color = "blue",
  size = "md",
  outline,
  type = "button",
  onClick,
  children,
}: {
  color?: "blue" | "teal" | "gray";
  size?: "sm" | "md" | "lg";
  outline?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
  children: ReactNode;
}) {
  const className = ["btn", `btn--${size}`, `btn--${color}`, outline ? "btn--outline" : ""].join(" ");
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export function PrimaryButton({ onClick, children }: { onClick?: () => void; children: ReactNode }) {
  return (
    <button className="primary-button" type="button" onClick={onClick}>
      {children}
    </button>
  );
}

export function Card({ padding = 24, shadow, children }: { padding?: number; shadow?: boolean; children: ReactNode }) {
  return (
    <div className={shadow ? "card card--shadow" : "card"} style={{ padding }}>
      {children}
    </div>
  );
}

export function Tag({ color = "gray", children }: { color?: "blue" | "teal" | "gray"; children: ReactNode }) {
  return <span className={`tag tag--${color}`}>{children}</span>;
}

export function Heading({ level = 2, children }: { level?: 1 | 2 | 3; children: ReactNode }) {
  const Tag = `h${level}` as const;
  return <Tag className={`heading heading--${level}`}>{children}</Tag>;
}

export function Text({ size = "base", gray, children }: { size?: "xs" | "sm" | "base"; gray?: boolean; children: ReactNode }) {
  return <p className={`text text--${size}${gray ? " text--gray" : ""}`}>{children}</p>;
}

export function Input({ id, placeholder, defaultValue }: { id?: string; placeholder?: string; defaultValue?: string }) {
  return <input className="input" id={id} placeholder={placeholder} defaultValue={defaultValue} />;
}

export function Select({ id, options, defaultValue }: { id?: string; options: { value: string; label: string }[]; defaultValue?: string }) {
  return (
    <select className="select" id={id} defaultValue={defaultValue}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export function Toggle({ label, defaultChecked, disabled }: { label?: string; defaultChecked?: boolean; disabled?: boolean }) {
  return (
    <label className="toggle">
      <input type="checkbox" defaultChecked={defaultChecked} disabled={disabled} />
      <span className="toggle-track" />
      {label}
    </label>
  );
}
