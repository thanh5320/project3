import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLogin } from "../../redux/action/userAction";
import { Redirect, Switch, Route, Link } from "react-router-dom";
import HomeHeader from "../../component/header/HomeHeader";
import styles from "./reservation.module.css";
import { getListRoom } from "../../api";
import FooterPage from "../../component/footer/FooterPage";
import { Button, Radio } from 'antd';

export default function Reservation() {
  const dispatch = useDispatch();
  const { infos } = useSelector((state) => state.userReducer);
  const [tab, setTab] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    getListRoom(infos.userId)
      .then((res) => {
        setData(res.data.data.reverse());
      })
      .catch((err) => {});
  }, []);

  const tabPress = () => {
    setTab(false);
  };

  let i = 1;

  const listRoom = data.map((room) => (
    <tr>
      <td>{i++}</td>
      <td>{room.roomName}</td>
      <td>{room.startDay}</td>
      <td>{room.endDay}</td>
      <td>Đã thanh toán</td>
      <td><Link className={styles.link} to={"/cart/detail/" + room.id}><Button type="primary" shape="round" size={10}>
          Xem chi tiết
        </Button></Link></td>
    </tr>
  ));

  if (!tab) {
    return <Redirect to="/account/info" />;
  }

  return (
    <div>
      <div className={styles.Main}>
        <HomeHeader />
        <h3 className={styles.title}>Quản lý tài khoản</h3>
        <div style={{ display: "flex" }}>
          <div className={styles.MainLeft} onClick={tabPress}>
            <p className={styles.subTab}>Tài khoản</p>
          </div>
          <div className={styles.MainRight}>
            <p className={styles.subTitle}>Đơn đặt phòng</p>
          </div>
        </div>

        <div>
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Tên Phòng</th>
                <th scope="col">Ngày đến</th>
                <th scope="col">Ngày đi</th>
                <th scope="col">Tình trạng</th>
                <th scope="col">Chi tiết</th>
              </tr>
            </thead>
            <tbody>{listRoom}</tbody>
          </table>
        </div>
      </div>

      <div>
        <FooterPage />
      </div>
    </div>
  );
}
