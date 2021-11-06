import { render } from '@testing-library/react';
import React from 'react';
import ActionButtons from '../ActionButtons/ActionButtons';
import AdsCard from '../AdsCard/AdsCard';
import MapComponent from '../MapComponent/MapComponent';
import MapControls from '../MapControls/MapControls';
import MapFloatButton from '../MapFloatButton/MapFloatButton';
import Maps from '../MapContainer/Maps';
import MobileMap from '../MobileMap/MobileMap';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';

describe("render test", () => {
  it("initial test for ActionButtons", () => {
    const component = render(<Provider store={store}>
            <ActionButtons/>
       </Provider>
       )
    expect(component).toMatchSnapshot()
  });
  it("initial test for Ads Card", () => {
    const component = render(<Provider store={store}><AdsCard
        key={1}
        cardposition={false}
        cardpositionShrink={false}
        heading={"test"}
        image={"image"}
        mrpprice={'100'}
        finalprice={'90'}
        discount={'10'}
        location={'Delhi'}
        type={'hoarding'}
        promotion={true}
        width={'20'}
        height={'20'}
        mobileMapView={false}
      /></Provider>)
    expect(component).toMatchSnapshot()
  });
  it("initial test for Map component", () => {
    const component = render(<Provider store={store}><MapComponent viewport setViewport mapType={1} mapdata={[]} categoryname={'hoarding'}/></Provider>)
    expect(component).toMatchSnapshot()
  });

  it("initial test for Map Controls", () => {
    const component = render(<Provider store={store}><MapControls mapsize={false} setMapsize mapType={1} setMapType/></Provider>)
    expect(component).toMatchSnapshot()
  });

  it("initial test for Map", () => {
    const component = render(<Provider store={store}><Maps categoryname={'hoarding'}  mapsize mapFull mapdata={[]}  setMapsize  setMapFull/></Provider>)
    expect(component).toMatchSnapshot()
  });

})