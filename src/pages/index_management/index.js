import React, { Component } from "react";
import { connect } from "react-redux";

import { injectAsyncReducer } from "@/store/dynamicLoadReducers.js";
import dynamicReducer from "./reducer.js";
import store from "@/store";
import { Table } from "antd";
import Pager from "@/components/Pager/Pager.js";
injectAsyncReducer(store, "dynamicReducer", dynamicReducer);

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
      },
      {
        title: "Chinese Score",
        dataIndex: "chinese",
        sorter: {
          compare: (a, b) => a.chinese - b.chinese,
          multiple: 3,
        },
      },
      {
        title: "Math Score",
        dataIndex: "math",
        sorter: {
          compare: (a, b) => a.math - b.math,
          multiple: 2,
        },
      },
      {
        title: "English Score",
        dataIndex: "english",
        sorter: {
          compare: (a, b) => a.english - b.english,
          multiple: 1,
        },
      },
    ];
    const data = [
      {
        key: "1",
        name: "John Brown",
        chinese: 98,
        math: 60,
        english: 70,
      },
      {
        key: "2",
        name: "Jim Green",
        chinese: 98,
        math: 66,
        english: 89,
      },
      {
        key: "3",
        name: "Joe Black",
        chinese: 98,
        math: 90,
        english: 70,
      },
      {
        key: "4",
        name: "Jim Red",
        chinese: 88,
        math: 99,
        english: 89,
      },
    ];

    return (
      <div>
        首页
        <Pager />
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Index);