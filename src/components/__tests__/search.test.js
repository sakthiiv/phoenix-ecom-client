import React from "react";
import { shallow } from "enzyme";
import Search from "../search";

describe("User", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Search />);
    expect(wrapper).toMatchSnapshot();
  });
});
