import React from "react";

export default class PaginationItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    this.props.onChange(event.target.value);
  }
  render() {
    const style = this.props.isCurrent
      ? { backgroundColor: "blue", color: "white" }
      : {};
    return (
      <input
        type="button"
        style={style}
        onClick={this.handleClick}
        value={this.props.number}
      />
    );
  }
}
