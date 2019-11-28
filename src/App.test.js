import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';


 Enzyme.configure({adapter: new Adapter});

describe('App', () => {
  // it('renders without crashing', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<App />, div);
  // });

  it('should show app name', () => {
    const wrapper = shallow(< App />);
    const text = wrapper.find('div h1');
    expect (text.text()).toBe(' 100 THINGS TODO ');
  })

  // it('It should show remaining todos', () => {
  //   const wrapper = shallow(< App />);
  //   const button = wrapper.find('button');
  //   button.simulate('click');
  //   const text = wrapper.find('div');
  //   // expect(text.length).toBe('');
  // })

  it('It should show remaining todos', () => {
    const wrapper = shallow(< App />);
    const total1 = wrapper.find('div.left-todo').text();
    expect(total1).toBe(0);

    const button = wrapper.find('button.clear-button');
    button.simulate('click');
    const total2 = wrapper.find('div.left-todo').text();
    expect(total2).toBe('1');

  })

});
