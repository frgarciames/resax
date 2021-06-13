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

const CheckIcon: React.FC = () => (
  <ContainerCheckIcon>
    <LineCheck1 />
    <LineCheck2 />
  </ContainerCheckIcon>
)

type CheckboxComponent = React.ComponentPropsWithRef<typeof StyledCheckbox> & {
  size: number
}

export const Checkbox: React.FC<CheckboxComponent> = React.forwardRef(
  ({ children, ...props }, ref) => {
    return (
      <StyledLabel hasLabel={!!children}>
        <StyledCheckbox {...props} ref={ref}>
          <Indicator as={CheckIcon} />
        </StyledCheckbox>
        {children && <ChildrenLabel>{children}</ChildrenLabel>}
      </StyledLabel>
    )
  }
)
