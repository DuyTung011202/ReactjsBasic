import React from "react";

export default class A extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { userInfo } = this.props;
    return (
      <div>
        <h1>Giới thiệu bản thân</h1>
        <p>Tên: {userInfo.name}</p>
        <p>Mô tả: {userInfo.description}</p>
      </div>
    );
  }
}
