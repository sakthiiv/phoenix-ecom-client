import React from "react";
import { shallow } from "enzyme";
import UpdateProduct from "../UpdateProduct";

describe("User", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<UpdateProduct />);
    expect(wrapper).toMatchSnapshot();
  });
});
