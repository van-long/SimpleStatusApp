import React from "react";
import FooterCategory from "./FooterCategory";

export default class PostFooter extends React.Component {
  render() {
    const { items, id, data } = this.props;
    return (
      <div>
        <FooterCategory
          key={items[0].imgUrl}
          imgUrl={items[0].imgUrl}
          id={id}
          amount={data.react}
          type="react"
          onClick={this.props.onRating}
        />
        <FooterCategory
          key={items[1].imgUrl}
          imgUrl={items[1].imgUrl}
          id={id}
          amount={data.long}
          type="long"
          onClick={this.props.onRating}
        />
        <FooterCategory
          key={items[2].imgUrl}
          imgUrl={items[2].imgUrl}
          id={id}
          amount={data.like}
          type="like"
          onClick={this.props.onRating}
        />
      </div>
    );
  }
}
