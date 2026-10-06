export const styles = `
:host {
  --blue-50: #EFF6FF;
  --blue-100: #DBEAFE;
  --blue-500: #3B82F6;
  --blue-600: #2563EB;
  --blue-700: #1D4ED8;
  --teal-50: #E2F3EE;
  --teal-600: #0E7C66;
  --teal-700: #0A6352;
  --gray-50: #F9FAFB;
  --gray-100: #F3F4F6;
  --gray-200: #E5E7EB;
  --gray-300: #D1D5DB;
  --gray-400: #9CA3AF;
  --gray-500: #6B7280;
  --gray-700: #374151;
  --gray-900: #111827;
  --green-500: #22C55E;
  --red-500: #EF4444;
  --amber-400: #FBBF24;
  --white: #FFFFFF;

  --spacing-1: 4px;
  --spacing-2: 8px;
  --spacing-3: 12px;
  --spacing-4: 16px;
  --spacing-5: 20px;
  --spacing-6: 24px;
  --spacing-8: 32px;

  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-full: 9999px;

  --text-xs: 12px;
  --text-sm: 14px;
  --text-base: 16px;
  --text-lg: 18px;
  --text-2xl: 24px;
  --text-3xl: 30px;

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.08);

  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
  color: var(--gray-900);
}

.row { display: flex; flex-direction: row; }
.col { display: flex; flex-direction: column; }

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  border: 1px solid transparent;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
}
.btn--sm { padding: 6px 12px; font-size: var(--text-sm); border-radius: var(--radius-sm); }
.btn--md { padding: 10px 16px; font-size: var(--text-sm); border-radius: var(--radius-md); }
.btn--lg { padding: 12px 20px; font-size: var(--text-base); border-radius: var(--radius-md); }
.btn--blue { background: var(--blue-500); color: var(--white); }
.btn--blue:hover { background: var(--blue-600); }
.btn--teal { background: var(--teal-600); color: var(--white); }
.btn--teal:hover { background: var(--teal-700); }
.btn--gray { background: var(--gray-100); color: var(--gray-900); }
.btn--outline { background: transparent; border-color: currentColor; }
.btn--outline.btn--blue { color: var(--blue-600); }
.btn--outline.btn--teal { color: var(--teal-700); }
.btn--outline.btn--gray { color: var(--gray-700); }

.primary-button {
  padding: 10px 18px;
  border: 0;
  border-radius: 6px;
  background: var(--blue-600);
  color: var(--white);
  font: inherit;
  font-weight: 600;
  cursor: pointer;
}

.card {
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-lg);
}
.card--shadow { box-shadow: var(--shadow-md); }

.tag {
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  font-weight: 600;
}
.tag--blue { background: var(--blue-100); color: var(--blue-700); }
.tag--teal { background: var(--teal-50); color: var(--teal-700); }
.tag--gray { background: var(--gray-100); color: var(--gray-700); }

.heading { margin: 0; font-weight: 700; color: var(--gray-900); }
.heading--1 { font-size: var(--text-3xl); }
.heading--2 { font-size: var(--text-2xl); }
.heading--3 { font-size: var(--text-lg); }

.text { margin: 0; line-height: 1.5; }
.text--xs { font-size: var(--text-xs); }
.text--sm { font-size: var(--text-sm); }
.text--base { font-size: var(--text-base); }
.text--gray { color: var(--gray-500); }

.input, .select {
  padding: 8px 12px;
  border: 1px solid var(--gray-300);
  border-radius: var(--radius-md);
  background: var(--white);
  font: inherit;
  font-size: var(--text-sm);
}

.toggle { display: inline-flex; align-items: center; gap: var(--spacing-2); cursor: pointer; font-size: var(--text-sm); }
.toggle input { position: absolute; opacity: 0; width: 1px; height: 1px; }
.toggle-track {
  position: relative;
  width: 40px;
  height: 22px;
  border-radius: var(--radius-full);
  background: var(--gray-300);
  transition: background-color 0.2s;
}
.toggle-track::after {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--white);
  transition: transform 0.2s;
}
.toggle input:checked + .toggle-track { background: var(--green-500); }
.toggle input:checked + .toggle-track::after { transform: translateX(18px); }
.toggle input:disabled + .toggle-track { opacity: 0.5; }
`;
