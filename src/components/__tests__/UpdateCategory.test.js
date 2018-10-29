import React from "react";
import { shallow } from "enzyme";
import UpdateCategory from "../UpdateCategory";
const category = {
  "description": "asdasd",
  "name": "Sony bravia",
  "imagePreviewUrl":''
  };
describe("User", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<UpdateCategory category={category}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
