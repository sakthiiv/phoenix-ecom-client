import React from "react";
import { shallow } from "enzyme";
import ProductItem from "./ProductItem";

const product = {
  "categoryId": "5bc9a87d76e3833f73511a17",
  "description": "asdasd",
  "id": "5bc9d01964151f13906681b7",
  "name": "Sony bravia",
  "price": 20000,
  "subCategoryId": "2"
  };
describe("ProductItem", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<ProductItem productItem={product}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
