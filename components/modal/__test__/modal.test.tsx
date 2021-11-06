import { render } from "@testing-library/react";
import React from "react";
import Modal from "../modal";

describe("render test", () => {
  it("initial test", () => {
    const component = render(<Modal />);
    expect(component).toMatchSnapshot();
  });
});
