import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import EnquiryForm from '../EnquiryForm';


describe("render test", () => {
  it("initial test for enquiry form", () => {
    const component = render(<Provider store={store}>
      <EnquiryForm/>
    </Provider>)
    expect(component).toMatchSnapshot()
  })
})