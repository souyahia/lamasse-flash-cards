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
      paths: ["./"],
    },
  },
  rules: {
    "react/prop-types": "off",
    // ------ Imports
    "@typescript-eslint/no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "lucide-react-native",
              message:
                "Don't import directly from lucide-react-native. Use @/components/Icon instead.",
              allowTypeImports: true,
            },
          ],
        },
      ],
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
