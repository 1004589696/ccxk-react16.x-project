import React, { Component } from "react";

export default class Lifecycle extends Component {
  render() {
    return (
      <div>
        <Life name="d" title="sd" />
      </div>
    );
  }
}

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
    console.log(this.props);
    console.log(this.state);
    return (
      <div>
        <p>react生命周期</p>
      </div>
    );
  }
}
