import React, { useState, useEffect } from "react";
import styles from "./hotelinfo.module.css";
import Rate from "./Rate";

export default function HotelInfo({ name, city, address, reviewScore }) {
  return (
    <div>
      <div>
        <br />
        <div className={styles.NameCity}>
          <h3 className={styles.Name}>{name}</h3>
          <h3 className={styles.City}>{city}</h3>
        </div>

        <p>{address}</p>

        <h4>Đánh giá tổng thể</h4>
      </div>
      <div className={styles.MainRate}>
        
        <div className={styles.RateLeft}>
          <span>{reviewScore.score + "  "}</span>
          <i
            className="fa fa-star"
            style={{ color: "gold" }}
            aria-hidden="true"
          ></i>
          <div>
            <p>{reviewScore.count} đánh giá</p>
          </div>
        </div>

        <div className={styles.RateRight}>
          <div className={styles.RateRight1}>
            <p>
              <span>Độ sạch sẽ:</span>
            </p>
            <p>
              <span>Vị trí:</span>
            </p>
            <p>
              <span>Dịch vụ:</span>
            </p>
            <p>
              <span>Tiện nghi:</span>
            </p>
            <p>
              <span>Đáng giá tiền:</span>
            </p>
          </div>

          <div className={styles.Rate}>
            <Rate reviewScore={reviewScore} className={styles.RateRight2}/>
          </div>

          <div className={styles.RateRight3}>
            <p>
              <span>{reviewScore.clean}/10</span>
            </p>
            <p>
              <span>{reviewScore.location}/10</span>
            </p>
            <p>
              <span>{reviewScore.service}/10</span>
            </p>
            <p>
              <span>{reviewScore.convenient}/10</span>
            </p>
            <p>
              <span>{reviewScore.worthTheMoney}/10</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
