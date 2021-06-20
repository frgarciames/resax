import { createCss } from '@stitches/react'
import { colorToRgba } from '../utils'

export const {
  styled,
  css,
  theme: createTheme,
  keyframes,
  global: globalStyles,
  getCssString,
} = createCss({
  theme: {
    colors: {
      primary: '#1A5CFF',
      primary0: colorToRgba('#1A5CFF', 0),
      primary100: colorToRgba('#1A5CFF', 0.25),
      primary200: colorToRgba('#1A5CFF', 0.4),
      primary300: colorToRgba('#1A5CFF', 0.6),
      primary400: colorToRgba('#1A5CFF', 0.8),
      primary500: colorToRgba('#1A5CFF', 1),
      primary600: '#154ACC',
      primary700: '#103799',
      primary800: '#0A2566',
      primary900: '#051233',
      disabled: '#ddd',
      error: '#FB4758',
      error100: colorToRgba('#FB4758', 0.25),
      error200: colorToRgba('#FB4758', 0.4),
      error300: colorToRgba('#FB4758', 0.6),
      error400: colorToRgba('#FB4758', 0.8),
      success: '#46C93A',
      success100: colorToRgba('#46C93A', 0.25),
      success200: colorToRgba('#46C93A', 0.4),
      success300: colorToRgba('#46C93A', 0.6),
      success400: colorToRgba('#46C93A', 0.8),
      warning: '#FDBA00',
      warning100: colorToRgba('#FDBA00', 0.25),
      warning200: colorToRgba('#FDBA00', 0.4),
      warning300: colorToRgba('#FDBA00', 0.6),
      warning400: colorToRgba('#FDBA00', 0.8),
      dark: '#1E1E1E',
      dark100: colorToRgba('#1E1E1E', 0.25),
      dark200: colorToRgba('#1E1E1E', 0.4),
      dark300: colorToRgba('#1E1E1E', 0.6),
      dark400: colorToRgba('#1E1E1E', 0.8),
    },
  },
  media: {
    mobile: '(min-width: 360px)',
    tablet: '(min-width: 768px)',
    desktop: '(min-width: 1024px)',
    'desktop-xl': '(min-width: 1280px)',
  },
  insertionMethod() {
    let currentCssHead: any
    let currentCssNode: any

    return (cssText) => {
      if (typeof document === 'object') {
        if (!currentCssHead)
          currentCssHead = document.head || document.documentElement
        if (!currentCssNode)
          currentCssNode =
            document.getElementById('resax') ||
            Object.assign(document.createElement('style'), { id: 'resax' })
        if (!currentCssNode.parentNode) currentCssHead.prepend(currentCssNode)

        currentCssNode.textContent = cssText
      }
    }
  },
})
