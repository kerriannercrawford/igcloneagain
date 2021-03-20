import React from "react";
import Post from "./Post";

export default class Images extends React.Component {
  constructor(props) {
    super(props);
    this.state = { feedImgs: [] };
  }

  componentDidMount() {
    const fetchImages = async () => {
      const response = await fetch(
        "https://us-central1-codesmith-curriculum-server.cloudfunctions.net/app/images"
      );
      let newImgs = await response.json();
      this.setState({
        feedImgs: newImgs,
      });
    };
    fetchImages();
  }

  render() {
    return (
      <div id="mainDIV">
        {this.state.feedImgs.length < 1 ? (
          <h2>Loading</h2>
        ) : (
          this.state.feedImgs.map((link) => {
            if (!link.includes("fakeurl")) {
              let randomNum1 = Math.floor(Math.random() * 4);
              return <Post link={link} key={link} number1={randomNum1} />;
            }
          })
        )}
      </div>
    );
  }
}
