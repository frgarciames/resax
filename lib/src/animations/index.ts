import { keyframes } from "../config/stitches";

export const fadeIn = keyframes({
  "0%": { opacity: "0" },
  "100%": { opacity: "1" },
});

export const fadeOut = keyframes({
  "0%": { opacity: "1" },
  "100%": { opacity: "0" },
});

export const spin = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const moveModal = keyframes({
  "0%": { transform: "translateY(30px)" },
  "100%": { transform: "translate(0)" },
});

export const radioCheck = keyframes({
  "0%": {
    width: 0,
    height: 0,
  },
  "100%": {
    width: "8px",
    height: "8px",
  },
});
