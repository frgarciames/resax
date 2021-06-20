import * as React from "react";
import { Button } from "../lib/src";

export const ButtonPlayground = () => {
  const [active, setActive] = React.useState("active");
  return (
    <>
      <Button
        mode="shadow"
        onClick={() => setActive("active")}
        active={active === "active"}
        color="primary"
      >
        Active
      </Button>
      <Button
        mode="shadow"
        onClick={() => setActive("default")}
        active={active === "default"}
        color="primary"
      >
        Default
      </Button>
    </>
  );
};
