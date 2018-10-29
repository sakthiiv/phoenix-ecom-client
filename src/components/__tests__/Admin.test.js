import React from 'react';
import { shallow } from 'enzyme';
import Admin from '../Admin';
describe('Admin', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<Admin />);
      expect(wrapper).toMatchSnapshot();
      // On the first run of this test, Jest will generate a snapshot file automatically.
    });
});