module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["import"],
  settings: {
    "import/ignore": ["node_modules", ".json$", ".(scss|less|css|styl)$"],
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      /** Resolve path alias for js used with jsconfig */
      alias: {
        map: [
          // It alone can handle the @/ paths
          ["@/*", "./src"],
        ],
        extensions: [".jsx", ".js"],
      },
    },
  },
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      extends: "plugin:import/typescript",
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
      },
      plugins: ["@typescript-eslint"],
      rules: {},
    },
  ],
};
