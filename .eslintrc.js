module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:vue/essential", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["vue", "prettier"],
  rules: {
    "vue/no-deprecated-slot-attribute": "off",
    quotes: ["error", "double"],
    semi: ["error", "always"],
    indent: ["error", 2],
    "no-multi-spaces": ["error"],
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
};
