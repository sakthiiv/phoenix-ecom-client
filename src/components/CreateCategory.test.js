import React from 'react';
import { shallow } from 'enzyme';
import CreateCategory from './CreateCategory';
describe('CreateCategory', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<CreateCategory />);
      // const onFormSubmit = { preventDefault: () => console.log('preventDefault') };
      // const onFormSubmit = jest.fn();
      const fakeEvent = { preventDefault: () => console.log('preventDefault') };
      expect(wrapper).toMatchSnapshot();
      // On the first run of this test, Jest will generate a snapshot file automatically.

      const formElement = wrapper.find('form'); // step 1 above
      formElement.simulate('submit', fakeEvent); // step 2
      expect(formElement.length).toBe(1);
      // expect(onFormSubmit).toHaveBeenCalledTimes(1); // step 3 
    });
});