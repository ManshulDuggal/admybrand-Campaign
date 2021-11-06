import { render } from "@testing-library/react";
import React from "react";
import CreditArea from "../creditarea";

describe("render test", () => {
  it("test for ad agency credit area", () => {
    const component = render(<CreditArea />);
    expect(component).toMatchSnapshot();
  });
});
