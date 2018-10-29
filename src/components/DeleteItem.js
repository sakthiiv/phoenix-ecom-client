import React from "react";

const DeleteItem = (props) => {
  let { type } = props;
  return <div>Are you sure you want to delete this {type}?</div>;
}

export default DeleteItem;
