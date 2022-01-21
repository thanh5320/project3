import React, { useState } from "react";
import styles from "./login.module.css";
import { Redirect, Switch, Route } from "react-router-dom";
import Home from "../home/Home";
import { useSelector, useDispatch } from "react-redux";
import { setLogin } from "../../redux/action/userAction";
import { loginAPI, getInfoByUsernameAPI } from "../../api";

export default function Login() {
  const dispatch = useDispatch();
  const { infos } = useSelector((state) => state.userReducer);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState({isErr:false, value: ""})

  const submitPress = (event) => {
    loginAPI(username, password)
    .then(res=>{
      if(res.success){
        getInfoByUsernameAPI(username).then(res1=>{
          if(res.success){
          const newInfos = { ...infos };
          newInfos.userId=res.data.id;
          newInfos.username = res.data.username;
          newInfos.token = res.data.token;
          newInfos.isLogin = true;
          newInfos.fullName = res1.data.data.fullName;
          newInfos.phone = res1.data.data.phoneNumber;
          newInfos.gender = res1.data.data.gender;
          newInfos.email = res1.data.data.email;
          dispatch(setLogin(newInfos));}
          else{
            setErr({isErr: true, value: "Tài khoản hoặc mật khẩu không đúng!"});
          }
        });
        
    
      }
      else{
        setErr({isErr: true, value: "Tài khoản hoặc mật khẩu không đúng!"});
      }
    });
    event.preventDefault();
    
  };
  if (infos.isLogin) {
    return <Redirect to="/" />;
  }
  return (
    <div className={styles.Main}>
      <div className={styles.SubMain}>
        <form onSubmit={submitPress}>
          <h3>Sign In</h3>
          {err.isErr && <p style={{color: 'red'}}>{err.value}</p>}

          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
              value={username}
              onInput={(e) => setUsername(e.target.value)}
            />
          </div>
          <br />
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onInput={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <div className={["custom-control custom-checkbox", styles.divRow]}>
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <br />
          <div class="row justify-content-center">
            <input
              type="submit"
              className="btn btn-primary btn-lg btn-block"
              value="LOGIN"
            />
          </div>
        </form>
        <div>
          <span className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </span>
          <span className={styles.SignUpLink}>
            <a href="/signup">Sign Up</a>
          </span>
        </div>
      </div>
    </div>
  );
}
