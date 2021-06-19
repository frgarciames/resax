import { Indicator } from '@radix-ui/react-checkbox'
import * as React from 'react'
import {
  StyledCheckbox,
  ChildrenLabel,
  ContainerCheckIcon,
  LineCheck1,
  LineCheck2,
  StyledLabel,
} from './styled'

const CheckIcon: React.ForwardRefExoticComponent<React.RefAttributes<unknown>> =
  React.forwardRef(() => (
    <ContainerCheckIcon>
      <LineCheck1 />
      <LineCheck2 />
    </ContainerCheckIcon>
  ))

type CheckboxComponent = React.ComponentPropsWithRef<typeof StyledCheckbox>

export const Checkbox: React.FC<CheckboxComponent> = React.forwardRef(
  ({ children, color = 'primary', ...props }, ref) => {
    return (
      <StyledLabel color={color} hasLabel={!!children}>
        <StyledCheckbox color={color} ref={ref} {...props}>
          <Indicator as={CheckIcon} />
        </StyledCheckbox>
        {children && <ChildrenLabel>{children}</ChildrenLabel>}
      </StyledLabel>
    )
  }
)
