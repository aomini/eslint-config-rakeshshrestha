module.exports = {
  parser: "@babel/eslint-parser",
  env: {
    es6: true,
  },
  parserOptions: {
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
    ecmaVersion: 2018,
    sourceType: "module",
    requireConfigFile: false,
  },
  plugins: ["@babel"],
};
