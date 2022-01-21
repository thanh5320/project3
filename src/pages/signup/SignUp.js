import React, {useEffect, useState } from "react";
import { signupAPI } from "../../api";
import styles from "./signup.module.css";
import { Redirect, Switch, Route } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [err, setErr] = useState({isErr:false, value: ""});

  const submitPress = (event) => {
    signupAPI(username , email, password)
    .then(res=>{
      if(res.success){
        setSuccess(true);
      }
      else{
        setErr({isErr: true, value: "Có lỗi xảy ra vui lòng thử  lại!"});
      }
    });
    event.preventDefault();
    
  };
  if (success) {
    return <Redirect to="/login" />;
  }
  return (
    <div className={styles.Main}>
      <div className={styles.SubMain}>
        <form onSubmit={submitPress}>
          <h3>Sign Up</h3>
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
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onInput={(e) => setEmail(e.target.value)}
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
          <br />
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter confirm password"
            />
          </div>

          <div className="form-group">
            <div
              className={["custom-control custom-checkbox", styles.divRow]}
            >
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
              accept the terms
              </label>
            </div>
          </div>
          <br />
          <div class="row justify-content-center">
            <input
              type="submit"
              className="btn btn-primary btn-lg btn-block"
              value="SIGN UP"
            />
          </div>
        </form>
        <div>
          <span className={styles.SignUpLink}>
            <a href="/login">Login</a>
          </span>
        </div>
      </div>
    </div>
  );
}
