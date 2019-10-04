# client-boilerplate

A starting point for all ApostropheCMS client projects.

## Installation

1. Make sure you have an up-to-date version of [apostrophe-cli](https://github.com/apostrophecms/apostrophe-cli) installed.

```
$ npm install -g apostrophe-cli
```

2. Create a new private repository on the P'unk Ave GitHub. Don't initialize it with a README.

3. Initialize project using the `apostrophe create` task. Pass in this repo as the boilerplate parameter. (The `--setup` flag will automatically run `npm install`, create a copy of `data/local.js`, and create an admin user.)

  ```
  $ apostrophe create-project PROJECT-NAME --boilerplate="https://github.com/punkave/client-boilerplate" --setup
  $ cd PROJECT-NAME
  ```

4. Commit and push project.

  ```
  $ git init
  $ git add -A
  $ git commit -m "Initial commit generated from client boilerplate"
  $ git remote add origin https://github.com/punkave/REPO-NAME.git
  $ git push -u origin master
  ```

5. Run the script to add our standard set of [issues](https://github.com/punkave/client-boilerplate/issues). Script can also be run to update issues from boilerplate repo.

  ```
  $ node scripts/sync-issues.js REPO-NAME
  ```

6. Delete these instructions.
