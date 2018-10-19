import React from "react";
import { shallow } from "enzyme";
import ProductList from "./ProductList";

describe("ProductList", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<ProductList />);
    expect(wrapper).toMatchSnapshot();
  });
});