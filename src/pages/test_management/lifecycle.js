import React, { Component } from "react";
import { connect } from "react-redux";
import Pager from "@/components/Pager/Pager.js";

class Lifecycle extends Component {
  render() {
    return (
      <div>
        <Pager />
        <Life name="d" title="sd" />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Lifecycle);

class Life extends Component {
  // 生命周期介绍
  // 1、初始化数据
  // 2、componentWillMount 只执行一次
  // 3、render
  // 4、componentDidMount

  // 更新
  // 5、componentWillReceiveProps(nextProps)
  // 6、shouldComponentUpdate(nextProps, nextState)
  // 7、componentWillUpdata(nextProps, nextState)
  // 8、render()
  // 9、componentDidUpdate()

  // 卸载
  // 11、componentWillUnmount()

  render() {
    return (
      <div>
        <p>react生命周期</p>
      </div>
    );
  }
}
