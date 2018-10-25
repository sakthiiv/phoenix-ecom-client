import React from 'react';
import { shallow } from 'enzyme';
import ProductDetail from './ProductDetail';



const productItem = {
    "categoryId": "5bc9a87d76e3833f73511a17",
    "description": "asdasd",
    "id": "5bc9d01964151f13906681b7",
    "name": "Sony bravia",
    "price": 20000,
    "subCategoryId": "2"
};

const location = { pathname: '/product-detail', state: { product: productItem}};
describe('ProductDetail', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<ProductDetail location={location}/>);
      expect(wrapper).toMatchSnapshot();
      // On the first run of this test, Jest will generate a snapshot file automatically.
    });
});