import React from "react";
import PostContent from "./PostContent";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

export default class PostContainer extends React.Component {
  render() {
    const { id, username, time, content, foot } = this.props.post;

    return (
      <div>
        <PostHeader username={username} time={time} />
        <PostContent content={content} />
        <PostFooter
          items={items}
          id={id}
          data={foot}
          onRating={this.props.onRating}
        />
      </div>
    );
  }
}

const items = [
  {
    imgUrl:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
  },
  {
    imgUrl:
      "https://yt3.ggpht.com/rdo-X0PBHs7DL-CNihr98FvG9YkRcEpLF8kb2Bj-8qYeCZsIZ4XhmtYlpiit5laGLFFDwZbE=s108-c-k-c0x00ffffff-no-rj"
  },
  {
    imgUrl:
      "https://www.pngitem.com/pimgs/m/115-1158683_thumb-tack-clipart-blue-blue-facebook-like-icon.png"
  }
];
