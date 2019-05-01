module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-export-namespace-from",
    "@babel/plugin-proposal-export-default-from",
    "@babel/plugin-proposal-nullish-coalescing-operator"
  ],
  env: {
    dev: {
      plugins: ["babel-plugin-styled-components"]
    }
  }
};
