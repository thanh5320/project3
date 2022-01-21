import React, { useState, useEffect } from "react";
import styles from "./HotelImage.module.css";

export default function HotelImage({imgs}) {

  return (
    
    <div>
      <div className={styles.main}>
        <div>
          <img className={styles.bigImg} src={"https://" + imgs[0]} width="700px" height="400px" />
        </div>
        <div>
          <div>
            <img className={styles.img} src={"https://" +  imgs[1]} width="400px" height="195px" />
          </div>
          <img src={"https://" +  imgs[2]} width="400px" height="195px" />
        </div>
      </div>
    </div>
  );
}
