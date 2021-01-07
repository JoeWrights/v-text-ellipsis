module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    'plugin:vue/essential',
    'standard'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    // 允许使用async-await
    'generator-star-spacing': 'off',
    // 出于安全性考虑，生产环境不能debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 允许重新赋值函数，惰性函数有这个需要
    'no-func-assign': 'off',
    "vue/no-use-v-if-with-v-for": ["error", {
      "allowUsingIterationVar": true
    }],
    "standard/no-callback-literal": "off"
  }
}
