import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./router";

import { ConfigProvider } from "antd";
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from "antd/es/locale/zh_CN";
import "moment/locale/zh-cn";

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    {/* <React.StrictMode> */}
    <AppRouter />
    {/* </React.StrictMode> */}
  </ConfigProvider>,
  document.getElementById("root")
);
