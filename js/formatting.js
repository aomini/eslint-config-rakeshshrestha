module.exports = {
  extends: ["./no-rules.js", "prettier"],
  rules: {
    "arrow-body-style": "off",
    "prefer-arrow-callback": [
      "error",
      { allowNamedFunctions: true, allowUnboundThis: true },
    ],
    "prefer-destructuring": "off",
    "sort-imports": "off",
    "new-cap": "off",
    "@babel/new-cap": [
      "error",
      {
        newIsCap: true,
        capIsNew: true,
      },
    ],
    "no-invalid-this": "off",
    "@babel/no-invalid-this": "error",
  },
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      rules: {
        "@babel/no-invalid-this": "off",
        "@typescript-eslint/no-invalid-this": "error",
      },
    },
  ],
};
