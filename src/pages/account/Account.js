import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLogin } from "../../redux/action/userAction";
import { Redirect, Switch, Route } from "react-router-dom";
import HomeHeader from "../../component/header/HomeHeader";
import styles from "./account.module.css";
import avatar from "../../public/image/avatar.jpg";
import FooterPage from "../../component/footer/FooterPage";

export default function Account() {
  const dispatch = useDispatch();
  const { infos } = useSelector((state) => state.userReducer);
  const logoutPress = () => {
    const newInfos = {
      username: undefined,
      token: undefined,
      image: undefined,
      isLogin: false,
      userId: undefined,
      fullName: undefined,
      email: undefined,
      phone: undefined,
      gender: undefined,
    };
    dispatch(setLogin(newInfos));
  };

  const [tab, setTab] = useState(true);
  const [email, setEmail] = useState(infos.email);
  const [fullName, setFullName] = useState(infos.fullName);
  const [username, setUsername] = useState(infos.username);
  const [phone, setPhone] = useState(infos.phone);

  const tabPress = () => {
    setTab(false);
  };

  if (!infos.isLogin) {
    return <Redirect to="/login" />;
  }

  if (!tab) {
    return <Redirect to="/account/reservation" />;
  }

  return (
    <div>
      <div className={styles.Main}>
        <HomeHeader />
        <h3 className={styles.title}>Quản lý tài khoản</h3>
        <div className={styles.subMain}>
        <div style={{ display: "flex" }}>
          <div className={styles.MainLeft}>
            <p className={styles.subTitle}>Tài khoản</p>
          </div>
          <div className={styles.MainRight} onClick={tabPress}>
            <p className={styles.subTab}>Đơn đặt phòng</p>
          </div>
        </div>
        <br />
        <br />
        <div style={{ display: "flex" }}>
          <div className={styles.div1}>
          <center>
            <img
              className={styles.avatar}
              src={avatar}
              width="300"
              height="300"
            />
            <br />
            
              <br />
            <button
              type="button"
              className="btn btn-primary btn-lg btn-block"
              style={{ backgroundColor: "#ff1493" }}
              // onClick={logoutPress}
            >
              Chọn ảnh
            </button>
            </center>
          </div>

          <div className={styles.div2}>
            <form>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">UserName</label>
                <div className="col-sm-8">
                  <input
                    className="form-control"
                    disabled
                    type="text"
                    value={username}
                  />
                </div>
              </div>
              <br />

              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Email</label>
                <div className="col-sm-8">
                  <input
                    className="form-control"
                    type="email"
                    value={email}
                    onInput={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <br />

              <div className="form-group row">
                <label className="col-sm-4 col-form-label">FullName</label>
                <div className="col-sm-8">
                  <input
                    className="form-control"
                    type="text"
                    value={fullName}
                    onInput={(e) => setFullName(e.target.value)}
                  />
                </div>
              </div>
              <br />

              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Phone</label>
                <div className="col-sm-8">
                  <input
                    className="form-control"
                    type="text"
                    value={phone}
                    onInput={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
            </form>
            <br />

            <center>
              <br />
              <br />
            <button
              type="button"
              className="btn btn-primary btn-lg btn-block"
              // onClick={payPress}
            >
              Cập nhật thông tin cá nhân
            </button>
            </center>
            
          </div>
        </div>

        <center>
        <button
          type="button"
          className="btn btn-primary btn-lg btn-block"
          style={{ marginTop: 20, backgroundColor: 'red' }}
          onClick={logoutPress}
        >
          Đăng xuất
        </button>
        </center>
        
        </div>
        
      </div>

      <div>
        <FooterPage />
      </div>
    </div>
  );
}
