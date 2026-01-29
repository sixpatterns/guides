# Philosophy

## Before you code

- If requirements are unclear, ask. Do not guess.
- Before you build something, check if we have built something similar before.
  Copying a good pattern is better than inventing a new one.
  - Example: Building a form? Look at another form in the app to see how we did
    validation there.
  - (Find similar occurrences that you're trying to implement)
- Look at open-source code or successful products (like Square or Cal.com based
  on what you're building) to see how they solved this similar problem. Do not
  rely only on ChatGPT.
- Finish one ticket before starting another. Multitasking lowers speed and
  quality.

## Writing code

- Do not copy-paste code you do not understand.
- Keep code simple and easy to understand.
- Avoid over engineering
- Just because code runs doesn't mean it is good. Is it easy to change later? Is
  it fast?
- Do not write code for features we _might_ need in the future. Solve the
  problem we have today.
- Be consistent:
  - Copy existing patterns. If you are building a form, look at other forms in
    the app first.
  - Use the same words everywhere (e.g., if we say "Add user" in one place,
    don't say "Add User" in another).
- Use empty lines to group related and similar code. This makes it easier to
  read.
- Avoid shortcuts: Do it the right way, not the fast way.
- Break large tickets into smaller PRs (avoid changing 50+ files at once).
