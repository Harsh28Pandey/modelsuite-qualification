module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['eslint:recommended', 'plugin:react-hooks/recommended'],
  plugins: ['react-hooks', 'react'],
  rules: {
    "no-unused-vars": "off",
    "react-refresh/only-export-components": "off",
    'react/react-in-jsx-scope': 'off'
  },
};
