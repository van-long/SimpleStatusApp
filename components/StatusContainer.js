import React from "react";
import PostForm from "./PostForm";
import ViewContainer from "./ViewContainer";

export default class StatusContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handlePostChange = this.handlePostChange.bind(this);
    this.handleRating = this.handleRating.bind(this);

    this.state = {
      posts: [
        {
          id: 1,
          username: "Nguyen Van Long",
          time: new Date(Date.now() - 86400000 * 1),
          content:
            "At the end of this step, you’ll have a library of reusable components that render your data model. The components will only have render() methods since this is a static version of your app. The component at the top of the hierarchy (FilterableProductTable) will take your data model as a prop. If you make a change to your underlying data model and call root.render() again, the UI will be updated. You can see how your UI is updated and where to make changes. React’s one-way data flow (also called one-way binding) keeps everything modular and fast.",
          foot: {
            react: 10,
            long: 15,
            like: 30
          }
        },
        {
          id: 2,
          username: "Vo Thi Kim Nguyet",
          time: new Date(Date.now() - 86400000 * 2),
          content:
            "There are two types of “model” data in React: props and state. It’s important to understand the distinction between the two; skim the official React docs if you aren’t sure what the difference is. See also FAQ: What is the difference between state and props?",
          foot: {
            react: 10,
            long: 15,
            like: 30
          }
        },
        {
          id: 3,
          username: "Ho Nguyen Nguyen Nhi",
          time: new Date(Date.now() - 86400000 * 3),
          content:
            "The original list of products is passed in as props, so that’s not state. The search text and the checkbox seem to be state since they change over time and can’t be computed from anything. And finally, the filtered list of products isn’t state because it can be computed by combining the original list of products with the search text and value of the checkbox.",
          foot: {
            react: 10,
            long: 15,
            like: 30
          }
        },
        {
          id: 4,
          username: "Haraika",
          time: new Date(Date.now() - 86400000 * 4),
          content:
            "Remember: React is all about one-way data flow down the component hierarchy. It may not be immediately clear which component should own what state. This is often the most challenging part for newcomers to understand, so follow these steps to figure it out:",
          foot: {
            react: 10,
            long: 15,
            like: 30
          }
        },
        {
          id: 5,
          username: "Nguyen Van Long",
          time: new Date(Date.now() - 86400000 * 5),
          content: "Vui qua di.",
          foot: {
            react: 10,
            long: 15,
            like: 30
          }
        },
        {
          id: 6,
          username: "Nguyen Van Long",
          time: new Date(Date.now() - 86400000 * 6),
          content: "buon qua.",
          foot: {
            react: 10,
            long: 15,
            like: 30
          }
        },
        {
          id: 7,
          username: "Nguyen Van Long",
          time: new Date(Date.now() - 86400000 * 7),
          content: "hihi.",
          foot: {
            react: 10,
            long: 15,
            like: 30
          }
        }
      ]
    };
  }

  handlePostChange(post) {
    post.id =
      this.state.posts.reduce((prev, i) => {
        if (i.id > prev) return i.id;
        return prev;
      }) + 1;
    post.foot = {};
    this.setState({ posts: [...this.state.posts, post] });
  }

  handleRating({ id, type }) {
    const post = this.state.posts.find((i) => i.id === id);
    const cPost = { ...post };
    if (!cPost.foot[type]) cPost.foot[type] = 0;
    cPost.foot[type]++;
    this.setState({ ...this.state.posts, cPost });
  }
  render() {
    return (
      <div>
        <PostForm onCreate={this.handlePostChange} />
        <ViewContainer posts={this.state.posts} onRating={this.handleRating} />
      </div>
    );
  }
}
