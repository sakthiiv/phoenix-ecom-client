import React from "react";
import { shallow } from "enzyme";
import CategoryList from "./CategoryList";

describe("CategoryList", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<CategoryList />);
    expect(wrapper).toMatchSnapshot();
  });
});
