import React from "react";
import { shallow } from "enzyme";
import User from "./User";

describe("User", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<User />);
    expect(wrapper).toMatchSnapshot();
  });
});
