# Representative run: selection rule (pre-registered)

Written at 2026-10-06T13:11:24Z, while the runs were still in progress and before any output was opened.

For each prompt × system, the representative run is the run that shares the most
structural decisions with the other two runs of the same combination:

1. Which library components it uses (or rebuilds by hand).
2. How it styles: library classes/tokens vs. its own CSS values.
3. Layout and element structure (sections, order, controls used).
4. Accessibility-relevant choices (real button/label/role vs. not).

Score each run by how many of these it shares with each sibling; pick the highest.
Not the best-looking and not the worst. Ties go to the lowest run number.
The choice and the reasoning are recorded per combination in METHOD.md.
