import { render } from "@testing-library/react";
import React from "react";
import AdAgencyTabs from "../adagencytab";

describe("render test", () => {
  it("test for ad agency page tabs", () => {
    const component = render(<AdAgencyTabs />);
    expect(component).toMatchSnapshot();
  });
});
