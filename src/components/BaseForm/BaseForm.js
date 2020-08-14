// Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性

// Hook 解决了编写和维护组件时遇到的各种各样看起来不相关的问题

// Hook 1. 完全可选的 2. 100% 向后兼容的

// useEffect 每次渲染后都执行

import React from "react";
import { Form } from "antd";

function BaseForm(props) {
  const [base_form] = Form.useForm();
  props.onRef(base_form);
  return (
    <Form
      form={base_form}
      onFinish={props.onFinish}
      onFinishFailed={props.onFinishFailed}
    >
      {props.children}
    </Form>
  );
}

export default BaseForm;
