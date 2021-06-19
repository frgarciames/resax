import { createCss } from '@stitches/react'

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
      disabled: '#ddd',
      error: '#FB4758',
      success: '#46C93A',
      warning: '#FDBA00',
      dark: '#1E1E1E',
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
