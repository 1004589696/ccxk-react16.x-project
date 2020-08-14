import React, { Component } from "react";
import { Avatar, Button, Menu } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import "./index.scss";
const { SubMenu } = Menu;

class LayoutIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
  }
  render() {
    return (
      <div>
        <div className="layout-header">
          <div className="layout-header-logo">
            <img src={require("../../assets/images/logo.png")} alt="图片" />
          </div>
          <div className="layout-header-right">
            <Avatar src={require("../../assets/images/logo.png")} />
            <Button type="link" style={{ padding: "0 5px", color: "#333" }}>
              管理员
            </Button>
            <Button type="link">退出</Button>
          </div>
        </div>
        <div className="layout-asider">
          <Menu mode="inline">
            <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Submenu">
              <Menu.Item key="1">Option 1</Menu.Item>
              <Menu.Item key="2">Option 1</Menu.Item>
            </SubMenu>
            <Menu.Item key="2">
              <AppstoreOutlined />
              Option 1
            </Menu.Item>
          </Menu>
        </div>
        <div className="layout-main">{this.props.children}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     upList: (...args) => dispatch(actions.upList(...args)),
//   };
// };

export default connect(mapStateToProps)(LayoutIndex);
