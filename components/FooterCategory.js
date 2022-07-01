import React from "react";

export default class FooterCategory extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.onClick({ id: this.props.id, type: this.props.type });
  }
  render() {
    const { imgUrl, amount } = this.props;
    return (
      <button onClick={this.handleClick}>
        <img style={styles.img} src={imgUrl} alt={"chua co"} />
        <span>{amount}</span>
      </button>
    );
  }
}

const styles = {
  img: { width: 20, height: 20 }
};
