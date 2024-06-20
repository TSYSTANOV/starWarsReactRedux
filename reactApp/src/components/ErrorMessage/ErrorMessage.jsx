import { useState } from "react";
import styles from "./ErrorMessage.module.css";
import Video from "./video/han-solo.mp4";
import { UI_Video } from "../UI/UI_Video/UI_Video";

function ErrorMessage({ param }) {
  return (
    <>
      <div className={styles.text}>
        <p>
          The dark side was won
          <br />
          We cannot display data <br />
          ComeBack when we fix it
        </p>
        <UI_Video
          src={Video}
          classes={styles.video}
          autoPlay={true}
          loop={true}
        />
      </div>
    </>
  );
}
export default ErrorMessage;
