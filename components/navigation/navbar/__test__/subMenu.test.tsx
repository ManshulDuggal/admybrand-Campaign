import { render } from "@testing-library/react";
import React from "react";
import SubMenu from "../subMenu/subMenu";

describe("render sub menu for navigation", () => {
  it("render sub menu test", () => {
    const component = render(<SubMenu />);
    expect(component).toMatchSnapshot();
  });
});
