/**
 * @acme/ui styles: tokens first (as CSS custom properties on :host), then
 * components that only read tokens. Brand: deep teal, calm neutrals, 8px
 * controls.
 */

export const styles = `
:host {
  /* ── Tokens ─────────────────────────────────────────────── */
  --acme-color-surface-default: #FFFFFF;
  --acme-color-surface-subtle: #F3F6F4;
  --acme-color-text-default: #15201B;
  --acme-color-text-muted: #55625C;
  --acme-color-border-default: #D9E1DC;
  --acme-color-border-strong: #7E8B85;
  --acme-color-action-primary: #0E7C66;
  --acme-color-action-primary-hover: #0A6352;
  --acme-color-action-on-primary: #FFFFFF;
  --acme-color-accent-subtle: #E2F3EE;
  --acme-color-accent-text: #0A5A4A;
  --acme-color-focus: #0E7C66;

  --acme-space-xs: 4px;
  --acme-space-sm: 8px;
  --acme-space-md: 16px;
  --acme-space-lg: 24px;
  --acme-space-xl: 32px;

  --acme-radius-control: 8px;
  --acme-radius-surface: 12px;
  --acme-radius-pill: 999px;

  --acme-font-body: ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
  --acme-font-size-sm: 13px;
  --acme-font-size-md: 15px;
  --acme-font-size-lg: 18px;
  --acme-font-size-xl: 32px;
  --acme-line-height-tight: 1.2;
  --acme-line-height-body: 1.5;

  --acme-shadow-raised: 0 1px 2px rgb(21 32 27 / 0.06), 0 4px 16px rgb(21 32 27 / 0.06);

  font-family: var(--acme-font-body);
  color: var(--acme-color-text-default);
}

/* ── Layout ────────────────────────────────────────────── */
.acme-stack { display: flex; flex-direction: column; }
.acme-stack[data-direction="row"] { flex-direction: row; flex-wrap: wrap; }
.acme-stack[data-gap="xs"] { gap: var(--acme-space-xs); }
.acme-stack[data-gap="sm"] { gap: var(--acme-space-sm); }
.acme-stack[data-gap="md"] { gap: var(--acme-space-md); }
.acme-stack[data-gap="lg"] { gap: var(--acme-space-lg); }
.acme-stack[data-align="center"] { align-items: center; }
.acme-stack[data-align="baseline"] { align-items: baseline; }
.acme-stack[data-align="start"] { align-items: flex-start; }

.acme-card {
  background: var(--acme-color-surface-default);
  border: 1px solid var(--acme-color-border-default);
  border-radius: var(--acme-radius-surface);
  padding: var(--acme-space-lg);
  box-shadow: var(--acme-shadow-raised);
}
.acme-card[data-emphasis="highlighted"] {
  border-color: var(--acme-color-action-primary);
  box-shadow: 0 0 0 1px var(--acme-color-action-primary), var(--acme-shadow-raised);
}

.acme-divider {
  border: 0;
  border-top: 1px solid var(--acme-color-border-default);
  margin: 0;
}

/* ── Typography ────────────────────────────────────────── */
.acme-heading {
  margin: 0;
  font-weight: 650;
  line-height: var(--acme-line-height-tight);
  letter-spacing: -0.01em;
}
.acme-heading[data-size="sm"] { font-size: var(--acme-font-size-md); }
.acme-heading[data-size="md"] { font-size: var(--acme-font-size-lg); }
.acme-heading[data-size="xl"] { font-size: var(--acme-font-size-xl); letter-spacing: -0.02em; }

.acme-text { margin: 0; font-size: var(--acme-font-size-md); line-height: var(--acme-line-height-body); }
.acme-text[data-size="sm"] { font-size: var(--acme-font-size-sm); }
.acme-text[data-tone="muted"] { color: var(--acme-color-text-muted); }

/* ── Badge ─────────────────────────────────────────────── */
.acme-badge {
  display: inline-flex;
  align-items: center;
  padding: 2px var(--acme-space-sm);
  border-radius: var(--acme-radius-pill);
  font-size: var(--acme-font-size-sm);
  font-weight: 600;
  background: var(--acme-color-accent-subtle);
  color: var(--acme-color-accent-text);
}

/* ── Button ────────────────────────────────────────────── */
.acme-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--acme-space-sm);
  min-height: 40px;
  padding: 0 var(--acme-space-md);
  border: 1px solid transparent;
  border-radius: var(--acme-radius-control);
  font: inherit;
  font-size: var(--acme-font-size-md);
  font-weight: 600;
  cursor: pointer;
  transition: background-color 150ms ease;
}
.acme-button:focus-visible { outline: 2px solid var(--acme-color-focus); outline-offset: 2px; }
.acme-button[data-variant="primary"] { background: var(--acme-color-action-primary); color: var(--acme-color-action-on-primary); }
.acme-button[data-variant="primary"]:hover { background: var(--acme-color-action-primary-hover); }
.acme-button[data-variant="secondary"] {
  background: var(--acme-color-surface-default);
  border-color: var(--acme-color-border-default);
  color: var(--acme-color-text-default);
}
.acme-button[data-variant="secondary"]:hover { background: var(--acme-color-surface-subtle); }
.acme-button[data-variant="link"] {
  min-height: auto;
  padding: 0;
  background: none;
  color: var(--acme-color-accent-text);
  text-decoration: underline;
  text-underline-offset: 3px;
}
.acme-button[data-full-width] { width: 100%; }

/* ── Check list ────────────────────────────────────────── */
.acme-checklist { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: var(--acme-space-sm); }
.acme-checklist li { display: flex; gap: var(--acme-space-sm); font-size: var(--acme-font-size-md); line-height: var(--acme-line-height-body); }
.acme-checklist .acme-icon { color: var(--acme-color-action-primary); margin-top: 3px; }

/* ── Icon ──────────────────────────────────────────────── */
.acme-icon { width: 16px; height: 16px; flex: none; }
.acme-icon[data-size="lg"] { width: 24px; height: 24px; }

/* ── Form ──────────────────────────────────────────────── */
.acme-field { display: flex; flex-direction: column; gap: var(--acme-space-xs); }
.acme-field label { font-size: var(--acme-font-size-md); font-weight: 600; }
.acme-field .acme-text { color: var(--acme-color-text-muted); }

.acme-select {
  min-height: 40px;
  padding: 0 var(--acme-space-md);
  border: 1px solid var(--acme-color-border-strong);
  border-radius: var(--acme-radius-control);
  background: var(--acme-color-surface-default);
  color: var(--acme-color-text-default);
  font: inherit;
  font-size: var(--acme-font-size-md);
}
.acme-select:focus-visible { outline: 2px solid var(--acme-color-focus); outline-offset: 2px; }

.acme-switch { display: flex; justify-content: space-between; align-items: flex-start; gap: var(--acme-space-md); }
.acme-switch label { font-size: var(--acme-font-size-md); font-weight: 600; }
.acme-switch input {
  appearance: none;
  flex: none;
  width: 40px;
  height: 24px;
  margin: 0;
  border-radius: var(--acme-radius-pill);
  background: var(--acme-color-border-strong);
  position: relative;
  cursor: pointer;
  transition: background-color 150ms ease;
}
.acme-switch input::after {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--acme-color-surface-default);
  transition: transform 150ms ease;
}
.acme-switch input:checked { background: var(--acme-color-action-primary); }
.acme-switch input:checked::after { transform: translateX(16px); }
.acme-switch input:disabled { opacity: 0.55; cursor: not-allowed; }
.acme-switch input:focus-visible { outline: 2px solid var(--acme-color-focus); outline-offset: 2px; }

/* ── Empty state ───────────────────────────────────────── */
.acme-empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--acme-space-md);
  padding: var(--acme-space-xl) var(--acme-space-lg);
  text-align: center;
  border: 1px dashed var(--acme-color-border-default);
  border-radius: var(--acme-radius-surface);
  background: var(--acme-color-surface-default);
}
.acme-empty-state__icon {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: var(--acme-radius-surface);
  background: var(--acme-color-accent-subtle);
  color: var(--acme-color-accent-text);
}
.acme-empty-state .acme-text { max-width: 36ch; }
`;
