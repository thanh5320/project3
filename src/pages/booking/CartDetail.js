import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Redirect,
} from "react-router-dom";
import { getRoom } from "../../api";
import FooterPage from "../../component/footer/FooterPage";
import HomeHeader from "../../component/header/HomeHeader";
import Room from "./Room";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector, useDispatch } from "react-redux";
import { bookingApi, detailCart, cancelRoom , comment, detailComment} from "../../api";
import styles from "./bookingroom.module.css";
import { Input, Button } from "antd";
const { TextArea } = Input;

export default function BookingRoom() {
  const { infos } = useSelector((state) => state.userReducer);
  const { id } = useParams();
  const [data, setData] = useState({
    id: "",
    name: "",
    room: null,
  });

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [cart, setCart] = useState({
    date_start: "",
    date_end: "",
    status: null,
  });

  const [success, setSuccess] = useState(false);

  const [startDate, setStartDate] = useState(new Date());

  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    detailCart(id)
      .then((res) => {
        if (res.success) {
          setCart(res.data.data);
          //alert(JSON.stringify(res.data.data));
          getRoom(res.data.data.id_room).then((res) => {
            //alert(JSON.stringify(res.data.data));
            //alert(JSON.stringify(res.data.roomrs));
            setData({
              id: res.data.id,
              name: res.data.name,
              room: res.data.room,
            });


            const body = {
              user_id : infos.userId,
              hotel_id: res.data.id
            }
            detailComment(body).then(res=>{
              if(res.success){
                setContent(res.data.data.content);
                setTitle(res.data.data.title);
              }
            });
          });
        }
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

  const cancelPress = () => {
    cancelRoom(id).then((res) => {
      if (res.success) {
        setCart({ ...cart, status: 0 });
      }
    });
  };


  const commentPress = () => {
    const body = {
        user_id: infos.userId,
        hotel_id: data.id,
        title: title,
        content: content
    }
    comment(body).then((res) => {
      if (res.success) {
        //setCart({ ...cart, status: 0 });
        alert("ok");
      }
      else{
        alert("loi");
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
          <h3 className={styles.title}>Chi ti???t ????n ph??ng ???? ?????t</h3>
          <h4 className={styles.hotelName}>{data.name}</h4>
          <div style={{ display: "flex" }}>
            <p className={styles.text}>Ng??y ?????n: {cart.date_start}</p>
            {/* <DatePicker
              className={styles.date}
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            /> */}
            <p className={styles.text}>Ng??y ??i: {cart.date_end}</p>
            {/* <DatePicker
              className={styles.date}
              selected={endDate}
              onChange={(date) => setEndDate(date)}
            /> */}
          </div>
        </div>

        {data.room != null && <Room room={data.room} />}
        {cart.status == 1 && (
          <center>
            <br />
            <button
              type="button"
              className="btn btn-primary btn-lg btn-block"
              style={{ backgroundColor: "#ff1493" }}
              onClick={cancelPress}
            >
              H???y
            </button>
          </center>
        )}
        {cart.status == 0 && (
          <center>
            <br />
            <button
              type="button"
              className="btn btn-primary btn-lg btn-block"
              style={{ backgroundColor: "#ff1493" }}
              //onClick={payPress}
              disabled={true}
            >
              ???? h???y
            </button>
          </center>
        )}

        {cart.status == 2 && (
          <div style={{ marginLeft: 30 }}>
            <br />
            <p>
              B???n ???? tr???i nghi???m d???ch v??? c???a kh??ch s???n b???n c?? th??? ????ng g??p ??
              ki???n ????? c???i thi???n d???ch v??? c???a ch??ng t??i
            </p>
            <div style={{ display: "flex" }}>
              <p style={{ width: 100 }}>Ti??u ?????</p>
              <Input placeholder="ti??u ?????" style={{ width: 500 }} onChange={(e) => setTitle(e.target.value)} value={title}/>
              <Button style={{marginLeft: 30}} type="primary" shape="round" size={10} onClick={commentPress}>
                ????nh gi??
              </Button>
            </div>

            <div style={{ display: "flex", marginTop: 20 }}>
              <p style={{ width: 100 }}>N???i dung</p>
              <TextArea
                placeholder="N???i dung ????nh gi??"
                style={{ width: 500 }}
                rows={6}
                onChange={(e) => setContent(e.target.value)} value={content}
              />
            </div>
          </div>
        )}
      </div>

      <div>
        <FooterPage />
      </div>
    </div>
  );
}
