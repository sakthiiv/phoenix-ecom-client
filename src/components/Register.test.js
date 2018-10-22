import React from 'react';
import { shallow } from 'enzyme';
import Register from './Register';
describe('Main', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<Register />);
      expect(wrapper).toMatchSnapshot();
      // On the first run of this test, Jest will generate a snapshot file automatically.
    });
});