export const changeCssVariables = (theme) => {
  const root = document.getElementById("root");

  const cssVariables = ["header", "background"];
  if (theme) {
    cssVariables.forEach((el) => {
      root.style.setProperty(
        `--theme-default-${el}`,
        `var(--theme-${theme}-${el})`
      );
    });
  }
};
