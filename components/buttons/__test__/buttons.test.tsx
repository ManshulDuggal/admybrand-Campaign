import { render } from '@testing-library/react';
import React from 'react';
import BtnWithSvg from '../BtnWithSvg';
import PrimaryBtn from '../PrimaryBtn';
import PrimaryBtnWhite from '../PrimaryBtnWhite';


describe("render test", () => {
  it("initial test for primary button", () => {
    const component = render(<PrimaryBtn buttontext={"Test"}/>)
    expect(component).toMatchSnapshot()
  });
  it("initial test for primary button white", () => {
    const component = render(<PrimaryBtnWhite buttontext={"Test"}/>)
    expect(component).toMatchSnapshot()
  });

})