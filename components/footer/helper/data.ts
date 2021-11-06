import { icons, svgs } from "../../../constants/icons/icons";
import styles from "../styles/footer.module.scss";

const Data = [
  {
    key: 0,
    heading: "InventMyAd",
    content:
      "Invent brand identity & curated Ad creation services from top designers at affordable cost",
  },
  {
    key: 1,
    heading: "Ad8Hoarding",
    content:
      "Connecting brands with millions of people through fixed outdoor media such as hoardings/billboards",
  },
  {
    key: 2,
    heading: "Ad8OOH",
    content:
      "Ecommerce styled portal based advertising on movable outdoor medias & high visibility avenues",
  },
  {
    key: 3,
    heading: "Ad8Mobi",
    content:
      "Exclusive platform for retargeted & offline advertising on mobile phones & mobile apps",
  },
  {
    key: 4,
    heading: "Ad8Radio",
    content:
      "Combining the power of audio Ads on radio with the benefits of digital on cloud based platform",
  },
  {
    key: 5,
    heading: "Ad8TV",
    content:
      "Leader in Asia-pacific in cloud managed broadcast services & DIY targeted advertising on TV & OTT",
  },
  {
    key: 6,
    heading: "Ad8Paper",
    content:
      "Economically book Ads in any newspaper or magazine with real-time tracking of available spaces",
  },
  {
    key: 7,
    heading: "AnalyzeMyAd",
    content:
      "Post marketing campaign analyzed by ingenious algorithms & marketing veterans through DIY portal",
  },
  {
    key: 8,
    heading: "AMBIcode",
    content:
      "Identify your adspaces by allocating them universal display QR codes & audio QR codes for audio ads",
  },
  {
    key: 23,
    heading: "Calci",
    content:
      "The ultimate search engine for discovering adspaces & planning Ad campaigns at any place anytime",
  },
  {
    key: 9,
    heading: "Zeedback",
    content:
      "Get valuable feedback from your clients & target audience to improve your product & Ad campaigns",
  },
  {
    key: 10,
    heading: "Ad8Social",
    content:
      "Analytics driven single platform to book ads for your brand's web presence & on social media sites",
  },
  {
    key: 11,
    heading: "8DigiAd",
    content:
      "Advertise outdoors on any surface with our patented & digitally connected smart projectors & LEDs",
  },
  {
    key: 12,
    heading: "Clicko",
    content:
      "All-in-one platform to post content, schedule posts & manage your social media presence on all sites",
  },
  {
    key: 13,
    heading: "ARP",
    content:
      "Get updated with real time analytics & ratings of programs, TV shows & Ad campaigns on any medium",
  },
  {
    key: 14,
    heading: "Adify",
    content:
      "Advanced computerized AI based personal assistant for marketing & managing Ad campaigns by bots",
  },
  {
    key: 15,
    heading: "8Surface",
    content:
      "The DIY digital ads creation platform to help advertisers create their ad campaign designs on own",
  },
  {
    key: 16,
    heading: "Ad8Plan",
    content:
      "Plan and organize Media Inventory with forecasting, Lead Generation, Sales force Tracking & management",
  },
  {
    key: 17,
    heading: "AmbiCash",
    content:
      "Ethereum Blockchain based digital advertising utility token to bring transparency in ad analytics reporting",
  },
  {
    key: 18,
    heading: "Boost",
    content:
      "TV & Radio Analytics for re-targeting audience for offline & Mobile ads, measure impressions & demographics",
  },
  {
    key: 19,
    heading: "Console",
    content:
      "Console help Advertisers with centralized dashboard for monitoring their ongoing marketing campaigns",
  },
  {
    key: 20,
    heading: "Pages",
    content:
      "Admybrand Company Pages empowers Media Owners to showcase their Inventory & Offers with Advertisers",
  },
  {
    key: 21,
    heading: "Search Seller",
    content:
      "Media Sellers search and discovery platform which provides information and reviews on Ad space Sellers",
  },

  {
    key: 22,
    heading: "VIA",
    content:
      "VIA helps Outdoor media identify their visibility scoring & helps real estate properties to get analytics metrics of area.",
  },
];

export default Data;

export const countryData = {
  language: "English (IN)",
  country: "India",
  currency: "₹ INR",
};

export const payments = [
  { key: 0, data: "Net Banking" },
  { key: 1, data: "Easy EMI option" },
  { key: 2, data: "NEFT RTGS" },
  { key: 3, data: "Easy Loan Option" },
  { key: 4, data: "IMPS" },
  { key: 5, data: "UPI" },
  { key: 6, data: "Wallet" },
  { key: 7, data: "Cheque" },
];

export const bottomFooterLinks = [
  { url: "https://admybrand.com/intern", name: "Internship" },
  { url: "https://admybrand.com/career", name: "Career" },
  { url: "https://admybrand.com/ourcompany", name: "Company" },
  { url: "https://admybrand.com/home/sitemap", name: "Sitemap" },
  { url: "https://admybrand.com/terms/blog", name: "Blog" },
  { url: "https://admybrand.com/terms/privacy", name: "Privacy" },
  { url: "https://admybrand.com/terms/terms", name: "Terms" },
];
export const socialLinks = [
  {
    imgUrl:icons.facebook,
    url:`https://www.facebook.com/Admybrand`
  },
  {
    imgUrl:icons.twitter,
    url:`https://twitter.com/admybrand?lang=en`
  },
  {
    imgUrl:icons.instagram,
    url:`https://www.instagram.com/Admybrand`
  },
  {
    imgUrl:icons.youtube,
    url:`https://www.youtube.com/channel/UCEKgVQ1MeZx3lpyDqGtW30g`
  },
  {
    imgUrl:icons.linkedIn,
    url:`https://www.linkedin.com/company/admybrand?originalSubdomain=in`
  },
  {
    imgUrl:icons.medium,
    url:`https://medium.com/@admybrand`
  },
];
export const paymentGrid = [
  {
    imgSrc:svgs.visa,
    styles:styles.payment,
    width:80,
    height:60
  },
  {
    imgSrc:svgs.master,
    styles:styles.card,
    width:80,
    height:60
  },
  {
    imgSrc:svgs.maestro,
    styles:styles.card,
    width:100,
    height:80
  },
  {
    imgSrc:svgs.americanexpress,
    styles:styles.payment,
    width:100,
    height:80
  },
  {
    imgSrc:svgs.paypal,
    styles:styles.payment,
    width:100,
    height:80
  },
  {
    imgSrc:svgs.rupay,
    styles:styles.payment,
    width:100,
    height:80
  }
]
