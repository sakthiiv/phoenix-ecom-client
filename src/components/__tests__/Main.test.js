import React from 'react';
import { shallow } from 'enzyme';
import Main from '../Main';
describe('Main', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<Main />);
      expect(wrapper).toMatchSnapshot();
      // On the first run of this test, Jest will generate a snapshot file automatically.
    });
});