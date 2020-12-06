module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    semi: [2, 'always'],
    'react/prop-types': [0],
  },
  globals: {
    React: 'writable',
  },
};
