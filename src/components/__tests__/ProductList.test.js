import React from "react";
import { shallow } from "enzyme";
import ProductList from "../ProductList";
import product from "../../__mocks__/product";

jest.mock("../api/product", () => {
  const productMock = require("../__mocks__/product");
  return productMock;
});

describe("ProductList", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<ProductList />);
    expect(wrapper).toMatchSnapshot();
  });

  it("sets the state componentDidMount", async () => {
    const renderedComponent = await shallow(<ProductList />);
    await renderedComponent.update();
    expect(renderedComponent.state("products").length).toEqual(1);
  });

  it("sets the state componentDidMount on error", async () => {
    const spy = jest
      .spyOn(product, "getAll")
      .mockImplementation(() => Promise.resolve("Error fetching products"));

    const renderedComponent = await shallow(<ProductList />);
    await renderedComponent.update();
    expect(renderedComponent.state("products")).toEqual(
      "Error fetching products"
    );
  });
});
