import React from "react";
import styles from "./hfooter.module.css";

export default function HFooter() {
  return (
    <div className={styles.footerMain}>
      <h2 className={[styles.ulli]}>TPBOOKING</h2>
      <div className={styles.ulli}>
        <h3>Services</h3>
        <ul>
          <li>
            <a href="#">Web design</a>
          </li>
          <li>
            <a href="#">Development</a>
          </li>
          <li>
            <a href="#">Hosting</a>
          </li>
        </ul>
      </div>

      <div className={styles.ulli}>
        <h3>About</h3>
        <ul>
          <li>
            <a href="#">Company</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
          <li>
            <a href="#">Legacy</a>
          </li>
        </ul>
      </div>

      <div>
        <h3 className={styles.ulli}>Careers</h3>
        <ul>
          <li>
            <a href="#">Job openings</a>
          </li>
          <li>
            <a href="#">Employee success</a>
          </li>
          <li>
            <a href="#">Benefits</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
