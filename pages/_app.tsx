import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "../styles/globals.scss";
import "react-dates/lib/css/_datepicker.css";
import "../styles/customCalendarRanged.scss";
import { store } from "../store/store";
import {currentCountryCode} from '../constants/api/countryRoutes';
import {useEffect} from "react";
import Router, { useRouter } from 'next/router'
import * as allLocales from '../constants/language'
import { IntlProvider } from "react-intl";

// interface props {
//   Component?: any;
//   pageProps?: any;
//   code?: string
// }

function MyApp({ Component, pageProps }: AppProps) {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  const messages = allLocales[locale];
  
  console.log("NODE_ENV", process.env.NODE_ENV,messages);
  useEffect(()=>{
    if(process.env.NODE_ENV !== 'development' && typeof window !== "undefined" && window.location.host === "staging.admybrand.com"){
      (async function(){
        try {
          const countryCodeInfo= await currentCountryCode();
          if(countryCodeInfo==null){
            return;
          }
          const {code=''}=countryCodeInfo;
          console.log("country code", code, asPath);
          Router.push(asPath, asPath, { locale: code, shallow: true});
        } catch (error) { 
          console.log("error",error)
        }
      }());
    }
  },[]);

  return (
    <Provider store={store}>
       {/* <IntlProvider
          key={locale}
          locale={locale}
          defaultLocale={defaultLocale}
          messages={messages}
        >
          <Component {...pageProps} />
        </IntlProvider> */}
        <Component {...pageProps} />
    </Provider>
  );
}



// MyApp.getInitialProps = async ({ req }) => {
//   // const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
//   const countryCodeInfo= await currentCountryCode();
//   if(countryCodeInfo==null){
//     return;
//   }
//   const {code=''}=countryCodeInfo;
//   console.log("getInitialProps called", code)
//   return { code }
// }

export default MyApp;
