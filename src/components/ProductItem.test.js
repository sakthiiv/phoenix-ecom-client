import React from "react";
import { shallow } from "enzyme";
import ProductItem from "./ProductItem";

describe("ProductItem", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<ProductItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
