import React, { useState, useEffect } from "react";
import HotelRoom from "./HotelRoom";
import styles from "./hotelrooms.module.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

export default function HotelRooms({ rooms }) {
  const listRoom = rooms.map((data) => (
    <div>
      <Link className={styles.link} to={"/booking/" + data.id}>
        <HotelRoom room={data} />
      </Link>
    </div>
  ));

  return (
    <div className={styles.Main}>
      <h4 style={{ marginLeft: "4%", marginTop: "10%", color: "#1e90ff" }}>
        Chọn Phòng
      </h4>
      <div>{listRoom}</div>
    </div>
  );
}
