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
          ["@/components", "./src/components"],
          ["@/assets", "./src/assets"],
          ["@/providers", "./src/providers"],
          ["@/lib", "./src/lib"],
          ["@/Builder", "./src/Builder"],
          ["@/pages", "./src/pages"],
          ["@/config", "./src/config"],
          ["@/utils", "./src/utils"],
          ["@/hooks", "./src/hooks"],
          ["@/http", "./src/http"],
          ["@/constants", "./src/constants"],
          ["~", "./src"],
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
