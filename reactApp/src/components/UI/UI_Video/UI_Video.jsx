import { useEffect, useRef } from "react";
import styles from "./UI_Video.module.css";
function UI_Video({ src, classes, autoPlay = false, loop = false }) {
  const videoRef = useRef();
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5;
    }
  }, [videoRef.current]);
  return (
    <>
      <video
        ref={videoRef}
        className={`${styles.video} ${classes}`}
        autoPlay={autoPlay}
        loop={loop}
        muted
      >
        <source src={src} />
      </video>
    </>
  );
}
export { UI_Video };
