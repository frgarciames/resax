import * as Label from '@radix-ui/react-label'
import { Root } from '@radix-ui/react-checkbox'
import { keyframes, styled } from '../../config/stitches'

const line1Animation = keyframes({
  '0%': {
    width: 0,
  },
  '100%': {
    width: '100%',
  },
})

const line2Animation = keyframes({
  '0%': {
    height: 0,
  },
  '100%': {
    height: '100%',
  },
})

export const StyledLabel = styled(Label.Root, {
  '&:hover': {
    '& [data-state="unchecked"]': {
      backgroundColor: '#eee',
    },
    '& [data-state="checked"]': {
      boxShadow: '0 3px 15px 0 rgba(26, 93, 255,.35)',
    },
    cursor: 'pointer',
  },
  variants: {
    hasLabel: {
      true: {
        display: 'flex',
        alignItems: 'center',
        width: 'fit-content',
      },
    },
  },
})

export const StyledCheckbox = styled(Root, {
  appearance: 'none',
  backgroundColor: 'transparent',
  padding: 0,
  width: 23,
  height: 23,
  border: '2px solid #ccc',
  borderRadius: '32%',
  position: 'relative',
  transition: 'all .3s ease',
  '&:hover': {
    cursor: 'pointer',
  },
  '&:before': {
    content: '',
    transition: 'all .3s ease',
    backgroundColor: 'blue',
    position: 'absolute',
    borderRadius: '32%',
    border: '2px solid blue',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  "&[data-state='checked']:before": {
    opacity: 1,
    width: '100%',
    height: '100%',
  },
  "&[data-state='unchecked']:before": {
    opacity: 0,
    width: 0,
    height: 0,
  },
})

export const ContainerCheckIcon = styled('div', {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%) rotate(45deg)',
  display: 'block',
  width: 8,
  height: 14,
  marginTop: -2,
})

export const LineCheck1 = styled('span', {
  background: '#fff',
  content: '',
  position: 'absolute',
  height: 2,
  transition: 'all .2s ease',
  borderRadius: 5,
  zIndex: 100,
  bottom: 0,
  left: 0,
  animation: `${line1Animation} 300ms`,
  animationDelay: '200ms',
  animationFillMode: 'forwards',
})

export const LineCheck2 = styled('span', {
  bottom: 0,
  right: 0,
  zIndex: 100,
  background: '#fff',
  position: 'absolute',
  borderRadius: 5,
  transition: 'all .2s ease',
  width: 2,
  animation: `${line2Animation}`,
  animationFillMode: 'forwards',
  animationDelay: '400ms',
  animationDuration: '300ms',
})

export const ChildrenLabel = styled('div', {
  marginLeft: '.5rem',
})
