
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { SearchInput } from './searchInput.tsx';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    keywords: ['green', 'tree', 'summer'],
    searchBox: 'hot',
    handleChange: jest.fn(),
    handleSubmit: jest.fn(),
    removeKeyword: jest.fn(),
  };

  const enzymeWrapper = shallow(<SearchInput {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('<SearchInput />', () => {
  it('Should render input and container for keywords', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('input').hasClass('search__input')).toBe(true);
    const keywordsContainer = enzymeWrapper.find('.search__keywords');
    expect(keywordsContainer.length).toBe(1);
  });
  it('Should receive props', () => {
    const { enzymeWrapper } = setup();
    const inputProps = enzymeWrapper.find('input').props();
    expect(inputProps.value).toEqual('hot');
    const keywords = enzymeWrapper.find('.keyword');
    expect(keywords.length).toBe(3);
  });
  it('Should respond to onChange', () => {
    const { enzymeWrapper, props } = setup();
    const input = enzymeWrapper.find('input');
    input.props().onChange('');
    expect(props.handleChange.mock.calls.length).toBe(1);
  });
  it('Should respond to onKeypress', () => {
    const { enzymeWrapper, props } = setup();
    const input = enzymeWrapper.find('input');
    let event = { key: 'Enter' };
    input.props().onKeyPress(event);
    expect(props.handleSubmit.mock.calls.length).toBe(1);
  });
});
