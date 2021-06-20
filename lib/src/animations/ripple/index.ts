import { keyframes } from '../../config/stitches'

export const ripple = keyframes({
  '0%': {
    transform: 'scale(0)',
    opacity: 1,
  },
  '100%': {
    transform: 'scale(4)',
    opacity: 0,
  },
})
