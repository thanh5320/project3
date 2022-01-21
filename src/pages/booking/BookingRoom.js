import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Redirect
} from "react-router-dom";
import { getRoom } from "../../api";
import FooterPage from "../../component/footer/FooterPage";
import HomeHeader from "../../component/header/HomeHeader";
import Room from "./Room";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector, useDispatch } from "react-redux";
import { bookingApi } from "../../api";
import styles from "./bookingroom.module.css";

export default function BookingRoom() {
  const { infos } = useSelector((state) => state.userReducer);
  const { id } = useParams();
  const [data, setData] = useState({
    id: "",
    name: "",
    room: null,
  });

  const [success, setSuccess] = useState(false);

  const [startDate, setStartDate] = useState(new Date());

  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    getRoom(id)
      .then((res) => {
        //alert(JSON.stringify(res.data.data));
        //alert(JSON.stringify(res.data.roomrs));
        setData({ id: res.data.id, name: res.data.name, room: res.data.room });
      })
      .catch((err) => {});
  }, []);

  const fomatDate = (today) => {
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    let rs = yyyy + "/" + mm + "/" + dd + " 00:00:00";
    return rs;
  };

  const payPress = () => {
    let body = {
      user_id: infos.userId,
      room_id: id,
      start_day: fomatDate(startDate),
      end_day: fomatDate(endDate),
    };

    bookingApi(body).then((res) => {
      if (res.success) {
        setSuccess(true);
      } else {

      }
    });
  };

  if (success) {
    return <Redirect to="/account/reservation" />;
  }

  return (
    <div>
      <HomeHeader />
      <div className={styles.Main}>
        <div className={styles.header}>
        <h3 className={styles.title}>Thanh toán đơn đặt phòng</h3>
        <h4 className={styles.hotelName}>{data.name}</h4>
        <div style={{ display: "flex" }}>
          <p className={styles.text}>Ngày đến</p>
          <DatePicker
            className={styles.date}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <p className={styles.text}>Ngày đi</p>
          <DatePicker
          className={styles.date}
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          />
        </div>
        </div>

        {data.room != null && <Room room = {data.room} />}
        <center>
          <br />
          <button
            type="button"
            className="btn btn-primary btn-lg btn-block"
            style={{ backgroundColor: "#ff1493" }}
            onClick={payPress}
          >
            Thanh toán
          </button>
        </center>
      </div>

      <div>
        <FooterPage />
      </div>
    </div>
  );
}
