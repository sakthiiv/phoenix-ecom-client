import React from "react";
import { shallow } from "enzyme";
import CategoryList from "../CategoryList";
import category from "../../__mocks__/category";

jest.mock("../api/category", () => {
  const categoryMock = require("../__mocks__/category");
  return categoryMock;
});

describe("CategoryList", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<CategoryList />);
    expect(wrapper).toMatchSnapshot();
  });

  it("sets the state componentDidMount", async () => {
    const renderedComponent = await shallow(<CategoryList />);
    await renderedComponent.update();
    expect(renderedComponent.state("categories").length).toEqual(1);
  });

  it("sets the state componentDidMount on error", async () => {
    const spy = jest
      .spyOn(category, "getAll")
      .mockImplementation(() => Promise.resolve("Error fetching categories"));

    const renderedComponent = await shallow(<CategoryList />);
    await renderedComponent.update();
    expect(renderedComponent.state("categories")).toEqual(
      "Error fetching categories"
    );
  });
});
