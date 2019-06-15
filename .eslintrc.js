module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended", 
    "prettier/react"
 ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    "prettier"
  ],
  'rules': {
    "react/prop-types": ["error"],
        "quotes": ["error", "single", { "avoidEscape": true }],
        "complexity": ["error", 8],
        "max-statements": ["error", 40],
        "max-lines": ["error", 400],
        "max-params": ["error", 5],
        "no-unused-vars": ["error", { "vars": "all", "args": "all", "argsIgnorePattern": "^_"}],
        "semi": ["error", "always"],
        "comma-spacing": ["error", { "before": false, "after": true }],
        "comma-dangle": ["error", "never"],
        "no-trailing-spaces": "error",
        "no-irregular-whitespace": "error",
        "camelcase": ["warn", { "properties": "always" }],
        "no-console": ["error"],
        "react/display-name": "off",
        "prettier/prettier": [
            "error",
            {
                "parser": "babylon",
                "trailingComma": "none",
                "bracketSpacing": true,
                "jsxBracketSameLine": true,
                "semi": true,
                "useTabs": false,
                "tabWidth": 2,
                "arrowParens": "always",
                "printWidth": 120
            }
        ]
  }
}
