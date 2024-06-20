import imgLight from "../../img/Screenshot_1.png";
import imgDark from "../../img/Screenshot_5.png";
import imgNeutral from "../../img/photo-1513628253939-010e64ac66cd.avif";
import { useTheme } from "../../context/ThemeProvider";
import styles from "./ChooseSide.module.css";

const ChooseSideItem = ({ img, text, classes = "", onClick }) => {
  return (
    <div className={styles.item} onClick={onClick}>
      <div className={styles.item__header + " " + classes}>{text}</div>
      <img src={img} alt={text} className={styles.item__img} />
    </div>
  );
};
function ChooseSide() {
  const elements = [
    { theme: "white", text: "Light Side", img: imgLight, classes: "light" },
    { theme: "dark", text: "Dark Side", img: imgDark, classes: "dark" },
    {
      theme: "neutral",
      text: "Neutral Side",
      img: imgNeutral,
      classes: "neutral",
    },
  ];
  const { change } = useTheme();

  return (
    <div className={styles.container}>
      {elements.map((elem) => {
        return (
          <ChooseSideItem
            key={elem.theme}
            onClick={() => change(elem.theme)}
            img={elem.img}
            text={elem.text}
            classes={styles[elem.classes]}
          />
        );
      })}
    </div>
  );
}
export { ChooseSide };
