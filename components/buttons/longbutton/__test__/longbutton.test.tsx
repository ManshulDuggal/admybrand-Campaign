import { render } from "@testing-library/react";
import React from "react";
import Longbutton from "../longbutton";

describe("initial test", () => {
  it("should render", () => {
    const component = render(<Longbutton />);
    expect(component).toMatchSnapshot();
  });
});
