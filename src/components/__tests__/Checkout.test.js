import React from 'react';
import { shallow } from 'enzyme';
import Checkout from '../Checkout';
describe('Admin', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<Checkout />);
      expect(wrapper).toMatchSnapshot();
      // On the first run of this test, Jest will generate a snapshot file automatically.
    });
});