import React from "react";
import { shallow } from "enzyme";
import Categoty from "../Category";


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
describe("Categoty", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Categoty category={category}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
