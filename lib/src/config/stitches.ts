import { createCss } from "@stitches/react";

export const {
  styled,
  css,
  theme: createTheme,
  keyframes,
  global: globalStyles,
  getCssString,
} = createCss({
  theme: {
    colors: {
      disabled: "#ddd",
      error: "#FF2323",
      success: "#44C889",
    },
  },
  media: {
    mobile: "(min-width: 360px)",
    tablet: "(min-width: 768px)",
    desktop: "(min-width: 1024px)",
    "desktop-xl": "(min-width: 1280px)",
  },
  insertionMethod() {
    let currentCssHead: any;
    let currentCssNode: any;

    return (cssText) => {
      if (typeof document === "object") {
        if (!currentCssHead)
          currentCssHead = document.head || document.documentElement;
        if (!currentCssNode)
          currentCssNode =
            document.getElementById("fi-ui") ||
            Object.assign(document.createElement("style"), { id: "fi-ui" });
        if (!currentCssNode.parentNode) currentCssHead.prepend(currentCssNode);

        currentCssNode.textContent = cssText;
      }
    };
  },
});
