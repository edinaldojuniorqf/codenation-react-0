import React from 'react';
import { mount, shallow } from 'enzyme';
import Navbar from './Navbar';

describe('Navbar', () => {
  test('Should be App', () => {
    const wrapper = mount(<Navbar />);
    expect(wrapper.is('Navbar')).toBeTruthy();
  })

  test('Input search call onSearch on onChange', () => {
    const onSearch = jest.fn()

    const wrapper = mount(<Navbar onSearch={onSearch} />)
    const wrapperSearch = wrapper.find('input[type="search"]')
    const value = 'eggs'
    wrapperSearch.getDOMNode().value = value
    wrapperSearch.simulate('change')
    expect(onSearch).toHaveBeenCalledWith(value)
  })
})
