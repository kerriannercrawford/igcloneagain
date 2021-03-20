import React from "react";

export default class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      value: "",
      username: "princesscarolyn",
    };
    this.sendComment = this.sendComment.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  sendComment(event) {
    event.preventDefault();
    const tempArray = this.state.comments;
    tempArray.push(this.state.value);
    this.setState({ comments: tempArray });
    console.log(this.state.comments);
    document.forms["form"].reset();
  }

  render() {
    return (
      <div>
        {this.state.comments.length < 1 ? (
          <div></div>
        ) : (
          this.state.comments.map((elem) => {
            return (
              <div className="comment-added">
                <a href="" className="username">
                  {this.state.username}
                </a>{" "}
                {elem}
              </div>
            );
          })
        )}
        <div className="addComment">
          <form id="form" onSubmit={this.sendComment}>
            <input
              type="text"
              placeholder="Add a comment .... "
              value={this.state.value}
              onChange={this.handleChange}
            />
            <button type="submit">Post</button>
          </form>
        </div>
      </div>
    );
  }
}
