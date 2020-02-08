import React, { Component } from "react";
import axios from "axios";
import Pusher from "pusher-js";
import ChatList from "./chatlist";
import ChatBox from "./chatbox";
import { BE_URL, token } from "../../config/constants";
import "./pusher.css";

export class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      username: "",
      chats: []
    };
  }

  componentDidMount() {
    const username = window.prompt("Username: ", "Anonymous");
    this.setState({ username });
    const pusher = new Pusher("APP_ID", {
      cluster: "us2",
      encrypted: true
    });
    const channel = pusher.subscribe("chat");
    channel.bind("message", data => {
      this.setState({ chats: [...this.state.chats, data], test: "" });
    });
    this.handleTextChange = this.handleTextChange.bind(this);
  }
  handleTextChange(e) {
    if (e.keyCode === 13) {
      const payload = {
        username: this.state.username,
        message: this.state.text
      };

      axios({
        method: "post",
        url: BE_URL + "api/adv/say/",
        headers: { Authorization: "Token " + token },
        data: { payload }
      });
    } else {
      this.setState({ text: e.target.value });
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React-Pusher Chat</h1>
        </header>
        <section>
          <ChatList chats={this.state.chats} />
          <ChatBox
            text={this.state.text}
            username={this.state.username}
            handleTextChange={this.handleTextChange}
          />
        </section>
      </div>
    );
  }
}

export default Chat;
