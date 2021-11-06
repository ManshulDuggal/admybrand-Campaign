const path = require("path");

module.exports = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: [
      "rukminim1.flixcart.com",
      "staticfileadm.s3.ap-south-1.amazonaws.com",
    ],
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoibGF2YW55YTUxMSIsImEiOiJja3NhM3A4djAxYnZlMzBvY2YwNHRtMGloIn0.YO4LRUBYvcNcXwj30at2WQ",
  },
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: [
      "en-US",
      "fr",
      "id",
      "us",
      "in",
      "sg",
      "np",
      "th",
      "vn",
      "my",
      "hk",
      "mo",
      "cl",
      "cn",
      "cz",
      "dk",
      "fl",
      "au",
      "bd",
      "be",
      "br",
      "ca",
      "de",
      "gr",
      "hu",
      "ie",
      "il",
      "nl-NL",
    ],
    defaultLocale: "en-US",

    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
    // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
    domains: [
      {
        domain: "staging.admybrand.com",
        defaultLocale: "en-US",
      },
      {
        domain: "np-staging.admybrand.com",
        defaultLocale: "np",
      },
      {
        domain: "th-staging.admybrand.com",
        defaultLocale: "th",
      },
      {
        domain: "vn-staging.admybrand.com",
        defaultLocale: "vn",
      },
      {
        domain: "my-staging.admybrand.com",
        defaultLocale: "my",
      },
      {
        domain: "hk-staging.admybrand.com",
        defaultLocale: "hk",
      },
      {
        domain: "mo-staging.admybrand.com",
        defaultLocale: "mo",
      },
      {
        domain: "id-staging.admybrand.com",
        defaultLocale: "id",
      },
      {
        domain: "us-staging.admybrand.com",
        defaultLocale: "us",
      },
      {
        domain: "in-staging.admybrand.com",
        defaultLocale: "in",
      },
      {
        domain: "sg-staging.admybrand.com",
        defaultLocale: "sg",
      },
      {
        domain: "cl-staging.admybrand.com",
        defaultLocale: "cl",
      },
      {
        domain: "cn-staging.admybrand.com",
        defaultLocale: "cn",
      },
      {
        domain: "cz-staging.admybrand.com",
        defaultLocale: "cz",
      },
      {
        domain: "dk-staging.admybrand.com",
        defaultLocale: "dk",
      },
      {
        domain: "fl-staging.admybrand.com",
        defaultLocale: "fl",
      },
      {
        domain: "au-staging.admybrand.com",
        defaultLocale: "au",
      },
      {
        domain: "bd-staging.admybrand.com",
        defaultLocale: "bd",
      },
      {
        domain: "be-staging.admybrand.com",
        defaultLocale: "be",
      },
      {
        domain: "br-staging.admybrand.com",
        defaultLocale: "br",
      },
      {
        domain: "ca-staging.admybrand.com",
        defaultLocale: "ca",
      },
      {
        domain: "de-staging.admybrand.com",
        defaultLocale: "de",
      },
      {
        domain: "gr-staging.admybrand.com",
        defaultLocale: "gr",
      },
      {
        domain: "hu-staging.admybrand.com",
        defaultLocale: "hu",
      },
      {
        domain: "ie-staging.admybrand.com",
        defaultLocale: "ie",
      },
      {
        domain: "il-staging.admybrand.com",
        defaultLocale: "il",
      },
      {
        domain: "fr-staging.admybrand.com",
        defaultLocale: "fr",
        // an optional http field can also be used to test
        // locale domains locally with http instead of https
        // http: true,
      },
    ],
  },
};
