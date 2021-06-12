import { Root } from "@radix-ui/react-checkbox";
import { styled } from "../../config/stitches";

export const StyledCheckbox = styled(Root, {
  appearance: "none",
  backgroundColor: "transparent",
  padding: 0,
  width: 23,
  height: 23,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "2px solid #ccc",
  borderRadius: "32%",
  position: "relative",
  transition: "all .3s ease",
  "&:hover": {
    cursor: "pointer",
  },
});
