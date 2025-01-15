// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt([
  {
    rules: {
      'no-console': 'warn', // console.logの使用を警告
      'no-unused-vars': 'error', // 未使用の変数をエラーとして報告
      'eqeqeq': 'error', // 厳密等価演算子（===）の使用を強制
      'curly': 'error', // すべての制御文に波括弧を強制
      'semi': ['error', 'always'], // セミコロンの使用を強制
      'quotes': ['error', 'single'], // シングルクォートの使用を強制
    },
    languageOptions: {
      globals: {
        browser: true,
        node: true,
        es6: true
      },
      ecmaVersion: 2020,
      sourceType: 'module'
    }
  }
]);
