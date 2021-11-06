import { render } from '@testing-library/react';
import React from 'react';
import Footer from '../Footer';

describe("render test for footer", () => {
  it("test footer", () => {
    const component = render(<Footer />);
    expect(component).toMatchSnapshot();
  });
});
