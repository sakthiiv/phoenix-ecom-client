import React from "react";
import { shallow } from "enzyme";
import UserProductList from "./UserProductList";

describe("userProductList", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<UserProductList />);
    expect(wrapper).toMatchSnapshot();
  });
});
