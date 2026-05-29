import React from "react";
import styles from "./Hero.module.css";
import HeroImage from "../../assets/hero_headphones.png";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>

      <div className={styles.imageContainer}>
        <img
          src={HeroImage}
          alt="Headphones"
          width={212}
        />
      </div>
    </div>
  );
}

