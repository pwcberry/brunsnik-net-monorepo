import js from "@eslint/js";
import globals from "globals";
import json from "@eslint/json";
import css from "@eslint/css";
import stylistic from "@stylistic/eslint-plugin";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.js"],
    extends: [
      js.configs.recommended,
      stylistic.configs.customize({
        indent: 2,
        quotes: "double",
        semi: true,
        jsx: true,
      }),
    ],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    rules: {
      // Always require braces around control-flow bodies, even single statements.
      "curly": ["error", "all"],
      // Preserve the repo's convention of ignoring UPPER/underscore-prefixed identifiers.
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]", argsIgnorePattern: "^_" }],
    },
  },
  {
    files: ["**/*.json"],
    ignores: ["package-lock.json"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"],
  },
  { files: ["**/*.css"], plugins: { css }, language: "css/css", extends: ["css/recommended"] },
]);
