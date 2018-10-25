import React from "react";
import { shallow } from "enzyme";
import UserProductList from "./UserProductList";
const category = {
	"id": "5bc9a87d76e3833f73511a17",
	"description": "Hi Test",
	"name": "Electronics Test",
	"subCategory": [{
		"id": "5bd0526764151f2c94f622aa",
		"description": "Hi Sub",
		"name": "nameSub",
		"subCategory": null,
		"valid": null
	}],
	"valid": true
}
const location = { pathname: '/userproductList', state: { category: category}};
describe("userProductList", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<UserProductList location={location}/>);
    expect(wrapper).toMatchSnapshot();
	});
	
	// it("sets the state componentDidMount", async () => {
  //   const renderedComponent = await shallow(<UserProductList location={location}/>);
  //   await renderedComponent.update();
  //   expect(renderedComponent.state("products").length).toEqual(1);
  // });
});
