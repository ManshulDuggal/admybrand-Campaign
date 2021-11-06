import { render } from "@testing-library/react";
import React from "react";
import AdAgencyBar from "../adagencytab";

describe("render test", () => {
  it("test for ad agency page bars", () => {
    const component = render(<AdAgencyBar />);
    expect(component).toMatchSnapshot();
  });
});
