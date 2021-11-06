import axios from "axios";

export const countryRoutes = [
    {
        "code": "in",
        "countryName": "India"
    },
    {
        "code": "sg",
        "countryName": "Singapore"
    },
    {
        "code": "gb",
        "countryName": "United Kingdom"
    },
    {
        "code": "cl",
        "countryName": "Chile"
    },
    {
        "code": "cn",
        "countryName": "China"
    },
    {
        "code": "cz",
        "countryName": "Czech"
    },
    {
        "code": "id",
        "countryName": "Indonesia"
    },
    {
        "code": "hk",
        "countryName": "Hong Kong"
    },
    {
        "code": "us",
        "countryName": "United States"
    },
    {
        "code": "my",
        "countryName": "Malaysia"
    },
    {
        "code": "np",
        "countryName": "Nepal"
    },
    {
        "code": "th",
        "countryName": "Thailand"
    },
    {
        "code": "vn",
        "countryName": "Vietnam"
    },
    {
        "code": "ca",
        "countryName": "Canada"
    },
    {
        "code": "ph",
        "countryName": "Philippines"
    },
    {
        "code": "jp",
        "countryName": "Japan"
    },
    {
        "code": "ae",
        "countryName": "United Arab Emirates"
    },
    {
        "code": "au",
        "countryName": "Australia"
    },
    {
        "code": "bg",
        "countryName": "Bulgaria"
    },
    {
        "code": "il",
        "countryName": "Israel"
    },
    {
        "code": "it",
        "countryName": "Italy"
    },
    {
        "code": "lk",
        "countryName": "Sri Lanka"
    },
    {
        "code": "mv",
        "countryName": "Maldives"
    },
    {
        "code": "nz",
        "countryName": "New Zealand"
    },
    {
        "code": "ro",
        "countryName": "Romania"
    },
    {
        "code": "ru",
        "countryName": "Russia"
    },
    {
        "code": "kr",
        "countryName": "South Korea"
    },
    {
        "code": "de",
        "countryName": "Germany"
    },
    {
        "code": "bd",
        "countryName": "Bangladesh"
    },
    {
        "code": "br",
        "countryName": "Brazil"
    },
    {
        "code": "fr",
        "countryName": "France"
    },
    {
        "code": "es",
        "countryName": "Spain"
    },
    {
        "code": "mx",
        "countryName": "Mexico"
    },
    {
        "code": "nl",
        "countryName": "Netherlands"
    },
    {
        "code": "ch",
        "countryName": "Switzerland"
    },
    {
        "code": "se",
        "countryName": "Sweden"
    },
    {
        "code": "sa",
        "countryName": "Saudi Arabia"
    },
    {
        "code": "pl",
        "countryName": "Poland"
    },
    {
        "code": "tr",
        "countryName": "Turkey"
    },
    {
        "code": "be",
        "countryName": "Belgium"
    },
    {
        "code": "at",
        "countryName": "Austria"
    },
    {
        "code": "ie",
        "countryName": "Ireland"
    },
    {
        "code": "no",
        "countryName": "Norway"
    },
    {
        "code": "ar",
        "countryName": "Argentina"
    },
    {
        "code": "dk",
        "countryName": "Denmark"
    },
    {
        "code": "fl",
        "countryName": "Finland"
    },
    {
        "code": "cz",
        "countryName": "Czech Republic"
    },
    {
        "code": "pt",
        "countryName": "Portugal"
    },
    {
        "code": "gr",
        "countryName": "Greece"
    },
    {
        "code": "hr",
        "countryName": "Croatia"
    },
    {
        "code": "cy",
        "countryName": "Cyprus"
    },
    {
        "code": "ee",
        "countryName": "Estonia"
    },
    {
        "code": "hu",
        "countryName": "Hungary"
    },
    {
        "code": "lv",
        "countryName": "Latvia"
    },
    {
        "code": "lu",
        "countryName": "Luxembourg"
    },
    {
        "code": "mt",
        "countryName": "Malta"
    },
    {
        "code": "sk",
        "countryName": "Slovakia"
    },
    {
        "code": "si",
        "countryName": "Slovenia"
    },
    {
        "code": "is",
        "countryName": "Iceland"
    }
];

export const currentCountryCode = async () => {
    try {
      const {data} =  await axios.get('http://ip-api.com/json')
      const {countryCode}=data;
    
      const countryCodeInfo=countryRoutes.filter(item=>countryCode.toLowerCase()==item.code)
      console.log(countryCode, countryCodeInfo);
      if(countryCodeInfo.length==0)
      {
          return null
      }
      return countryCodeInfo[0];
    } catch (error) {
        return null
    }
  };
  
