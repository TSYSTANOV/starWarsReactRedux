import { createContext, useContext, useState } from "react";
import { GiLightSabers } from "react-icons/gi";
import { AiOutlineAndroid } from "react-icons/ai";
import { GiDeathStar } from "react-icons/gi";
import imgLight from "../img/free-icon-light-saber-922860.png";
import imgDark from "../img/free-icon-death-star-2363879.png";
import imgNeutral from "../img/free-icon-bb-8-12929240.png";
import { changeCssVariables } from "../services/changeCssVariables";

export const ThemeLight = "white";
export const ThemeDark = "dark";
export const ThemeNeutral = "neutral";

export const ThemeList = {
  white: <GiLightSabers />,
  dark: <GiDeathStar />,
  neutral: <AiOutlineAndroid />,
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, changeTheme] = useState(null);
  changeCssVariables(currentTheme);
  const change = (name) => {
    changeTheme(name);
  };
  return (
    <ThemeContext.Provider
      value={{
        theme: currentTheme,
        change: change,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
export const useTheme = () => useContext(ThemeContext);
