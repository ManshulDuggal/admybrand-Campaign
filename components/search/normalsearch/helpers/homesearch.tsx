import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { svgs } from "../../../../constants/icons/icons";
import styles from "./../../normalsearchouter/styles/normalsearchouter.module.scss";
import CategoryDropdown from "./categorydropdown";
import Divide from "./divide";
import CalendarRanged from "./calendarRanged";
import LocationDropdown from "./locationdropdown";
import { AiOutlineDown } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { searchCity } from "../../../../store/actions/location";
import { useRouter } from "next/router";
import { DATE_FORMAT_dd_MMM_YYYY } from "../../../../constants/dateconstants";
import { timeInstant } from "../../../../constants/api/months";
import moment from "moment";
import VoiceRecognition from "../../../VoiceRecognition/VoiceRecognition";
import Modal from "../../../../elements/Modal/Modal";
interface props {
  state?: number;
  setState?: React.Dispatch<React.SetStateAction<number>>;
}
const Homesearch = ({ state, setState }: props) => {
  const router = useRouter();
  const [model, setmodel] = React.useState<null | number>(null);
  const [calendarLayout, showCalendarLayout] = React.useState<boolean>(false);
  const [showCategoryDropdown, setShowCategoryDropdown] =
    React.useState<boolean>(false);
  const [showLocationDropdown, setShowLocationDropdown] =
    React.useState<boolean>(false);
  const [showVoiceModal, toggleVoiceModal] = React.useState<boolean>(false);
  const searchBarRef = useRef(null);

  const handleSearchView = () => {
    let element = searchBarRef.current;
    let headerOffset = -120;
    let elementPosition = element.getBoundingClientRect().top;
    let offsetPosition = elementPosition + headerOffset + window.pageYOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };
  const [calFeatureVisibility, setCalFeatureVisibility] =
    useState<boolean>(true);
  const [selectedMonths, setSelectedMonths] = useState([]);
  const [searchData, setSearchData] = useState<any>({
    category: "",
    location: "",
    startDate: null,
    endDate: null,
    categoryId: "",
    weekBasis: "",
    monthBasis: "",
  });
  useEffect(() => {
    const date = new Date();
    const monthIdx = date.getMonth() + 1;
    let setMonths = new Array();
    for (let i = monthIdx; i < monthIdx + 6; i++) {
      setMonths.push({ id: i, month: timeInstant[i % 12], isChecked: false });
    }
    setSelectedMonths(setMonths);
    console.log(selectedMonths);
  }, []);

  const onSearchSelect = (field: string, value: string, id) => {
    if (field === "category" && id !== "") {
      setSearchData({ ...searchData, category: value, categoryId: id });
    }

    if (field === "location") {
      setSearchData({ ...searchData, location: value });
      searchlocationHandler(value);
    }

    if (field === "startDate") {
      setSearchData({ ...searchData, startDate: value });
    }
    if (field === "endDate") {
      setSearchData({ ...searchData, endDate: value });
    }
  };
  const dispatch = useAppDispatch();
  const searchlocationHandler = async (value: string) => {
    await dispatch(searchCity(value));
  };
  const locations = useAppSelector((state) => state.location.location);
  const loading = useAppSelector((state) => state.location.loading);
  const reject = useAppSelector((state) => state.location.rejected);

  const onSearchHandler = () => {
    if (searchData.category !== "" && searchData.location !== "") {
      router.push({
        pathname: "/search",
        query: { category: searchData.category, location: searchData.location },
      });
    }
  };

  const openModel = (index: number | null) => {
    const bodymainscroll = document.querySelector("body").style;
    switch (index) {
      case null:
        bodymainscroll.overflow = "auto";
        break;
      case 0:
        if (model === 0) {
          bodymainscroll.overflow = "auto";
          setmodel(null);
        } else {
          bodymainscroll.overflow = "hidden";
          setmodel(index);
        }
        break;
      case 1:
        if (model === 1) {
          bodymainscroll.overflow = "auto";
          setmodel(null);
        } else {
          bodymainscroll.overflow = "hidden";
          setmodel(index);
        }
        break;
      case 2:
        if (model === 2) {
          bodymainscroll.overflow = "auto";
          setmodel(null);
        } else {
          bodymainscroll.overflow = "hidden";
          setmodel(index);
        }
        break;
      case 3:
        if (model === 3) {
          bodymainscroll.overflow = "auto";
          setmodel(null);
        } else {
          bodymainscroll.overflow = "hidden";
          setmodel(index);
        }
        break;
      default:
        break;
    }
  };
  switch (state) {
    case 0:
      return (
        <>
          <section
            className={`${styles.homesearchoutermain}`}
            ref={searchBarRef}
          >
            {calendarLayout && (
              <CalendarRanged
                searchData={searchData}
                setSearchData={setSearchData}
                calFeatureVisibility={calFeatureVisibility}
                setCalFeatureVisibility={setCalFeatureVisibility}
                showCalendarLayout={showCalendarLayout}
                selectedMonths={selectedMonths}
                setSelectedMonths={setSelectedMonths}
                columns={2}
              />
            )}
            {showVoiceModal && (
              <Modal handler={toggleVoiceModal}>
                <VoiceRecognition
                  searchData={searchData}
                  setCategoriesAndLocation={setSearchData}
                  handler={toggleVoiceModal}
                />
              </Modal>
            )}
            <section className={`${styles.homesearchouterwrapper}`}>
              <div className={styles.homesearchouterhover}>
                <button
                  className={`${styles.homesearchoutercategorywrapper} ${styles.homesearchouteractive}`}
                  onClick={() => {
                    handleSearchView();
                    setShowCategoryDropdown(!showCategoryDropdown);
                  }}
                >
                  <h3 className={styles.homesearchouterheadings}>Category</h3>
                  <input
                    className={`${styles.homesearchoutercategoryinput}`}
                    type="text"
                    name="category"
                    id="homecategory"
                    placeholder="Select Category &#x2C5;"
                    onChange={(e) =>
                      onSearchSelect("category", e.target.value, "")
                    }
                    value={searchData.category}
                  />
                  {showCategoryDropdown && (
                    <CategoryDropdown
                      customstyles={styles.homesearchoutercategory}
                      onSelect={(e) =>
                        onSearchSelect("category", e.name, e._id)
                      }
                    />
                  )}
                </button>
              </div>
              <Divide customstyles={styles.dividexinner} />
              <div className={styles.homesearchouterhover}>
                <button
                  className={`${styles.homesearchouterlocationwrapper} ${styles.homesearchouteractive}`}
                  onClick={() => {
                    handleSearchView();
                    setShowLocationDropdown(!showLocationDropdown);
                  }}
                >
                  <h3 className={styles.homesearchouterheadings}>Location</h3>
                  <input
                    className={`${styles.homesearchouterlocationinput} ${styles.homesearchoutersubheadings}`}
                    type="text"
                    name="location"
                    id="homelocation"
                    placeholder="Where do you want to advertise &#x3F;"
                    onChange={(e) =>
                      onSearchSelect("location", e.target.value, "")
                    }
                    value={searchData.location}
                  />
                  {showLocationDropdown && (
                    <LocationDropdown
                      onSelect={(e) => {
                        onSearchSelect("location", e.name, e._id);
                      }}
                      value={searchData.location}
                      data={locations}
                      loading={loading}
                      rejected={reject}
                    />
                  )}
                </button>
              </div>
              <Divide customstyles={styles.dividexinner} />
              {calFeatureVisibility && (
                <div className={styles.homesearchouterhover}>
                  <button
                    id="btnAddDate"
                    className={`${styles.homesearchouterstartdatewrapper} ${styles.homesearchouteractive}`}
                    onClick={() => {
                      showCalendarLayout(!calendarLayout);
                      handleSearchView();
                    }}
                  >
                    <h3 className={styles.homesearchouterheadings}>
                      Start Date
                    </h3>
                    <h3
                      className={
                        !searchData.startDate
                          ? styles.homesearchouterheadingsPlaceholder
                          : styles.homesearchouterheadingsValues
                      }
                    >
                      {!searchData.startDate
                        ? "Add Date"
                        : moment(searchData.startDate).format(
                            DATE_FORMAT_dd_MMM_YYYY
                          )}
                    </h3>
                  </button>
                </div>
              )}
              <Divide customstyles={styles.dividexinner} />
              {calFeatureVisibility && (
                <div className={styles.homesearchouterhover}>
                  <button
                    id="btnEndDate"
                    className={`${styles.homesearchouterenddatewrapper} ${styles.homesearchouteractive}`}
                    onClick={() => {
                      showCalendarLayout(!calendarLayout);
                      handleSearchView();
                    }}
                  >
                    <h3 className={styles.homesearchouterheadings}>End Date</h3>
                    <h3
                      className={
                        !searchData.endDate
                          ? styles.homesearchouterheadingsPlaceholder
                          : styles.homesearchouterheadingsValues
                      }
                    >
                      {!searchData.endDate
                        ? "Add Date"
                        : moment(searchData.endDate).format(
                            DATE_FORMAT_dd_MMM_YYYY
                          )}
                    </h3>
                  </button>
                </div>
              )}
              {!calFeatureVisibility && (
                <div className={styles.homesearchouterhover}>
                  <button
                    id="btnImFlexible"
                    className={`${styles.homesearchouterstartdatewrapper} ${styles.homesearchouteractive} + text-base`}
                    onClick={() => {
                      showCalendarLayout(!calendarLayout);
                      handleSearchView();
                    }}
                  >
                    <h3 className={styles.homesearchouterheadings}>
                      Select Dates
                    </h3>
                    <h3
                      className={
                        searchData.weekBasis.length === 0 ||
                        searchData.monthBasis.length === 0
                          ? styles.homesearchouterheadingsPlaceholder
                          : styles.homesearchouterheadingsValues
                      }
                    >
                      {searchData.weekBasis.length === 0 ||
                      searchData.monthBasis.length === 0
                        ? "Select Flexible Dates..."
                        : `${searchData.weekBasis} in ${searchData.monthBasis}`}
                    </h3>
                  </button>
                </div>
              )}
            </section>
            <section
              className={"flex w-auto h-full justify-center items-center px-3 "}
            >
              <div
                className={`flex h-12 p-4 rounded-full cursor-pointer hover:bg-gray-200 active:bg-gray-300`}
                onClick={() => toggleVoiceModal(!showVoiceModal)}
              >
                <Image
                  src={"/assets/svg/homemic.svg"}
                  height={16}
                  width={16}
                  objectFit={"contain"}
                  alt="img"
                />
              </div>
              <div
                className={`flex h-12 w-12 justify-center items-center rounded-full bg-primary-pink hover:bg-primary-pinkDark  ml-3 cursor-pointer p-3`}
                onClick={onSearchHandler}
              >
                <Image
                  src={svgs.homesearchicon}
                  height={28}
                  width={28}
                  objectFit={"contain"}
                  alt="img"
                />
              </div>
            </section>
          </section>
          <section className={styles.homesearchoutermobilemain}>
            {calendarLayout && (
              <CalendarRanged
                searchData={searchData}
                setSearchData={setSearchData}
                calFeatureVisibility={calFeatureVisibility}
                setCalFeatureVisibility={setCalFeatureVisibility}
                showCalendarLayout={showCalendarLayout}
                selectedMonths={selectedMonths}
                setSelectedMonths={setSelectedMonths}
                columns={1}
              />
            )}

            <section className={styles.homesearhoutermobilewrapper}>
              <section
                onClick={() => openModel(0)}
                className={styles.homesearchoutermobilehover}
              >
                <button className={styles.homesearchoutermobilecategorybutton}>
                  <section
                    className={styles.homesearchoutermobilecategoryimage}
                  >
                    <Image
                      src={svgs.searchHoarding}
                      height={24}
                      width={24}
                      objectFit={"cover"}
                      layout={"fixed"}
                      alt="img"
                    />
                  </section>
                  <section
                    className={styles.homesearchoutermobilecategoryinput}
                  >
                    <input
                      type="text"
                      name="category"
                      placeholder={"Hoarding"}
                      className={styles.homesearchoutermobilecategoryinputfeild}
                      id="homecategory"
                      onChange={(e) =>
                        onSearchSelect("category", e.target.value, "")
                      }
                      value={searchData.category}
                    />
                  </section>
                  <section
                    className={styles.homesearchoutermobilecategoryimagewrapper}
                  >
                    <AiOutlineDown width={8} height={4} color={"#415F8B"} />
                  </section>
                </button>
                <section
                  className={
                    model === 0
                      ? styles.homesearchoutermobileoverlay
                      : styles.hiddenouter
                  }
                >
                  <CategoryDropdown
                    customstyles={
                      model === 0
                        ? styles.homesearchoutermobilecategory
                        : styles.hiddenouter
                    }
                    onSelect={(e) => onSearchSelect("category", e.name, e._id)}
                  />
                </section>
              </section>
              <section
                onClick={() => openModel(1)}
                className={styles.homesearchoutermobilehover}
              >
                <button className={styles.homesearchoutermobilecategorybutton}>
                  <section
                    className={styles.homesearchoutermobilecategoryimage}
                  >
                    <Image
                      src={svgs.homesearchlocation}
                      height={24}
                      width={24}
                      layout={"fixed"}
                      objectFit={"cover"}
                      alt="img"
                    />
                  </section>
                  <section
                    className={styles.homesearchoutermobilecategoryinput}
                  >
                    <input
                      type="text"
                      name="location"
                      placeholder={"Enter location"}
                      className={styles.homesearchoutermobilecategoryinputfeild}
                      id="homelocation"
                      onChange={(e) =>
                        onSearchSelect("location", e.target.value, "")
                      }
                      value={searchData.location}
                      disabled
                    />
                  </section>
                  <section
                    className={styles.homesearchoutermobilecategoryimagewrapper}
                  >
                    <Image
                      src={svgs.mic}
                      height={24}
                      width={24}
                      objectFit={"cover"}
                      layout={"fixed"}
                      alt="img"
                    />
                  </section>
                </button>
                <section
                  className={
                    model === 1
                      ? styles.homesearchoutermobileoverlay
                      : styles.hiddenouter
                  }
                >
                  <LocationDropdown
                    customstyles={styles.locationdropdownmobile}
                    onSelect={(e) => onSearchSelect("location", e.name, e._id)}
                    value={searchData.location}
                    data={locations}
                    loading={loading}
                    rejected={reject}
                  />
                </section>
              </section>
              <section className={styles.homesearchoutermobilehover}>
                <button className={styles.homesearchoutermobilecategorybutton}>
                  <section
                    className={styles.homesearchoutermobilecategoryimage}
                  >
                    <Image
                      src={svgs.calender}
                      height={24}
                      width={24}
                      layout={"fixed"}
                      objectFit={"cover"}
                      alt="img"
                    />
                  </section>
                  <section
                    className={styles.homesearchoutermobilecategoryinput}
                  >
                    <input
                      type="text"
                      name="startdate"
                      placeholder={"Start date"}
                      className={styles.homesearchoutermobilecategoryinputfeild}
                      onFocus={() => showCalendarLayout(!calendarLayout)}
                    />
                  </section>
                  <Divide customstyles={styles.dividexinner} />
                  <section
                    className={styles.homesearchoutermobilecategoryinput}
                  >
                    <input
                      type="text"
                      name="enddate"
                      placeholder={"End date"}
                      className={styles.homesearchoutermobilecategoryinputfeild}
                      onFocus={() => showCalendarLayout(!calendarLayout)}
                    />
                  </section>
                </button>
              </section>
              <section className={styles.homesearchoutermobilebtnwrapper}>
                <button
                  className={styles.homesearchoutermobilebtn}
                  onClick={onSearchHandler}
                >
                  <section
                    className={"flex w-6 h-24 justify-center items-center"}
                  >
                    <Image
                      src={svgs.homesearchicon}
                      height={24}
                      width={24}
                      objectFit={"cover"}
                      layout={"fixed"}
                      alt="img"
                    />
                  </section>
                  <section
                    className={styles.homesearchoutermobilebtnlabelwrapper}
                  >
                    <span className={styles.homesearchoutermobilebtnlabel}>
                      Search
                    </span>
                  </section>
                </button>
              </section>
            </section>
          </section>
        </>
      );
    case 1:
      return (
        <section className={`${styles.homesearchoutermain}`}>
          <section className={`${styles.homesearchouterwrapper}`}>
            <div className={styles.homesearchouterhover}>
              <button
                className={`${styles.homesearchoutercategorywrapper} ${styles.homesearchouteractive}`}
              >
                <h3 className={styles.homesearchouterheadings}>Category</h3>
                <input
                  className={`${styles.homesearchoutercategoryinput}`}
                  type="text"
                  name="category"
                  id="homecategory"
                  placeholder="Select Category &#x2C5;"
                  onChange={(e) =>
                    onSearchSelect("category", e.target.value, "")
                  }
                  value={searchData.category}
                  autoComplete="off"
                />
                <CategoryDropdown
                  customstyles={styles.homesearchoutercategory}
                  onSelect={(e) => onSearchSelect("category", e.name, e._id)}
                />
              </button>
            </div>
            <Divide customstyles={styles.dividexinner} />
            <div className={styles.homesearchouterhover}>
              <button
                className={`${styles.homesearchouterlocationwrapper} ${styles.homesearchouteractive}`}
              >
                <h3 className={styles.homesearchouterheadings}>Location</h3>
                <input
                  className={`${styles.homesearchouterlocationinput} ${styles.homesearchoutersubheadings}`}
                  type="text"
                  name="location"
                  id="homelocation"
                  placeholder="Where do you want to advertise &#x3F;"
                  onChange={(e) =>
                    onSearchSelect("location", e.target.value, "")
                  }
                  value={searchData.location}
                />
                <LocationDropdown
                  onSelect={(e) => onSearchSelect("location", e.name, e._id)}
                  data={locations}
                  loading={loading}
                  rejected={reject}
                  value={searchData.location}
                />
              </button>
            </div>
          </section>
          <section
            className={
              "flex w-auto h-full justify-center items-center px-3  ml-20"
            }
          >
            <div className={`flex h-12 pl-4 pr-4 rounded-full cursor-pointer `}>
              <Image
                src={"/assets/svg/homemic.svg"}
                height={16}
                width={16}
                objectFit={"contain"}
                alt="img"
              />
            </div>
            <div
              className={`flex h-12 w-12 justify-center items-center rounded-full bg-primary-pink  ml-3 cursor-pointer p-4`}
            >
              <Image
                src={svgs.homesearchicon}
                height={24}
                width={24}
                objectFit={"contain"}
                alt="img"
              />
            </div>
          </section>
        </section>
      );
    case 2:
      return (
        <section className={`${styles.homesearchoutermain}`}>
          <section className={`${styles.homesearchouterwrapper}`}>
            <div className={styles.homesearchouterhover}>
              <button
                className={`${styles.homesearchoutercategorywrapper} ${styles.homesearchouteractive}`}
              >
                <h3 className={styles.homesearchouterheadings}>Category</h3>
                <input
                  className={`${styles.homesearchoutercategoryinput}`}
                  type="text"
                  name="category"
                  id="homecategory"
                  placeholder="Select Category &#x2C5;"
                  onChange={(e) =>
                    onSearchSelect("category", e.target.value, "")
                  }
                  value={searchData.category}
                />
                <CategoryDropdown
                  customstyles={styles.homesearchoutercategory}
                  onSelect={(e) => onSearchSelect("category", e.name, e._id)}
                />
              </button>
            </div>
            <Divide customstyles={styles.dividexinner} />
            <div className={styles.homesearchouterhover}>
              <button
                className={`${styles.homesearchouterlocationwrapper} ${styles.homesearchouteractive}`}
              >
                <h3 className={styles.homesearchouterheadings}>QR Code</h3>
                <input
                  className={`${styles.homesearchouterlocationinput} ${styles.homesearchoutersubheadings}`}
                  type="text"
                  name="scanner"
                  id="homelocation"
                  placeholder="Enter 6-digit QR Code"
                />
              </button>
            </div>
          </section>
          <section
            className={
              "flex w-auto h-full justify-center items-center px-3  ml-20"
            }
          >
            <div className={`flex h-12 pl-4 pr-4 rounded-full cursor-pointer`}>
              <Image
                src={"/assets/svg/scannericon.svg"}
                height={24}
                width={24}
                objectFit={"contain"}
                alt="img"
              />
            </div>
            <div
              className={`flex h-12 w-12 justify-center items-center rounded-full bg-primary-pink  ml-3 cursor-pointer hover:bg-secondary p-4`}
              onClick={() => console.log("search")}
            >
              <Image
                src={svgs.homesearchicon}
                height={24}
                width={24}
                objectFit={"contain"}
                alt="img"
              />
            </div>
          </section>
        </section>
      );
    default:
      return <div></div>;
  }
};

export default Homesearch;
