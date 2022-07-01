import React from "react";

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleForm = this.handleForm.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.state = {
      content: "",
      username: ""
    };
  }

  handleForm(event) {
    this.props.onCreate({ ...this.state, time: new Date() });
    event.preventDefault();
  }
  handleContentChange(event) {
    this.setState({ content: event.target.value });
  }
  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }
  render() {
    return (
      <form onSubmit={this.handleForm}>
        <div>
          <textarea
            value={this.state.content}
            onChange={this.handleContentChange}
            placeholder="Nội dung của bạn..."
          ></textarea>
        </div>
        <div>
          <input
            value={this.state.username}
            onChange={this.handleUsernameChange}
            placeholder="Họ tên của bạn"
            aria-required="true"
          />
          <button>Gửi</button>
        </div>
      </form>
    );
  }
}
