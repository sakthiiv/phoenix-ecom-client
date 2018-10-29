import React from 'react';
import { shallow } from 'enzyme';
import CreateProduct from '../CreateProduct';
describe('CreateProduct', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<CreateProduct />);
      expect(wrapper).toMatchSnapshot();
      // On the first run of this test, Jest will generate a snapshot file automatically.
    });
});