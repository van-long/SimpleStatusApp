import React from "react";
import PostContainer from "./PostContainer";

export default class PostsContainer extends React.Component {
  render() {
    return (
      <div>
        {this.props.posts.map((p) => (
          <PostContainer key={p.id} post={p} onRating={this.props.onRating} />
        ))}
      </div>
    );
  }
}
