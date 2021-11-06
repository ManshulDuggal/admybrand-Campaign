import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import FloatingImages from '../floatingimages';


describe("render test", () => {
  it("initial test for floating images", () => {
    const component = render(<Provider store={store}>
      <FloatingImages/>
    </Provider>)
    expect(component).toMatchSnapshot()
  })
})