import { Root } from "@radix-ui/react-checkbox";
import { keyframes, styled } from "../../config/stitches";

const fadeIn = keyframes({
  "0%": {
    opacity: 0,
    width: 0,
    height: 0,
  },
  "100%": {
    opacity: 1,
    width: "100%",
    height: "100%",
  },
});

const fadeOut = keyframes({
  "0%": {
    opacity: 1,
    width: "100%",
    height: "100%",
  },
  "100%": {
    opacity: 0,
    width: 0,
    height: 0,
  },
});

export const StyledCheckbox = styled(Root, {
  appearance: "none",
  backgroundColor: "transparent",
  padding: 0,
  width: 23,
  height: 23,
  border: "2px solid #ccc",
  borderRadius: "32%",
  position: "relative",
  transition: "all .3s ease",
  "&:hover": {
    cursor: "pointer",
  },
  "&:before": {
    content: "",
    backgroundColor: "blue",
    position: "absolute",
    borderRadius: "32%",
    border: "2px solid blue",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  "&[data-state='checked']:before": {
    animation: `${fadeIn}`,
    animationFillMode: "forwards",
    animationDuration: "300ms",
  },
  "&[data-state='unchecked']:before": {
    animation: `${fadeOut}`,
    animationFillMode: "forwards",
    animationDuration: "300ms",
  },
});
