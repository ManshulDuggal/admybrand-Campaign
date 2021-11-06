import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import DefaultBadge from '../DefaultBadge';
import PromotionBadge from '../PromotionBadge';
import SuccessBadge from '../SuccessBadge';


describe("render test", () => {
  it("initial test for default badge", () => {
    const component = render(<DefaultBadge buttontext={"Test"}/>)
    expect(component).toMatchSnapshot()
  });
  it("initial test for promotion badge", () => {
    const component = render(<PromotionBadge buttontext={"Test"}/>)
    expect(component).toMatchSnapshot()
  });
  it("initial test for success badge", () => {
    const component = render(<SuccessBadge buttontext={"Test"}/>)
    expect(component).toMatchSnapshot()
  });

})