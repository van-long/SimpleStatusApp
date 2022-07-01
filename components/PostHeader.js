import React from "react";

export default class PostHeader extends React.Component {
  render() {
    const { username, time } = this.props;
    return (
      <div>
        <span>{username}</span>
        <span> vào lúc </span>
        <span>
          {time.toLocaleTimeString("vi-Vn") +
            ", ngày " +
            time.toLocaleDateString("vi-Vn")}
        </span>
      </div>
    );
  }
}
