import React from "react";

export default class PostContent extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.content}</p>
      </div>
    );
  }
}
