import React from "react";
import PaginationItem from "./PaginationItem";

export default class Pagination extends React.Component {
  render() {
    const { current, max, totalPages, onChange } = this.props;
    const pages = [];
    const pageNumber = Math.round(totalPages / max);
    for (let i = 1; i <= pageNumber; i++) {
      pages.push(
        <PaginationItem
          key={i}
          number={i}
          isCurrent={i === Number(current)}
          onChange={onChange}
        />
      );
    }
    return (
      <div>
        <span>{"<"}</span> {pages} <span>{">"}</span>
      </div>
    );
  }
}
