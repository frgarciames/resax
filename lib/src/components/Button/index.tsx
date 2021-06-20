import * as React from 'react'
import { StyledButton, Gradient, Transparent } from './styled'
import { createRipple } from './utils'

type ButtonComponent = React.ComponentPropsWithRef<typeof StyledButton> & {
  gradient?: boolean
  ripple?: boolean
}

export const Button: React.FC<ButtonComponent> = React.forwardRef(
  (
    {
      children,
      size = 'md',
      onClick,
      mode = 'shadow',
      gradient = false,
      active = false,
      ripple = true,
      shape,
      color = 'primary',
      ...props
    },
    ref
  ) => {
    const handleClick: React.MouseEventHandler<HTMLButtonElement> | undefined =
      (e) => {
        e.persist()
        if (ripple) createRipple(e)
        if (onClick) onClick(e)
      }
    return (
      <StyledButton
        {...props}
        role="button"
        size={size}
        mode={mode}
        ref={ref}
        active={active}
        shape={shape}
        color={color}
        onClick={handleClick}
      >
        {children}
        {gradient && mode !== 'transparent' && <Gradient />}
        {mode === 'transparent' && <Transparent className="transparent" />}
      </StyledButton>
    )
  }
)
