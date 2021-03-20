import React from "react";
import bojackImg from "../imgs/bojack.png";
import dianeImg from "../imgs/diane.png";
import mrpbImg from "../imgs/mrpb.png";
import sarahImg from "../imgs/sarahlynn.png";

import Reactions from "./Reactions";

const userArray = ["bojackhorseman", "diane", "mrpeanutbutter", "sarahlynn"];

const userObjects = {
  bojackhorseman: {
    picture: bojackImg,
  },
  diane: {
    picture: dianeImg,
  },
  mrpeanutbutter: {
    picture: mrpbImg,
  },
  sarahlynn: {
    picture: sarahImg,
  },
};

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: userArray[this.props.number1],
      userImg: userObjects[userArray[this.props.number1]].picture,
      likes: 0,
      comments: [],
      liked: false,
      bookmarked: false,
    };
  }

  render() {
    return (
      <div className="post">
        <div className="userInfo">
          <img src={this.state.userImg} alt="" />
          <a href="" className="username">
            {this.state.user}
          </a>
        </div>
        <img src={this.props.link} alt="" />
        <Reactions user={this.state.user} />
      </div>
    );
  }
}
