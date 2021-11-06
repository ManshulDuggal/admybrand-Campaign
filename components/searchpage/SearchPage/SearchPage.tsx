import Head from "next/head";
import React, { useCallback, useEffect, useState } from "react";
import AdsCard from "../AdsCard/AdsCard";
import Maps from "../MapContainer/Maps";
import MapFloatButton from "../MapFloatButton/MapFloatButton";
import styles from "./seachpage.module.scss";
import CountryModal from "../../countrymodal/countrymodal";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { searchAdspace, searchMapListing } from "../../../store/actions/search";
import {
  DigitToCurrency,
  discounthandler,
} from "../../helpers/searchpage";
import { metadata } from "../../../constants/meta";
import Header from "../../Header/Header";
import Globalsearch from "../../search/globalsearch/globalsearch";
import Webfilter from "../../search/globalsearch/helper/webviewfilters";
import Footer from "../../footer/footer";
import Pagenumbers from "../PageNumbers/pagenumbers";

function SearchPage() {
  const [mapsize, setMapsize] = useState(true);
  const [mapFull, setMapFull] = useState(false);
  const [mapPoints, setmapPoints] = useState([]);
  const [state, setState] = useState(true);
  const [mobileMap, setMobileMap] = useState(true);
  const { query } = useRouter();
  const dispatch = useAppDispatch();
  const searchresults = useAppSelector((state) => state.search.data);
  const searchMapList = useAppSelector((state) => state.search.mapdata);
  const loading = useAppSelector((state) => state.search.loading);
  const notFound = useAppSelector((state) => state.search.rejected);
  const searchHandler = useCallback(async () => {
    try {
      if (query.category !== "" && query.location !== "") {
        await dispatch(
          searchAdspace({
            category: query.category,
            fieldname: "city",
            value: query.location,
          })
        );
      }
    } catch (err) {
      throw err;
    }
  }, [query, dispatch]);

  const searchMap = async () => {
    try {
      if (query.category !== "" && query.location !== "") {
        await dispatch(
          searchMapListing({
            category: query.category,
            fieldname: "city",
            value: query.location,
          })
        );
      }
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    searchHandler();
  }, [query, searchHandler]);
  useEffect(() => {
    searchMap();
  }, [query]); //eslint-disable-line
  useEffect(() => {
    setmapPoints(searchMapList.filter((data) => data.location != ""));
  }, [searchMapList]);
  return (
    <React.Fragment>
      <div className={styles.headerContainer}>
        <Header type={false} ninedots>
          <Globalsearch />
        </Header>
      </div>
      <div className={styles.globalsearchcontainer}>
        <Globalsearch />
      </div>
      <CountryModal state={state} setState={setState} />
      <Head>
        <title>{metadata.home.title}</title>
        <meta name="keywords" content={metadata.home.keywords} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={metadata.home.description} />
        <meta name="author" content={metadata.home.author} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <div className={styles.searchPageContainer}>
        <div className={styles.searchPageSubContainer}>
          <div
            className={`${mobileMap ? styles.adsCardPosition : styles.noAdsCard
              }`}
          >
            <div>
              <Webfilter
                filterposition={mapsize}
                filterpositionShrink={mapFull}
              />

              <div className={`${mapsize ? styles.aboutResults : styles.aboutResultsLeft}`}>About 12,000 results</div>
            </div>
            {loading ? (
              <p>loading..</p>
            ) : (
              searchresults.map((item, index) => {
                return (
                  <AdsCard
                    key={item._id}
                    cardposition={mapsize}
                    cardpositionShrink={mapFull}
                    heading={item.name}
                    image={item.thumbnail_url}
                    mrpprice={DigitToCurrency(item.mrp_price)}
                    finalprice={DigitToCurrency(item.final_price)}
                    discount={discounthandler(item.mrp_price, item.final_price)}
                    location={item.city}
                    type={query.category}
                    promotion={item.promotion}
                    width={item.width}
                    height={item.height}
                    mobileMapView={mobileMap}
                  />
                );
              })
            )}
            {notFound && <p className={`${mapsize ? styles.noResults : styles.noResultsLeft}`}>No Results found</p>}

            <div className={styles.pageNumberContainer}>
              <Pagenumbers />
            </div>

          </div>

          <div>
            <Maps
              categoryname={query.category}
              mapdata={mapPoints}
              mapsize={mapsize}
              mapFull={mapFull}
              setMapsize={setMapsize}
              setMapFull={setMapFull}
            />
          </div>

        </div>
        <span className={styles.mapFloatButtonContainer}>
          <MapFloatButton
            mobileMap={mobileMap}
            categoryname={query.category}
            setMobileMap={setMobileMap}
            searchResults={mapPoints}
          />
        </span>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default SearchPage
