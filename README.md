# AI-ready design system demo: method and runs

The inputs and raw outputs behind the "Same prompt. Two systems." demo: the same model
gets the same prompt, once with an unstructured legacy UI library and once with an
AI-ready design system, three times each. Every output is here, unedited.

Read [METHOD.md](METHOD.md) first: model, isolation, prompts, how the representative runs
were chosen, and what actually differed.

## Contents

| Path | What it is |
|---|---|
| `systems/unstructured/` | The legacy library (`@shared/ui`): value-named tokens, no docs |
| `systems/ai-ready/` | The AI-ready system (`@acme/ui`): semantic tokens, documented components |
| `tasks/<prompt>/<system>/TASK.md` | The exact task each run received |
| `TASK.template.md` | The template those tasks were made from |
| `runs/<prompt>/<system>/run-N.tsx` | Every output, byte-identical to what the model wrote |
| `SELECTION-RULE.md` | The rule for picking the representative run, written before any output was opened |
| `representative-runs.json` | Which run the website shows per prompt and system |

## Reproduce

For each prompt and system, make a folder with that `TASK.md` and a copy of the system as
`system/`, then give a fresh agent the instruction quoted in METHOD.md, three times per
folder. The outputs are React + TypeScript components that render inside a Shadow DOM
root, with the system's `styles` injected first.
