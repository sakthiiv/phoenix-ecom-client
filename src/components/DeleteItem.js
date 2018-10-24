import React, { Component } from "react";

class DeleteItem extends React.Component {
  render() {
    let { type } = this.props;
    return <div>Are you sure you want to delete this {type}?</div>;
  }
}

export default DeleteItem;
