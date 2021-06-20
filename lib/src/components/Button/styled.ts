import { ripple } from '../../animations'
import { styled } from '../../config/stitches'

export const StyledButton = styled('button', {
  margin: 0,
  boxShadow: 'none',
  border: 0,
  transition: 'all .25s ease',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  // transform: 'translateY(0)',
  padding: '8px 12px',
  variants: {
    size: {
      xl: {
        padding: '15px 20px',
        fontSize: '1.1rem',
        borderRadius: '20px',
      },
      l: {
        padding: '10px 15px',
        fontSize: '1rem',
        borderRadius: '15px',
      },
      md: {
        padding: '8px 12px',
        fontSize: '.8rem',
        borderRadius: '12px',
      },
      sm: {
        padding: '5px 10px',
        fontSize: '.75rem',
        borderRadius: '9px',
      },
      xs: {
        padding: '3px 8px',
        fontSize: '.6rem',
        borderRadius: '7px',
      },
    },
    active: {
      true: {},
      false: {},
    },
    shape: {
      circle: {
        borderRadius: '50%',
      },
      square: {
        borderRadius: 0,
      },
    },
    color: {
      primary: {
        backgroundColor: '$primary',
        color: '#fff',
      },
      error: {
        backgroundColor: '$error',
        color: '#fff',
      },
      warning: {
        backgroundColor: '$warning',
        color: '#fff',
      },
      success: {
        backgroundColor: '$success',
        color: '#fff',
      },
      dark: {
        backgroundColor: '$dark',
        color: '#fff',
      },
    },
    mode: {
      relief: {
        boxShadow: '0 3px 0 $colors$primary700',
      },
      shadow: {
        '&:hover': {
          transform: 'translateY(-3px)',
        },
      },
      transparent: {
        backgroundColor: 'unset',
      },
      outline: {
        borderWidth: '2px',
        borderStyle: 'solid',
      },
      flat: {
        color: '#fff',
      },
    },
  },
  compoundVariants: [
    // SHADOW ACTIVE
    {
      active: true,
      mode: 'shadow',
      css: {
        transform: 'translateY(-3px)',
      },
    },
    {
      active: true,
      mode: 'shadow',
      color: 'primary',
      css: {
        boxShadow: '0 10px 20px -10px $colors$primary',
      },
    },
    {
      active: true,
      mode: 'shadow',
      color: 'error',
      css: {
        boxShadow: '0 10px 20px -10px $colors$error',
      },
    },
    {
      active: true,
      mode: 'shadow',
      color: 'warning',
      css: {
        boxShadow: '0 10px 20px -10px $colors$warning',
      },
    },
    {
      active: true,
      mode: 'shadow',
      color: 'success',
      css: {
        boxShadow: '0 10px 20px -10px $colors$success',
      },
    },
    {
      active: true,
      mode: 'shadow',
      color: 'dark',
      css: {
        boxShadow: '0 10px 20px -10px $colors$dark',
      },
    },
    // SHADOW NOT ACTIVE
    {
      active: false,
      mode: 'shadow',
      color: 'primary',
      css: {
        '&:hover': {
          boxShadow: '0 10px 20px -10px $colors$primary',
        },
      },
    },
    {
      active: false,
      mode: 'shadow',
      color: 'error',
      css: {
        '&:hover': {
          boxShadow: '0 10px 20px -10px $colors$error',
        },
      },
    },
    {
      active: false,
      mode: 'shadow',
      color: 'warning',
      css: {
        '&:hover': {
          boxShadow: '0 10px 20px -10px $colors$warning',
        },
      },
    },
    {
      active: false,
      mode: 'shadow',
      color: 'success',
      css: {
        '&:hover': {
          boxShadow: '0 10px 20px -10px $colors$success',
        },
      },
    },
    {
      active: false,
      mode: 'shadow',
      color: 'dark',
      css: {
        '&:hover': {
          boxShadow: '0 10px 20px -10px $colors$dark',
        },
      },
    },
    // RELIEF
    {
      active: true,
      mode: 'relief',
      css: {
        boxShadow: 'none',
        transform: 'translateY(3px)',
      },
    },
    // TRANSPARENT ACTIVE
    {
      active: true,
      mode: 'transparent',
      css: {
        '& .transparent': {
          transform: 'scale(1)',
          opacity: 1,
        },
      },
    },
    {
      active: true,
      mode: 'transparent',
      color: 'primary',
      css: {
        '& .transparent': {
          backgroundColor: '$primary',
        },
      },
    },
    {
      active: true,
      mode: 'transparent',
      color: 'error',
      css: {
        '& .transparent': {
          backgroundColor: '$error',
        },
      },
    },
    {
      active: true,
      mode: 'transparent',
      color: 'warning',
      css: {
        '& .transparent': {
          backgroundColor: '$warning',
        },
      },
    },
    {
      active: true,
      mode: 'transparent',
      color: 'success',
      css: {
        '& .transparent': {
          backgroundColor: '$success',
        },
      },
    },
    {
      active: true,
      mode: 'transparent',
      color: 'dark',
      css: {
        '& .transparent': {
          backgroundColor: '$dark',
        },
      },
    },
    // TRANSPARENT NOT ACTIVE
    {
      active: false,
      mode: 'transparent',
      css: {
        backgroundColor: 'transparent',
        '&:hover': {
          color: '#fff',
          '.transparent': {
            transform: 'scale(.95)',
            opacity: 1,
          },
        },
      },
    },
    {
      active: false,
      mode: 'transparent',
      color: 'primary',
      css: {
        color: '$primary',
        '&:hover .transparent': {
          backgroundColor: '$primary200',
        },
      },
    },
    {
      active: false,
      mode: 'transparent',
      color: 'error',
      css: {
        color: '$error',
        '&:hover .transparent': {
          backgroundColor: '$error200',
        },
      },
    },
    {
      active: false,
      mode: 'transparent',
      color: 'warning',
      css: {
        color: '$warning',
        '&:hover .transparent': {
          backgroundColor: '$warning200',
        },
      },
    },
    {
      active: false,
      mode: 'transparent',
      color: 'success',
      css: {
        color: '$success',
        '&:hover .transparent': {
          backgroundColor: '$success200',
        },
      },
    },
    {
      active: false,
      mode: 'transparent',
      color: 'dark',
      css: {
        color: '$dark',
        '&:hover .transparent': {
          backgroundColor: '$dark200',
        },
      },
    },
    // OUTLINE ACTIVE
    {
      active: true,
      mode: 'outline',
      css: {
        color: '#fff',
      },
    },
    {
      active: true,
      mode: 'outline',
      color: 'primary',
      css: {
        backgroundColor: '$primary',
        borderColor: '$primary',
      },
    },
    {
      active: true,
      mode: 'outline',
      color: 'error',
      css: {
        backgroundColor: '$error',
        borderColor: '$error',
      },
    },
    {
      active: true,
      mode: 'outline',
      color: 'warning',
      css: {
        backgroundColor: '$warning',
        borderColor: '$warning',
      },
    },
    {
      active: true,
      mode: 'outline',
      color: 'success',
      css: {
        backgroundColor: '$success',
        borderColor: '$success',
      },
    },
    {
      active: true,
      mode: 'outline',
      color: 'dark',
      css: {
        backgroundColor: '$dark',
        borderColor: '$dark',
      },
    },
    // OUTLINE NOT ACTIVE
    {
      active: false,
      mode: 'outline',
      color: 'primary',
      css: {
        borderColor: '$primary',
        color: '$primary',
        '&:hover': {
          borderColor: '$primary300',
          color: '$primary300',
        },
      },
    },
    {
      active: false,
      mode: 'outline',
      color: 'error',
      css: {
        borderColor: '$error',
        color: '$error',
        '&:hover': {
          borderColor: '$error300',
          color: '$error300',
        },
      },
    },
    {
      active: false,
      mode: 'outline',
      color: 'warning',
      css: {
        borderColor: '$warning',
        color: '$warning',
        '&:hover': {
          borderColor: '$warning300',
          color: '$warning300',
        },
      },
    },
    {
      active: false,
      mode: 'outline',
      color: 'success',
      css: {
        borderColor: '$success',
        color: '$success',
        '&:hover': {
          borderColor: '$success300',
          color: '$success300',
        },
      },
    },
    {
      active: false,
      mode: 'outline',
      color: 'dark',
      css: {
        borderColor: '$dark',
        color: '$dark',
        '&:hover': {
          borderColor: '$dark300',
          color: '$dark300',
        },
      },
    },
    // FLAT ACTIVE
    {
      active: true,
      mode: 'flat',
      color: 'primary',
      css: {
        backgroundColor: '$primary',
      },
    },
    {
      active: true,
      mode: 'flat',
      color: 'error',
      css: {
        backgroundColor: '$error',
      },
    },
    {
      active: true,
      mode: 'flat',
      color: 'warning',
      css: {
        backgroundColor: '$warning',
      },
    },
    {
      active: true,
      mode: 'flat',
      color: 'success',
      css: {
        backgroundColor: '$success',
      },
    },
    {
      active: true,
      mode: 'flat',
      color: 'dark',
      css: {
        backgroundColor: '$dark',
      },
    },
    // FLAT NOT ACTIVE
    {
      active: false,
      mode: 'flat',
      color: 'primary',
      css: {
        backgroundColor: '$primary200',
        '&:hover': {
          backgroundColor: '$primary300',
        },
      },
    },
    {
      active: false,
      mode: 'flat',
      color: 'error',
      css: {
        backgroundColor: '$error200',
        '&:hover': {
          backgroundColor: '$error300',
        },
      },
    },
    {
      active: false,
      mode: 'flat',
      color: 'warning',
      css: {
        backgroundColor: '$warning200',
        '&:hover': {
          backgroundColor: '$warning300',
        },
      },
    },
    {
      active: false,
      mode: 'flat',
      color: 'success',
      css: {
        backgroundColor: '$success200',
        '&:hover': {
          backgroundColor: '$success300',
        },
      },
    },
    {
      active: false,
      mode: 'flat',
      color: 'dark',
      css: {
        backgroundColor: '$dark200',
        '&:hover': {
          backgroundColor: '$dark300',
        },
      },
    },
  ],
})

export const Ripple = styled('span', {
  position: 'absolute',
  borderRadius: '50%',
  animation: `${ripple} 600ms linear`,
  backgroundColor: 'rgba(255, 255, 255, 0.3)',
  opacity: 0,
})

export const Gradient = styled('span', {
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  borderRadius: 'inherit',
  pointerEvents: 'none',
  zIndex: -1,
  background: 'linear-gradient(30deg,$colors$primary0 30%, $colors$primary500)',
  filter: 'hue-rotate(40deg)',
})

export const Transparent = styled('span', {
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  borderRadius: 'inherit',
  pointerEvents: 'none',
  zIndex: -1,
  opacity: 0,
  transform: 'scale(0.5)',
  transition: 'all .3s ease',
  backgroundColor: '$primary100',
})
