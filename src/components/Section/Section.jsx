import React, { useState } from "react";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import styles from "./Section.module.css";

function Section({ title, data, type = "album" }) {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h3>{title}</h3>

        <button
          className={styles.toggle}
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? "Show all" : "Collapse"}
        </button>
      </div>

      {collapsed ? (
        <Carousel
          data={data}
          renderComponent={(item) => (
            <Card
              image={item.image}
              title={item.title}
              follows={item.follows}
              likes={item.likes}
              type={type}
            />
          )}
        />
      ) : (
        <div className={styles.grid}>
          {data.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              title={item.title}
              follows={item.follows}
              likes={item.likes}
              type={type}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Section;