module.exports = {
  extends: ["./no-rules"],
  rules: {
    "no-class-assign": "error",
    "no-duplicate-imports": "error",
    "no-restricted-exports": "off", // not applicable for a config preset (should be configured only in projects)
    "no-restricted-imports": "off", // not applicable for a config preset (should be configured only in projects)
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-var": "error",
    "prefer-const": "error",
    "prefer-numeric-literals": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "require-yield": "error",
    "symbol-description": "error",
    "no-unused-vars": "error",
    "no-debugger": "warn",
    /** conflicting rule */
    // quotes: ["error", "double"],
  },
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      rules: {
        "no-var": "error", // ts transpiles let/const to var, so no need for vars any more
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "error",
        "prefer-const": "error", // ts provides better types with const
        "prefer-rest-params": "error", // ts provides better types with rest args over arguments
        "prefer-spread": "error", // ts transpiles spread to apply, so no need for manual apply

        "no-duplicate-imports": "off",
        "@typescript-eslint/no-duplicate-imports": "error",

        "no-useless-constructor": "off",
        "@typescript-eslint/no-useless-constructor": "error",
      },
    },
  ],
};
