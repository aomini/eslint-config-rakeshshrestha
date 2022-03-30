# eslint-config-rakeshshrestha

Eslint preference rules

- _Note_ This is my personal preference configs which I learnt & found helpful along the way. I can assure your that using my eslint config you'll find yourself at better code practices & easily save yourself from mistakes.

## Installation

- Using `yarn add eslint-config-rakeshshrestha -D`
- Using `npm install eslint-config-rakeshshrestha -D`
- Install `eslint` by `yarn add eslint -D` or `npm install eslint -D`. Don't forget to install the eslint plugin in your text editor. Note `create-react-app` has eslint installed by default inside of `react-scripts`. So, installing new version of eslint will bring unwanted hard to detect problem so skip this step on `create-react-app` project.
- Then, install `@babel/core` & `@babel/eslint-parser` on `dev` flag.
- Restart your eslint server or you can also restart your whole terminal.

## Usage

- Create a file on your root dir named `.eslint.rc`. It can be .json or .js as well.
- If you simple want the javascript setup.
-

```json
{
  "extends": "rakeshshrestha"
}
```

- That's it.

## Advanced Usage

- There are other available configs example `react`, `typescript`, `import-order`, `node`, `nextjs`.
- Currently, only `react` & `typescript` is available.

## Debugging

> It's pretty simple. Go your output tab on text editor it will throw some errors and you'll find the problems with eslint. Another thing you can also do is run `npx eslint .` if it runs then perfect if it doesn't follow the error messages.
> Every time you add some eslint plugins or make changes to eslintrc file; restart your eslint server.

## Possible Errors

- If you get react/no-unstable-nested-components was not found then install `eslint-plugin-react`
- If you get import/no-\* was not found then install `eslint-plugin-import`

### React & typescript

- Typescript is by default enabled for all configs.

```json
{
  "extends": "rakeshshrestha/react"
}
```

### Suggestion

- You can mix up these configs to get better insights. Here is one which I highly suggest you to do

```json
{
  "extends": ["rakeshshrestha", "rakeshshrestha/react"]
}
```

### For Nextjs

- Please use this for optimum eslint errors and warnings.

```json
{
  "extends": ["rakeshshrestha", "rakeshshrestha/react", "next/core-web-vitals"]
}
```
