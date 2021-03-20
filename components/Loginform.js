import React, { useState } from "react";
import logo from "../imgs/1200px-Instagram_logo.png";
import backgroundimg from "../imgs/backgroundimg.png";
import googlePlay from "../imgs/googlePlay.png";
import appStore from "../imgs/appStore.png";
import fbLogo from "../imgs/fblogo.png";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (event) => {
    event.preventDefault();
    Login(details);
  };
  return (
    <div className="login-main">
      <div className="login-container">
        <div className="login-left">
          <img src={backgroundimg} alt="" />
        </div>
        <div className="login-right">
          <div className="form-box">
            <form onSubmit={submitHandler}>
              <div className="form-inner">
                <img src={logo} alt="" />
                {error !== "" ? <div className="error">{error}</div> : ""}
                <div className="form-group">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder=" Phone number, username, or email"
                    onChange={(event) =>
                      setDetails({ ...details, email: event.target.value })
                    }
                    value={details.email}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder=" Password"
                    onChange={(event) =>
                      setDetails({ ...details, password: event.target.value })
                    }
                    value={details.password}
                  />
                </div>
                <button type="submit" value="login">
                  Login In
                </button>
                <br />
                <p>---------- OR ----------</p>
                <br />
                <a href="">
                  <div class="loginWithFB">
                    <img src={fbLogo} alt="" />
                    Login with Facebook
                  </div>
                </a>
                <br />
                <a href="">Forgot password?</a>
              </div>
            </form>
          </div>
          <div className="signup-box">
            <p>
              Don't have an account? <a href="">Sign up</a>
            </p>
          </div>
          <div className="app-box">
            <span>
              Get the app <br />
              <br />
              <img src={googlePlay} alt="" />
              <img src={appStore} alt="" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
