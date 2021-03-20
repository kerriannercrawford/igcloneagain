import React from "react";
import pcImg from "../imgs/pc.png";
import todd from "../imgs/todd.png";
import vincent from "../imgs/vincent.png";
import pickles from "../imgs/pickles.png";

export default class Recommended extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "princesscarolyn", user: "Princess Carolyn" };
  }
  render() {
    return (
      <div className="recommended">
        <div className="usernameImg">
          <img src={pcImg} alt="" />
          <div>
            <a href="" className="username">
              {this.state.username}
            </a>
            <br />
            Princess Carolyn
          </div>
        </div>
        <p>Suggestions for you</p>
        <div className="usernameImg">
          <img src={todd} alt="" />
          <div>
            <a href="">thetodd</a>
            <br />
            Todd
          </div>
        </div>
        <div className="usernameImg">
          <img src={pickles} alt="" />
          <div>
            <a href="" className="username">
              itspickles
            </a>
            <br />
            pickles
          </div>
        </div>
        <div className="usernameImg">
          <img src={vincent} alt="" />
          <div>
            <a href="" className="username">
              vinny
            </a>
            <br />
            vincent adultman
          </div>
        </div>
      </div>
    );
  }
}
