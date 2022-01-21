import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import { getHotel, listComment } from "../../api";
import HotelImage from "./HotelImage";
import HotelInfo from "./HotelInfo";
import HotelRooms from "./HotelRooms";
import HomeHeader from "../../component/header/HomeHeader";
import styles from "./hotel.module.css";
import FooterPage from "../../component/footer/FooterPage";
import Description from "./Description";
import avatar from "../../public/image/avatar.jpg";

export default function Hotel() {
  const { id } = useParams();
  const [data, setData] = useState({
    name: "",
    imgs: [],
    city: "",
    address: "",
    reviewScore: {},
    rooms: [],
    description: "",
    nears: [],
    services: [],
  });

  const [comments, setComments] = useState([]);

  useEffect(() => {
    getHotel(id)
      .then((res) => {
        setData({
          name: res.data.data.name,
          imgs: res.data.data.imgs,
          city: res.data.data.city,
          address: res.data.data.address,
          reviewScore: res.data.data.reviewScore,
          rooms: res.data.data.rooms,
          description: res.data.data.description,
          nears: res.data.data.nears,
          services: res.data.data.services,
        });
      })
      .catch((err) => {});

    listComment(id).then((res) => {
      if (res.success) setComments(res.data.data);
    });
  }, []);

  return (
    <div>
      <div className={styles.Main}>
        <HomeHeader />
        <HotelImage imgs={data.imgs} />
        <HotelInfo
          name={data.name}
          address={data.address}
          city={data.city}
          reviewScore={data.reviewScore}
        />

        <HotelRooms rooms={data.rooms} />

        <Description text={data.description} src={data.imgs[0]}></Description>

        <div style={{ backgroundColor: "#ffffe0", padding: 30 }}>
          <h3 style={{ color: "#4b0082" }}>Địa điểm gần đây</h3>
          <ul style={{ display: "flex", flexWrap: "wrap" }}>
            {data.nears.map((item) => {
              return (
                <div style={{ margin: 10, width: "30%" }}>
                  <li style={{ color: "#00ced1" }}>{item.name}</li>
                  <p style={{ color: "rgb(50,50,50)" }}>{item.distance}m</p>
                </div>
              );
            })}
          </ul>
        </div>

        <div style={{ backgroundColor: "#ffffe0", padding: 30 }}>
          <h3 style={{ color: "#4b0082" }}>Dịch vụ</h3>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {data.services.map((item) => {
              return (
                <div style={{ margin: 10, width: "30%" }}>
                  <p style={{ color: "#00ced1" }}>{item.name}</p>
                  <ul>
                    {item.service.map((citem) => {
                      return <li>{citem}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        <div style={{ padding: 30 }}>
          <h3 style={{ color: "#4b0082" }}>Đánh giá</h3>

          {comments.map((item) => {
            return (
              <div>
                <hr  width="100%" size="5px" align="center" />
              <div style={{display: 'flex'}}>
                
                <div style={{marginRight: 150}}>
                  <img
                    style={{ borderRadius: 50 }}
                    src={avatar}
                    width="50"
                    height="50"
                  />
                  <b style={{marginLeft: 10}}>{item.user.userName}</b>
                </div>

                <div>
                  <p style={{fontSize: 15, fontWeight: 900}}>{item.title}</p>
                  <p>{item.content}</p>
                </div>
              </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <FooterPage />
      </div>
    </div>
  );
}
