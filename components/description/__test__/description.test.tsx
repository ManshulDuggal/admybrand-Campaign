import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import Description from '../description';


describe("render test", () => {
  it("initial test for description", () => {
    const component = render(<Provider store={store}>
      <Description index={1}/>
    </Provider>)
    expect(component).toMatchSnapshot()
  })
})