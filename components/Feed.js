import logo from "../imgs/1200px-Instagram_logo.png";
import home from "../imgs/home.png";
import messages from "../imgs/messages.png";
import browser from "../imgs/browser.png";
import like from "../imgs/like.png";
import pc from "../imgs/pc.png";
import Images from "./Images";
import Recommended from "./Recommended";

function Feed() {
  return (
    <div className="feed-main">
      <div className="feed-container">
        <div className="fixed-nav">
          <div className="feed-nav">
            <div className="nav-left">
              <img src={logo} alt="" />
            </div>
            <div className="nav-middle">
              <input type="search" placeholder="Search" />
            </div>
            <div className="nav-right">
              <img src={home} alt="" />
              <img src={messages} alt="" />
              <img src={browser} alt="" />
              <img src={like} alt="" />
              <img src={pc} alt="" />
            </div>
          </div>
        </div>
        <div className="feed">
          <Images />
          <Recommended />
        </div>
      </div>
    </div>
  );
}

export default Feed;
