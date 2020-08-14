import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./router";
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import "moment/locale/zh-cn";

// 引入redux
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      {/* <React.StrictMode> */}
      <AppRouter />
      {/* </React.StrictMode> */}
    </ConfigProvider>
  </Provider>,
  document.getElementById("root")
);
