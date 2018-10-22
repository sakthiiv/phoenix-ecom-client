import React from "react";
import { shallow } from "enzyme";
import Categoty from "./Category";

describe("Categoty", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Categoty />);
    expect(wrapper).toMatchSnapshot();
  });
});
