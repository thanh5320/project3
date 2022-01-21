import React, { useState, useEffect } from "react";
import styles from "./HotelRoom.module.css";

export default function HotelRoom({ room }) {
  const listUtils = room.utils.map((data) => <li>{data}</li>);

  const listBenefit = room.benefit.map((data) => <li>{data}</li>);

  return (
    <div className={styles.Root}>
      <h5 className={styles.name}>{room.name}</h5>
      <div className={styles.main}>
        <div style={{ backgroundColor: "#add8e6", width: '25%'}}>
          <p className={styles.title}>Loại phòng</p>
          <img src={"http://" + room.imgs[0]}></img>
          <ul>{listUtils}</ul>
        </div>
        <div style={{ backgroundColor: "#ffdab9", width: '45%' }}>
          <p className={styles.title}>Giá này đã gồm</p>
          <ul>{listBenefit}</ul>
        </div>
        <div style={{ backgroundColor: "#f0fff0",width: '15%' }}>
          <p className={styles.title}>Sức chứa</p>
          <ul>
            <li>Người lớn: {room.adults}</li>
            <li>Trẻ em: {room.children}</li>
          </ul>
        </div>
        <div style={{ backgroundColor: "#fff5ee",width: '15%' }}>
          <p className={styles.title}>Giá</p>
          <ul>
            <li>{room.cost} Đ</li>
          </ul>
        </div>
      </div>

      <center>
        <br />
        <button
          type="button"
          className="btn btn-primary btn-lg btn-block"
          style={{ backgroundColor: "#ff1493" }}
        >
          Đặt Phòng
        </button>
      </center>
    </div>
  );
}
