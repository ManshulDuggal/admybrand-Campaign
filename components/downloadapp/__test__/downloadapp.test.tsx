import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import DownloadApp from '../downloadapp';


describe("render test", () => {
  it("initial test for download app", () => {
    const component = render(<Provider store={store}>
      <DownloadApp/>
    </Provider>)
    expect(component).toMatchSnapshot()
  })
})