import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify: ReturnType<typeof createVuetify> = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },

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

export default vuetify
