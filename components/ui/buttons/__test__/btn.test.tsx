import React from "react";
import Iconsbtn from "../iconsbtn";
import { render } from "@testing-library/react";

describe("initial render test", () => {
  it("should render", () => {
    const component = render(<Iconsbtn></Iconsbtn>);
  });
});
