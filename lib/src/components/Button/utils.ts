import * as ReactDOM from 'react-dom'
import * as React from 'react'
import { Ripple } from './styled'

export const createRipple = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => {
  const button = e.currentTarget
  const diameter = Math.max(button.clientWidth, button.clientHeight)
  const radius = diameter / 2
  const top =
    e.clientX === 0 && e.clientY === 0
      ? -(radius / 2)
      : e.pageY - button.offsetTop - radius
  const left =
    e.clientX === 0 && e.clientY === 0
      ? 0
      : e.pageX - button.offsetLeft - radius
  const rippleContainer = document.createElement('div')
  rippleContainer.id = 'ripple' + Math.random()
  const ripple = React.createElement(Ripple, {
    css: {
      width: diameter,
      height: diameter,
      top,
      left,
    },
    onAnimationEnd: () => rippleContainer.remove(),
  })

  ReactDOM.render(ripple, rippleContainer)
  button.appendChild(rippleContainer)
}
