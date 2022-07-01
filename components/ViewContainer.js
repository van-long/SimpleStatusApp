import React from "react";
import Pagination from "./Pagination";
import PostsContainer from "./PostsContainer";

export default class ViewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.state = { currentPage: 1 };
  }

  handlePageChange(currentPage) {
    this.setState({ currentPage });
  }

  render() {
    const totalPages = this.props.posts.length;
    const maxItem = 2;
    const filterPosts = this.props.posts.slice(
      (this.state.currentPage - 1) * maxItem,
      this.state.currentPage * maxItem
    );
    return (
      <div>
        <p>Các bài đăng gần nhất</p>
        <PostsContainer posts={filterPosts} />
        <Pagination
          current={this.state.currentPage}
          max={maxItem}
          totalPages={totalPages}
          onChange={this.handlePageChange}
        />
      </div>
    );
  }
}
