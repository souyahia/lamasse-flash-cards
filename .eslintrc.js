module.exports = {
  extends: 'expo',
  ignorePatterns: ['/dist/*'],
  plugins: [
    "simple-import-sort",
    "import",
    "unused-imports",
  ],
  settings: {
    "import/resolver": {
      typescript: true,
      node: true,
      paths: ["/"],
    },
  },
  rules: {
    // ------ Imports
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { prefer: "type-imports", fixStyle: "separate-type-imports" },
    ],
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": "warn",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          ["^\\u0000"], // side effect imports
          ["^@?\\w"], // packages
          ["^@/"], // internal absolute imports
          ["^[^.]"], // everything else
          ["^\\."], // relative imports
        ],
      },
    ],
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
  },
};
