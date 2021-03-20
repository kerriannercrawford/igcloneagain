import React from "react";
import Comments from "./Comments";
import quotes from "./Array";

import like from "../imgs/like.png";
import likeClicked from "../imgs/likeClicked.png";
import message from "../imgs/messages.png";
import bookmarkUnclicked from "../imgs/bookmarkUnclicked.png";
import bookmarkClicked from "../imgs/bookmarkClicked.png";

let randomNum = Math.floor(Math.random() * quotes.length);

export default class Reactions extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      liked: false,
      bookmarked: false,
      randomNum: Math.floor(Math.random() * quotes.length),
    };
    this.clickLike = this.clickLike.bind(this);
    this.clickBookmark = this.clickBookmark.bind(this);
  }

  clickLike() {
    if (!this.liked) {
      this.setState({
        likes: 1,
        liked: true,
      });
    } else {
      this.setState({
        liked: false,
      });
    }
  }

  clickBookmark() {
    if (!this.bookmarked) {
      this.setState({ bookmarked: true });
    } else {
      this.setState({ bookmarked: false });
    }
  }

  render() {
    return (
      <div className="stats">
        <div className="reactions">
          <div className="reactions-left">
            {this.state.liked ? (
              <img src={likeClicked} alt="" onClick={this.clickLike} />
            ) : (
              <img src={like} alt="" onClick={this.clickLike} />
            )}
            <img src={message} alt="" />
          </div>
          <div className="reactions-right">
            {this.state.bookmarked ? (
              <img src={bookmarkClicked} alt="" onClick={this.clickBookmark} />
            ) : (
              <img
                src={bookmarkUnclicked}
                alt=""
                onClick={this.clickBookmark}
              />
            )}
          </div>
        </div>
        <div className="reaction-content">
          <p>{this.state.likes} likes</p>
          <a href="" className="username">
            {this.props.user}
          </a>
          {quotes[this.state.randomNum]}
        </div>

        <Comments />
      </div>
    );
  }
}
