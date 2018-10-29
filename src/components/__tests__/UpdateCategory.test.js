import React from "react";
import { shallow } from "enzyme";
import UpdateCategory from "../UpdateCategory";

describe("User", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<UpdateCategory />);
    expect(wrapper).toMatchSnapshot();
  });
});
