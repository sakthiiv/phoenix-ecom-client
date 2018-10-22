import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
describe('Main', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<Login />);
      expect(wrapper).toMatchSnapshot();
      // On the first run of this test, Jest will generate a snapshot file automatically.
    });
});