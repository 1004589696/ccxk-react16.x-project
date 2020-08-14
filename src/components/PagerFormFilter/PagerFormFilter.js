import React, { Component } from "react";
import "./Pager.scss";
import { Form, Input, Select, DatePicker, Button } from "antd";
import moment from "moment";
import { connect } from "react-redux";
import actions from "../PagerActions";
const { Option } = Select;
const { RangePicker } = DatePicker;

class FormFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const fields = [
    //   {
    //     type: "isInput",
    //     name: "name",
    //     label: "姓名",
    //     initialValue: "me",
    //   },
    //   {
    //     type: "isSelect",
    //     name: "gender",
    //     label: "性别",
    //     initialValue: "1",
    //     options: [
    //       {
    //         label: "男",
    //         value: "1",
    //       },
    //       {
    //         label: "女",
    //         value: "2",
    //       },
    //     ],
    //   },
    //   {
    //     type: "isRangeDate",
    //     name: ["timestart", "timeend"],
    //     label: "日期",
    //     initialValue: ["2015-1-6", "2020-12-31"],
    //   },
    //   {
    //     type: "isRangeDate",
    //     name: ["timestart1", "timeend2"],
    //     label: "日期2",
    //     initialValue: ["2015-1-1", "2020-12-31"],
    //   },
    // ];
    const dateFormat = "YYYY-MM-DD";
    const fields = this.props.fields || [];
    return (
      <Form className="qfy-form" layout="inline" onFinish={this.onFinish}>
        {fields.map((element) => {
          switch (element.type) {
            case "isInput":
              return (
                <Form.Item
                  key={element.label}
                  label={element.label}
                  name={element.name}
                  initialValue={element.initialValue}
                >
                  <Input style={{ width: "200px" }} allowClear />
                </Form.Item>
              );
              break;
            case "isSelect":
              return (
                <Form.Item
                  key={element.label}
                  label={element.label}
                  name={element.name}
                  initialValue={element.initialValue}
                >
                  <Select allowClear style={{ width: "200px" }}>
                    {element.options.map((ele) => {
                      return (
                        <Option key={ele.value} value={ele.value}>
                          {ele.label}
                        </Option>
                      );
                    })}
                  </Select>
                </Form.Item>
              );
              break;
            case "isRangeDate":
              return (
                <Form.Item
                  key={element.label}
                  label={element.label}
                  name={element.name.join("-")}
                  initialValue={
                    element.initialValue
                      ? [
                          moment(element.initialValue[0], dateFormat),
                          moment(element.initialValue[1], dateFormat),
                        ]
                      : null
                  }
                >
                  <RangePicker
                    format={dateFormat}
                    className="qfy-range-date"
                    allowClear
                  />
                </Form.Item>
              );
              break;
            default:
              return null;
          }
        })}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            查询
          </Button>
        </Form.Item>
      </Form>
    );
  }

  onFinish = (values) => {
    const fields = this.props.fields || [];
    let data = {};
    for (let i = 0; i < fields.length; i++) {
      const field = fields[i];
      if (field.type === "isRangeDate") {
        let key = field.name.join("-");
        if (values[key] && values[key].length) {
          data[field.name[0]] = values[key][0].format("YYYY-MM-DD");
          data[field.name[1]] = values[key][1].format("YYYY-MM-DD");
        }
      } else {
        if (values[field.name]) {
          data[field.name] = values[field.name];
        }
      }
    }
    actions.getPagerDataList(data);
  };
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(FormFilter);
