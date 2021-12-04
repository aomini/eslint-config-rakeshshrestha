# eslint-config-rakeshshrestha
Eslint preference rules

- *Note* This is my personal preference configs which I learnt & found helpful along the way. I can assure your that using my eslint config you'll find yourself at better code practices & easily save yourself from mistakes.

## Installation
- Using `yarn add eslint-config-rakeshshrestha -D`
- Using `npm install eslint-config-rakeshshrestha -D`
- Install `eslint` by `yarn add eslint -D` or `npm install eslint -D`. Don't forget to install the eslint plugin in your text editor.

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

