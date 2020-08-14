import React, { Component } from "react";
import { Pagination } from "antd";
// import "./Pager.scss";
import { connect } from "react-redux";
import { injectAsyncReducer } from "@/store/dynamicLoadReducers.js";
import reducer from "./reducer.js";
import store from "@/store";
injectAsyncReducer(store, "pagerReducer", reducer);
class Pager extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    // this.props.dispatch({ type: "SET_PAGER_FIELDS", data: this.props.fields });
    // this.props.dispatch({ type: "SET_PAGER_URL", data: this.props.url });
    // actions.getPagerDataList({ name: 456 });
  }
  render() {
    let { pageSize = 10, total = 0, current = 1 } = this.props.pagerReducer;
    return (
      <Pagination
        className="my-pager"
        pageSize={pageSize}
        total={total}
        current={current}
        showQuickJumper
        showSizeChanger
        showTotal={(total) => `共计 ${total} 条`}
        onChange={this.onChange}
        onShowSizeChange={this.onShowSizeChange}
      />
    );
  }
  onShowSizeChange = (current, size) => {
    this.props.dispatch({type:'CURRENTURL',url:'www.baidu.com'});
    console.log(current, size);
  };
  onChange = (page, pageSize) => {
    console.log(page, pageSize);
  };
  getList = () => {
    // let {
    //   current = 1,
    //   pageSize = 10,
    //   total = 0,
    //   fields = {},
    //   list = [],
    //   url = "",
    // } = this.props.pagerReducer;
  };
}

const mapStateToProps = (state) => {
  return { pagerReducer: state.pagerReducer };
};

export default connect(mapStateToProps)(Pager);
