# Review guidelines

## Generic rules

- Follow variable naming and patterns match existing code.
- YAGNI: Avoid over-engineered code.
- Simplicity: If a logic block is complex, suggest a simpler implementation. (Is
  the code easy to change later?)
- Alphabetical order: Sort most items alphabetically within their groups (e.g.,
  `useState` lists, Rails associations, GraphQL fields, GraphQL queries and
  mutations hooks).
- Grouping: Ensure related code is grouped together and separated by empty lines
  for scannability.

## Language specific rules

### TypeScript & React

- Prefer arrow functions.
- Prefer GraphQL using Tanstack Query.
- Avoid useEffect. If unavoidable, extract it to a custom hook file.
- Tailwind CSS: Apply classes directly on the exact element being styled, rather
  than from a parent container.

### Ruby on Rails

#### General

- Prefer GraphQL.
- Avoid monkey-patching.

#### Models

- Group code by type. Put associations first, then validations, then callbacks.
  Sort them alphabetically. Put a blank line between groups.
- Don't write SQL fragments outside of models.

#### Database and migrations

- Avoid `default` values unless you really need them (Booleans usually need
  defaults).
- Constrain most columns as `NOT NULL`
  - When adding a new column to an existing table, avoid setting a `default`
    value. Instead, fill existing entries using `change_null`.
- Don't use `ActiveRecord` models in migration.
- Use an `ORDER BY` clause if displaying a list to a user.

#### Tests

- Use minitest.
- Use mocha for mocking.
- Avoid using instance variables in tests.

### GraphQL

- Add explicit `null` value to field.
- Fields should default to `null: false` unless the database allows `NULL`.
- If fetching associations in a query, use `@include` directive to avoid
  over-fetching.
