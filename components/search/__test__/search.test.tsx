import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import Globalsearch from '../globalsearch/globalsearch';
import Editlocation from '../globalsearch/helper/editlocation';
import Settings from '../globalsearch/helper/filters';
import Hoardingmodal from '../globalsearch/helper/hoardingmodal';
import Webfilter from '../globalsearch/helper/webviewfilters';


describe("render test", () => {
  it("initial test for global search bar", () => {
    const component = render(<Provider store={store}>
      <Globalsearch/>
    </Provider>)
    expect(component).toMatchSnapshot()
  });

  it("initial test for editlocation", () => {
    const component = render(<Provider store={store}>
      <Editlocation editLocation setEditLocation/>
    </Provider>)
    expect(component).toMatchSnapshot()
  });

  it("initial test for mobile filters", () => {
    const component = render(<Provider store={store}>
      <Settings setFiltersModal filtersModal/>
    </Provider>)
    expect(component).toMatchSnapshot()
  });

  it("initial test for hoarding drop down", () => {
    const component = render(<Provider store={store}>
      <Hoardingmodal hoardingModal setHoardingModal/>
    </Provider>)
    expect(component).toMatchSnapshot()
  });


  it("initial test for web filters", () => {
    const component = render(<Provider store={store}>
      <Webfilter filterposition filterpositionShrink/>
    </Provider>)
    expect(component).toMatchSnapshot()
  });
})