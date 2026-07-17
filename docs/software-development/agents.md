# Coding standards

## General

- Avoid over-engineering. Write less code, as it is easier to maintain and
  change later.
- Do not write code for features we _might_ need in the future. Solve the
  problem we have today.
- Use the same wordings everywhere (e.g., if we say "Add user" in one place,
  don't say "Add User" in another).
- Simplicity: If a logic block is complex, suggest a simpler implementation. (Is
  the code easy to change later?)
- Break large tickets into bite-sized sub-tasks, then open smaller PRs for each
  sub-task (avoid changing 50+ files at once). Small PRs are easier to review,
  test, and merge safely.
- Cross-page consistency: When building a feature that mirrors an existing one,
  match the structure of the existing feature's files as closely as possible.
- Logical grouping: Group similar code constructs together (e.g., all `useMemo`
  hooks together, all Rails validations together).
- Spacing: Separate distinct groups with a single blank line to improve
  scannability.
- Alphabetical order: Sort items alphabetically within their groups (e.g.,
  `useState` lists, Rails associations, GraphQL fields).
- When adding a new environment variable, add it to the `.env.example` file.
- Disallow `TODO` comments.
- When deleting code, trace and delete all usages recursively. Each removal may
  expose more dead code.

## TypeScript & React

- Prefer arrow functions.
- Prefer named exports over `export default`.
- Prefer `type` over `interface`.
- Avoid optional chaining (`?.`) when the value is never `null` or `undefined`.
- Avoid type declarations that can be inferred automatically by TypeScript
  (e.g., prefer `users.map(user => user.name)` over
  `users.map((user: User) => ...)`).
- Prefer GraphQL using Tanstack Query.
- Avoid useEffect. If unavoidable, extract it to a custom hook file.
- Tailwind CSS: Apply classes directly on the exact element being styled, rather
  than from a parent container.

### Ant Design

- Avoid using `dataIndex` in table columns; prefer `render` functions instead.
- When using `Form.useForm` inside a drawer or modal, control rendering with a
  `destroyed` flag to ensure the form unmounts properly.
- When using `DatePicker` or `TimePicker`, always pass `format`,
  `getValueProps`, and `getValueFromEvent`.

## Ruby on Rails

- Prefer GraphQL.
- Avoid monkey-patching.
- Avoid using safe navigation (`&.`) unless the value can actually be `nil`.

### Controllers & queries and mutations

- DHH encourages limiting controllers to the standard CRUD actions (index, show,
  new, edit, create, update, destroy). When a controller starts handling more
  than these, it is a signal to split it into a separate controller. (see
  [resource pattern](https://jeromedalbert.com/how-dhh-organizes-his-rails-controllers/)).

### Models

- Layout: Follow this logical ordering:
  1. Scopes
  2. Associations (`belongs_to`, then `has_one`, then `has_many`, then through
     associations: `has_one :through`, `has_many :through`)
  3. Enums
  4. Validations
  5. Callbacks
  6. Public methods
  7. Private methods
- Don't write SQL fragments (like `where('id IS NOT NULL')`) outside of models.
- When adding `has_many` or `has_one`, define the matching `belongs_to` in the
  associated model. When adding `belongs_to`, define the matching `has_many` or
  `has_one` in the parent model.

### Database and migrations

- Avoid column `default` values unless you really need them (Booleans usually
  need defaults).
- Constrain most columns as `NOT NULL`
  - When adding a new column to an existing table, avoid setting a `default`
    value. Instead, fill existing entries using `change_null`.
- Don't use `ActiveRecord` models in migration.
- Use an `ORDER BY` clause if displaying a list to a user.
- When adding or removing a database column, update all related layers: model
  validations, GraphQL types, GraphQL attributes, factories, and test
  assertions.

### Tests

- Use minitest.
- Write request tests for queries and mutations.
- When frontend is maintained within the same codebase as the backend, write
  system tests.
- Use `mocha` to mock third-party APIs.
- Avoid using instance variables in tests.
- Keep tests minimal: When using a factory in a test, only pass attributes the
  test needs to run. Avoid adding unrelated attributes (e.g., if a test does not
  depend on `price`, do not include it).

## GraphQL

- Add explicit `null` value to field.
- Always set `null: false` unless the database explicitly allows `NULL`.
- When a field or argument represents an ID, use the `ID` type instead of
  `String` or `Integer`.
- If fetching associations in a query, use `@include` directive to avoid
  over-fetching.
- Field ordering in types: Group fields by category, separated by blank lines,
  in the following order:
  1. Column-backed attributes
  2. Association fields
  3. Derived fields (custom methods)
- When a field returns an association or collection, add `scope:` to ensure only
  authorized data is returned and `preload:` to avoid N+1 queries.
