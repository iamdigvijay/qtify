import React from "react";
import { Chip } from "@mui/material";
import styles from "./Card.module.css";

function Card({ image, title, follows, likes, type = "album" }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <img src={image} alt={title} />

        <div className={styles.banner}>
          
           
            <Chip
            className={styles.chip}
  label={
    type === "song"
      ? `${likes} Likes`
      : `${follows} Follows`
  }
  size="small"
  sx={{
    backgroundColor: "#121212",
    color: "#fff",
    borderRadius: "20px",
    height: "28px",
    "& .MuiChip-label": {
      paddingLeft: "12px",
      paddingRight: "12px",
    },
  }}
/>
        </div>
      </div>

      <p className={styles.title}>{title}</p>
    </div>
  );
}

export default Card;