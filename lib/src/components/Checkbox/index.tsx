import * as Label from "@radix-ui/react-label";
import { Indicator } from "@radix-ui/react-checkbox";
import { useLabelContext } from "@radix-ui/react-label";
// import { CheckIcon } from "@radix-ui/react-icons";
import * as React from "react";
import { keyframes, styled } from "../../config/stitches";
import { StyledCheckbox } from "./styled";

const line1Animation = keyframes({
  "0%": {
    width: 0,
  },
  "100%": {
    width: "100%",
  },
});

const line2Animation = keyframes({
  "0%": {
    height: 0,
  },
  "100%": {
    height: "100%",
  },
});

const containerAnimation = keyframes({
  "0%": {
    opacity: 0,
    width: 0,
    height: 0,
  },
  "100%": {
    opacity: 1,
    width: "calc(100% + 4px)",
    height: "calc(100% + 4px)",
  },
});

const Container = styled("div", {
  backgroundColor: "blue",
  position: "absolute",
  borderRadius: "32%",
  border: "2px solid blue",
  animation: `${containerAnimation}`,
  animationFillMode: "forwards",
  animationDuration: "300ms",
  zIndex: 0,
});

const ContainerCheckIcon = styled("div", {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%) rotate(45deg)",
  display: "block",
  width: 8,
  height: 14,
  marginTop: -2,
});

const LineCheck1 = styled("span", {
  background: "#fff",
  content: "",
  position: "absolute",
  height: 2,
  transition: "all .2s ease",
  borderRadius: 5,
  zIndex: 100,
  bottom: 0,
  left: 0,
  animation: `${line1Animation} 300ms`,
  animationDelay: "200ms",
  animationFillMode: "forwards",
});

const LineCheck2 = styled("span", {
  bottom: 0,
  right: 0,
  zIndex: 100,
  background: "#fff",
  position: "absolute",
  borderRadius: 5,
  transition: "all .2s ease",
  width: 2,
  animation: `${line2Animation}`,
  animationFillMode: "forwards",
  animationDelay: "400ms",
  animationDuration: "300ms",
});

const CheckIcon = () => (
  <Container>
    <ContainerCheckIcon>
      <LineCheck1 />
      <LineCheck2 />
    </ContainerCheckIcon>
  </Container>
);

const StyledLabel = styled(Label.Root, {
  display: "flex",
  alignItems: "center",
  transition: "all .3s ease",
  "&:hover": {
    "& button": {
      backgroundColor: "#eee",
      '&[data-state="checked"]': {
        boxShadow: "0 3px 15px 0 rgba(26, 93, 255,.35)",
      },
    },
    cursor: "pointer",
  },
});

const ChildrenLabel = styled("div", {
  marginLeft: ".5rem",
});

export const Checkbox: React.FC = ({ children }) => {
  return (
    <StyledLabel>
      <StyledCheckbox>
        <Indicator as={CheckIcon} />
      </StyledCheckbox>
      {children && <ChildrenLabel>{children}</ChildrenLabel>}
    </StyledLabel>
  );
};
