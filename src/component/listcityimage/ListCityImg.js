import React from "react";
import styles from "./listcityimg.module.css";
import Img from "./Img";

export default function ListCityImg() {
  return (
    <div>
      <div className={styles.Main}>
        <div className={styles.div}>
          <Img img="https://tripi.vn/cdn-cgi/image/width=640,height=640/https://storage.googleapis.com/tripi-assets/mytour/images/locations/hanoi.png" city="Hà Nội"></Img>
        </div>

        <div className={styles.div}>
          <Img img="https://tripi.vn/cdn-cgi/image/width=640,height=640/https://storage.googleapis.com/tripi-assets/mytour/images/locations/danang.png" city="Hồ Chí Minh"></Img>
        </div>

        <div className={styles.div}>
          <Img img="https://tripi.vn/cdn-cgi/image/width=640,height=640/https://storage.googleapis.com/tripi-assets/mytour/images/locations/hochiminh.png" city="Đà Nẵng"></Img>
        </div>
      </div>

      <div className={styles.Main}>
        <div className={styles.div}>
          <Img img="https://tripi.vn/cdn-cgi/image/width=640,height=640/https://storage.googleapis.com/tripi-assets/mytour/images/locations/sa-pa.png" city="Sapa"></Img>
        </div>

        <div className={styles.div}>
          <Img img="https://tripi.vn/cdn-cgi/image/width=640,height=640/https://storage.googleapis.com/tripi-assets/mytour/images/locations/hue.png" city="Thừa Thiên Huế"></Img>
        </div>

        <div className={styles.div}>
          <Img img="https://tripi.vn/cdn-cgi/image/width=640,height=640/https://storage.googleapis.com/tripi-assets/mytour/images/locations/da-lat.png" city="Đà Lạt"></Img>
        </div>
      </div>
    </div>
  );
}
