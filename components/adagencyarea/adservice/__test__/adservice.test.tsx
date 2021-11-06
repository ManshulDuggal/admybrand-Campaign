import { render } from '@testing-library/react';
import React from 'react';
import AdServiceArea from '../adservice';


describe("render test for ad service area",()=>{
  it("test area",()=>{
    const component = render( <AdServiceArea /> ) 
    expect(component).toMatchSnapshot()
  })

 
})