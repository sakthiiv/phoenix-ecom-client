import React from 'react';
import { shallow } from 'enzyme';
import ShoppingCart from '../ShoppingCart';
describe('Admin', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<ShoppingCart />);
      expect(wrapper).toMatchSnapshot();
      // On the first run of this test, Jest will generate a snapshot file automatically.
    });
});