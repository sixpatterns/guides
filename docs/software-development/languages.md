# Languages

## General

- Alphabetical order: Sort most items alphabetically within their groups (e.g.,
  `useState` lists, Rails associations, GraphQL fields, GraphQL queries and
  mutations hooks). [Model example](alphabetical-order-model.rb),
  [React component example](alphabetical-order-component.tsx).
- Logical grouping: Group similar code constructs together (e.g., all `useMemo`
  hooks together, all Rails validations, associations, callbacks together).
- Spacing: Separate distinct groups with a single blank line to improve
  scannability.
- Prefer framework defaults (Rails, Next.js, Tailwind, Vite, etc.). Customize
  only when there is a clear need.

## Javascript/Typescript and React

- Prefer arrow functions.
- Use TypeScript for everything.
- Prefer GraphQL using
  [Tanstack query](https://tanstack.com/query/latest/docs/framework/react/graphql)
- Use `npx knip` to remove unused code.
- Avoid using `useEffect` whenever possible (read
  [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect)).
  If it is absolutely necessary, extract it and move it to a custom hooks file.
- Tailwind CSS: Apply classes directly on the exact element being styled, rather
  than from a parent container.

## Rails

- Prefer GraphQL.
- Avoid monkey-patching.

### Controllers

- DHH encourages limiting controllers to the standard CRUD actions (index, show,
  new, edit, create, update, destroy). When a controller starts handling more
  than these, it is a signal to split it into a separate controller. (See
  [resource pattern](https://jeromedalbert.com/how-dhh-organizes-his-rails-controllers/))

### Models

- Group code by type. Put associations first, then validations, then callbacks.
  Sort them alphabetically. Put a blank line between groups.
  [Example](alphabetical-order-model.rb).
- Don't write SQL fragments (like `where('id IS NOT NULL')`) outside of models.

### Database and migrations

- Keep `db/schema.rb` under version control and in sync with your feature branch
  code.
- Use `db/seeds.rb` for data that is required to start fresh environment.
- Avoid `default` values unless you really need them (Booleans usually need
  defaults).
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

- Use minitest (Rails default) over rspec
- Write request tests for your queries and mutations.
- When frontend is maintained within the same codebase as the backend, write
  system tests.
- Use `mocha` to mock third-party APIs (like Stripe or Twilio).
- Avoid using instance variables in tests.

## GraphQL

- Add explicit `null` value to field. Be clear about what can be null.
- Set `null: false` for most fields (match your database)
- Use `@include(if: $includePosts)` when fetching associations to avoid loading
  too much data everywhere the query is used. Checkout
  [blog post](https://www.sixpatterns.com/blog/avoid-overfetching-with-graphql-include-directive)
  for a practical example.

### Public GraphQL APIs

Publicly available GraphQL APIs allowing you to explore how GraphQL can be used
at a big company.

- [Shopify GraphQL admin APIs](https://shopify.dev/docs/api/admin-graphql/latest)

### Tools

- [Bruno](https://www.usebruno.com/) - HTTP client with GraphQL support
