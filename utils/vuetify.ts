import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          'primary': '#f49340', // オレンジ
          'secondary': '#373735', // ダークグレー
          'background': '#eae8e1', // ライトベージュ
          'accent': '#fbdcaf', // ライトオレンジ

          // Vuetifyのデフォルトカラーも設定
          'surface': '#eae8e1',
          'surface-variant': '#fbdcaf',
          'on-surface-variant': '#373735',
          'error': '#B00020',
          'info': '#2196F3',
          'success': '#4CAF50',
          'warning': '#FB8C00',
        },
      },
    },
  },
})
