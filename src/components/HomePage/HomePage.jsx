import React from "react";
import styles from "./homepage.module.css";
import image from "../../assets/pocket-notes-svg.png";
function HomePage() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.image}>
          <img src={image} alt="" />
        </div>
        <div>Pocket Notes</div>
        <p>
          Store messages and create groups to segregate content.
        </p>
      </div>
      <p>
      </p>
    </div>
  );
}

export default HomePage;
