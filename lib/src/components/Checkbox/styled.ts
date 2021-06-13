import { Root } from '@radix-ui/react-checkbox'
import { styled } from '../../config/stitches'

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
