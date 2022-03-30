module.exports = {
  rules: {
    "import/extensions": "off",
    "import/newline-after-import": "off",
    "import/no-named-as-default": "error",
    "import/no-amd": "error",
    "import/no-commonjs": "off",
    "import/no-named-default": "error",
    "import/no-namespace": "off",
    "import/no-nodejs-modules": "off",
    "import/order": [
      "warn",
      {
        pathGroups: [
          {
            pattern: "@/**",
            group: "external",
            position: "after",
          },
        ],
        groups: [
          "builtin",
          "external",
          "internal",
          "unknown",
          "parent",
          ["sibling", "index"],
          "object",
          "type",
        ],
      },
    ],
  },
};
