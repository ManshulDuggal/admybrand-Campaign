import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../../../store/store";
import CountryModal from "../countrymodal";

describe("render test", () => {
  it("initial test for country modal", () => {
    const component = render(<Provider store={store}>
      <CountryModal state setState/>
    </Provider>)
    expect(component).toMatchSnapshot()
  })
})
