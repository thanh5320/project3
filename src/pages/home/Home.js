import React, { Component, useEffect, useState } from "react";
import styles from "./home.module.css";
import HotelHome from "./HotelHome";
import HFooter from "../../component/footer/HFooter";
import { getHomeHotel, search,  search1 } from "../../api";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Hotel from "../hotel/Hotel";
import HomeHeader from "../../component/header/HomeHeader";
import FooterPage from "../../component/footer/FooterPage";
import ListCity from "../../component/listcity/ListCity";
import ListCityImg from "../../component/listcityimage/ListCityImg";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBNavbarLink,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Input,Space } from "antd";

import { Select } from 'antd';

const { Option } = Select;
const { Search } = Input;
export default function Home() {
  const [data, setData] = useState([]);
  const [area, setArea] = useState("");
  const [service, setService] = useState("");

  useEffect(() => {
    getHomeHotel()
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {});
  }, []);

  const handleChangeArea =  (value) =>{
    //alert(JSON.stringify(value));
    setArea(value);
  }

  const handleChangeService = (value) =>{
    setService(value);
  }

  const searchPress = () =>{
    //alert(JSON.stringify(area));
    search1(0, area, service)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {});
    //event.preventDefault();
  }

  // handleSubmit(event) {
  //   search(0, this.state.search)
  //     .then((res) => {
  //       this.setState({ data: res.data.data });
  //     })
  //     .catch((err) => {});
  //   event.preventDefault();
  // }

    const listHotels = data.map((data) => (
      <div>
        <Link className={styles.link} to={"/hotel/" + data.id}>
          <HotelHome key={data.link} value={data} />
        </Link>
      </div>
    ));
    return (
      <Switch>
        <div className={styles.main}>
          {/* <div className={styles.mainHearder}>
            <form className={styles.form} onSubmit={this.handleSubmit}>
              <label>
                <input
                className={styles.inputSearch}
                  type="text"
                  value={this.state.search}
                  onChange={this.handleChange}
                />
              </label>
              <input className={styles.btnSearch} type="submit" value="Tìm Kiếm" placeholder="Bạn đang tìm kiếm gì?" />
            </form>
          </div> */}

          <header>
            <HomeHeader />
            <div
              id="intro-example"
              className="p-5 text-center bg-image"
              style={{
                backgroundImage:
                  "url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp')",
              }}
            >
              <div
                className="mask"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
              >
                <div className="d-flex justify-content-center align-items-center h-100">
                  <div className="text-white">
                    <h1 className="mb-3" style={{color: 'white'}}>TP BOOKING</h1>
                    <h5 className="mb-4" style={{color: 'white'}}>
                      Khách sạn hàng đầu Việt Nam, yên tâm về giá!
                    </h5>
                  </div>
                </div>
                {/* <form className={styles.form} onSubmit={this.handleSubmit}>
                <label>
                  <input
                  className={styles.inputSearch}
                    type="text"
                    value={this.state.search}
                    onChange={this.handleChange}
                  />
                </label>
                <input className={styles.btnSearch} type="submit" value="Tìm Kiếm" placeholder="Bạn đang tìm kiếm gì?" />
              </form> */}
              <div style={{display: 'flex', margin : 20}}>
              <Input placeholder="Tên, Thành phố, Địa điểm" size="large" onChange={(e) => setArea(e.target.value)} value={area}  />
                <Search
                  placeholder="Dịch vụ"
                  allowClear
                  enterButton="Search"
                  size="large"
                  onChange={(e) => setService(e.target.value)}
                  onSearch={searchPress}
                /></div>
              
              </div>
            </div>
          </header>

          <h1 style={{color: '#1e90ff', marginTop: 20, marginLeft: 30}}>Điểm đến được ưu thích</h1>

                

          <ListCityImg />
          <div className={styles.mainHotel}>
            <h1 style={{color: '#1e90ff', marginTop: 20}}>Khách sạn hàng đầu</h1>
            <div className={styles.contentHotel}>{listHotels}</div>
          </div>
          <div>
            <ListCity />
          </div>
          <div>
            <FooterPage />
          </div>
        </div>
        <Route
          exact
          path="/hotel/:id"
          render={(props) => <Hotel text="abc" {...props} />}
        />
      </Switch>
    );
}
