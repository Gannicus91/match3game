module.exports = {
  root: true,

  // лобальные переменные среды
  env: {
    // глобальные переменные браузера
    browser: true,
    // Глобальные переменные CommonJS и область видимости CommonJS (необходимо для WebPack)
    commonjs: true,
    // включает синтаксис ES6 автоматически
    es6: true,
    node: true,
    mocha: true,
  },

  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:react/recommended',
  ],

  // настройки парсера кода
  parserOptions: {
    // наш код в модулях - ECMAScript
    sourceType: 'module',
    // ECMA 2017 (8)
    ecmaVersion: 11,
    // указываем свой парсер (не стандартный) -
    // Обертка вокруг анализатора Babel, которая делает его совместимым с ESLint
    parser: 'babel-eslint',
  },

  rules: {
    'no-plusplus': 'off',
    'max-len': ['error', 120, { ignoreUrls: true }],
    'prefer-destructurin': 'off',
    'no-underscore-dangle': 'off',
    'no-case-declarations': 'off',
    'arrow-parens': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
  },
};
