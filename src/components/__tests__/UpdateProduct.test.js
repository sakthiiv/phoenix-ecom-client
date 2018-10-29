import React from "react";
import { shallow } from "enzyme";
import UpdateProduct from "../UpdateProduct";

const product = {
  "description": "asdasd",
  "name": "Sony bravia",
  "price": 20000,
  "imagePreviewUrl":''
  };
describe("User", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<UpdateProduct product={product}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
