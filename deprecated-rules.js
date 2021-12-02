const disableRules = require("./utils/disabledRules");

module.exports = {
  extends: "./non-rules-config.js",
  rules: disableRules([
    "callback-return",
    "global-require",
    "handle-callback-err",
    "id-blacklist",
    "indent-legacy",
    "lines-around-directive",
    "newline-after-var",
    "newline-before-return",
    "no-buffer-constructor",
    "no-catch-shadow",
    "no-mixed-requires",
    "no-native-reassign",
    "no-negated-in-lhs",
    "no-new-require",
    "no-path-concat",
    "no-process-env",
    "no-process-exit",
    "no-restricted-modules",
    "no-spaced-func",
    "no-sync",
    "prefer-reflect",
    "require-jsdoc",
    "valid-jsdoc",
  ]),
};
