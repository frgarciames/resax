import * as React from 'react'
import * as ReactIs from 'react-is'

export const RenderEnhancer: React.FC<{ Enhancer: any }> = ({ Enhancer }) => {
  if (typeof Enhancer === 'string') {
    return Enhancer
  }
  if (ReactIs.isValidElementType(Enhancer)) {
    return <Enhancer />
  }
  return Enhancer
}

export const deepMerge = (target: any, source: any) => {
  for (const key of Object.keys(source)) {
    deepMerge
    if (source[key] instanceof Object)
      Object.assign(source[key], deepMerge(target[key], source[key]))
  }

  Object.assign(target || {}, source)
  return target
}

export const getCoords = (elem: Element | HTMLElement) => {
  const box = elem.getBoundingClientRect()
  const body = document.body
  const docEl = document.documentElement
  const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop
  const scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft
  const clientTop = docEl.clientTop || body.clientTop || 0
  const clientLeft = docEl.clientLeft || body.clientLeft || 0
  const top = box.top + scrollTop - clientTop
  const bottom = box.bottom + scrollTop - clientTop
  const left = box.left + scrollLeft - clientLeft
  const right = box.right + scrollLeft - clientLeft
  const width = box.width

  return {
    top: Math.round(top),
    bottom: Math.round(bottom),
    left: Math.round(left),
    right: Math.round(right),
    width: Math.round(width),
  }
}

export const colorToRgba = (color: string, opacity: number): string => {
  if (color.includes('rgba')) return color
  if (color.includes('rgb')) {
    return color.replace('rgb', 'rgba').replace(')', `, ${opacity})`)
  }
  const rgbColor = hexToRgb(color)
  if (!rgbColor) return ''
  const { r, g, b } = rgbColor
  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}

export const hexToRgb = (
  hex: string
): { r: number; g: number; b: number } | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}
