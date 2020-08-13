import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { DatePicker, Button, Space } from "antd";
import moment from "moment";

export default class APP extends Component {
  render() {
    return (
      <div className="App">
        <Space direction="vertical">
          <DatePicker defaultValue={moment("2015-01-01", "YYYY-MM-DD")} />
          <DatePicker picker="week" />
        </Space>
        <Button>Default Button</Button>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
