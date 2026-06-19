# Coding standards

## Before you code

- If requirements are unclear, ask. Do not guess.
- Look at open-source code or successful products (like Square or Cal.com based
  on what you're building) to see how they solved this similar problem. Do not
  rely only on ChatGPT.
- Finish one ticket before starting another. Multitasking lowers speed and
  quality.

## General

- Avoid over-engineering. Write less code, as it is easier to maintain and
  change later.
- Do not write code for features we _might_ need in the future. Solve the
  problem we have today.
- Avoid shortcuts: Do it the right way, not the fast way.
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
  [Model example](alphabetical-order-model.rb),
  [React component example](alphabetical-order-component.tsx).
- Prefer framework defaults (Rails, Next.js, Tailwind, Vite, etc.). Customize
  only when there is a clear need.

## TypeScript & React

- Prefer arrow functions.
- Use TypeScript for everything.
- Avoid type declarations that can be inferred automatically by TypeScript
  (e.g., prefer `users.map(user => user.name)` over
  `users.map((user: User) => ...)`).
- Prefer GraphQL using
  [Tanstack query](https://tanstack.com/query/latest/docs/framework/react/graphql)
- Use `npx knip` to remove unused code.
- Avoid useEffect. If unavoidable, extract it to a custom hook file. (read
  [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect)).
- Tailwind CSS: Apply classes directly on the exact element being styled, rather
  than from a parent container.

### Ant Design

- Avoid using `dataIndex` in table columns; prefer `render` functions instead.

## Ruby on Rails

- Prefer GraphQL.
- Avoid monkey-patching.

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

### Database and migrations

- Keep `db/schema.rb` under version control and in sync with your feature branch
  code.
- Use `db/seeds.rb` for data that is required to start fresh environment.
- Avoid column `default` values unless you really need them (Booleans usually
  need defaults).
- Constrain most columns as `NOT NULL`
  - Why? If `amount` is nullable, you have to check for `nil` every time you do
    math. That is messy.
  - When adding a new column to an existing table, avoid setting a `default`
    value. Instead, mark column as `NOT NULL` and fill existing column using
    `change_null`.
- Never change a migration file after it is merged to `main`. Create a new
  migration instead.
- Don't use `ActiveRecord` models in migration. Models change over time, which
  breaks old migrations.
- Always use an `ORDER BY` clause if displaying a list to a user. Postgres does
  not guarantee order without it.

### Mailers

- Use mailer previews to test emails locally.
- For staging environments, route all recipients to sandbox addresses (see
  [Stop sending emails to real customers](https://www.sixpatterns.com/blog/stop-sending-emails-to-real-customers)).

### Tests

- Use minitest (Rails default) over rspec.
- Write request tests for queries and mutations.
- When frontend is maintained within the same codebase as the backend, write
  system tests.
- Use `mocha` to mock third-party APIs (like Stripe or Twilio).
- Avoid using instance variables in tests.
- Keep tests minimal: When using a factory in a test, only pass attributes the
  test needs to run. Avoid adding unrelated attributes (e.g., if a test does not
  depend on `price`, do not include it).

## GraphQL

- Add explicit `null` value to field. Be clear about what can be null.
- Always set `null: false` unless the database explicitly allows `NULL`.
- If fetching associations in a query, use `@include` directive to avoid
  over-fetching. Checkout
  [blog post](https://www.sixpatterns.com/blog/avoid-overfetching-with-graphql-include-directive)
  for a practical example.
- Field ordering in types: Group fields by category, separated by blank lines,
  in the following order:
  1. Column-backed attributes
  2. Association fields
  3. Derived fields (custom methods) [Example](graphql-type-ordering.rb).

### Public GraphQL APIs

Publicly available GraphQL APIs allowing you to explore how GraphQL can be used
at a big company.

- [Shopify GraphQL admin APIs](https://shopify.dev/docs/api/admin-graphql/latest)

### Tools

- [Bruno](https://www.usebruno.com/) - HTTP client with GraphQL support
