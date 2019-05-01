module.exports = {
  extends: ["prettier", "prettier/react"],
  plugins: ["prettier", "import", "react"],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module"
  },
  parser: "babel-eslint",
  env: {
    es6: true
  },
  rules: {
    "prettier/prettier": 1,
    "no-duplicate-imports": ["warn"],
    "jsx-a11y/href-no-hash": "off",
    "import/no-extraneous-dependencies": [
      "warn",
      {
        devDependencies: true,
        peerDependencies: true,
        optionalDependencies: false
      }
    ],
    "lines-around-directive": [
      "warn",
      {
        after: "always",
        before: "always"
      }
    ],
    "lines-between-class-members": [
      "warn",
      "always",
      {
        exceptAfterSingleLine: false
      }
    ],
    "no-console": "warn",
    "react/destructuring-assignment": ["warn", "always"],
    "react/forbid-prop-types": [
      "warn",
      {
        checkChildContextTypes: true,
        checkContextTypes: true,
        forbid: ["any", "array", "object"]
      }
    ],
    "react/no-unknown-property": "warn",
    "react/no-unused-prop-types": [
      "warn",
      {
        customValidators: [],
        skipShapeProps: true
      }
    ],
    "react/prefer-es6-class": ["warn", "always"],
    "react/prefer-stateless-function": [
      "warn",
      {
        ignorePureComponents: true
      }
    ],
    "react/prop-types": [
      "warn",
      {
        customValidators: [],
        ignore: [],
        skipUndeclared: false
      }
    ],
    "react/require-default-props": [
      "warn",
      {
        forbidDefaultForRequired: true
      }
    ],
    "import/order": [
      "warn",
      {
        groups: ["builtin", "external", "parent", "sibling", "index"],
        "newlines-between": "always"
      }
    ],
    "spaced-comment": ["warn"]
  }
};
