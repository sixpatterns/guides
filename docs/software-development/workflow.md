# Workflow & Git

Every task follows this path on our board:

1.  **Todo:** Task is waiting to be picked up.
2.  **In Progress:** You are actively working on it.
3.  **In code review:** PR is open. You are waiting for feedback.
4.  **In QA (Staging):** Merged to staging. Ready for testing.
5.  **Ready for production:** Passed QA. Waiting for deployment.
6.  **Done:** Live in production.

## Feature implementation

1. Create a branch from the latest `main`.

   ```sh
   git fetch --all

   # Here, `origin/main` will make sure that new branch will be created from github's main
   git checkout -b 123-add-login-page origin/main
   ```

2. Update your branch with origin main branch

   ```sh
   git fetch --all
   git merge origin/main

   # If there are conflicts, fix them and run:
   git merge --continue

   git push origin 123-add-login-page
   ```

3. Finish:
   - Create a Pull Request on GitHub to merge your feature into main.
   - A teammate will review your code.
   - Address their comments and ask for a re-review.
   - Once approved, the code deploys to the QA (Staging) environment.
   - Test the feature on Staging.
   - If QA passes, merge the PR to main using the "Squash and merge" button.
     (Why Squash? It combines all your messy commits into one clean commit for
     the history.)

## Best practices

- Write good commit message with closely describing what you've done in few
  words
- Avoid pushing files to GitHub that are specific to your development machine or
  process
- Delete local and remote feature branches after merging
- Perform work in a feature branch and then raise pull request
- Avoid force push to your feature branch
