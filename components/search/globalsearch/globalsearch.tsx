import React, { useState } from "react";
import styles from "./styles/globalsearch.module.scss";
import { icons } from "../../../constants/icons/icons";
import Image from "next/image";
import Filters from "./helper/filters";
import EditLocation from "./helper/editlocation";
import { motion, AnimatePresence } from "framer-motion";
import HoardingModal from "./helper/hoardingmodal";
import { hoardingData } from "../../../constants/api/hoarding";
import { AiOutlineClose } from "react-icons/ai";
import { BiMicrophone, BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/router";

const Globalsearch = () => {
  const [visible, setVisible] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [filtersModal, setFiltersModal] = useState(false);
  const [editLocation, setEditLocation] = useState(false);
  const [hoardingModal, setHoardingModal] = useState(false);

  const locationData = [
    { _id: 0, name: "Delhi", code: "DEL" },
    { _id: 1, name: "Hyderabad", code: "HYD" },
    { _id: 2, name: "Mumbai", code: "MUM" },
    { _id: 3, name: "Banglore", code: "BLR" },
    { _id: 4, name: "Kolkata", code: "KOL" },
    { _id: 5, name: "Chennai", code: "CHE" },
    { _id: 6, name: "Pune", code: "PNE" },
    { _id: 7, name: "Ahemdabad", code: "AMD" },
  ];

  //functions to handle modals
  const ShowEditLocation = () => {
    setEditLocation(true);
    setEditModal(false);
  };
  const ShowHoardingModal = () => {
    setHoardingModal(!hoardingModal);
    setEditModal(false);
  };

  const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  const modal = {
    hidden: {
      y: "100vh",
      opacity: 0,
    },
    visible: {
      y: "10px",
      opacity: 1,
      transition: { delay: 0.5 },
    },
  };

  const router = useRouter();
  const onclicklink = (link: string) => {
    router.push(link);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div onClick={() => onclicklink("/")}>
          <BiArrowBack className={styles.globalsearchArrow} />
        </div>
        <div
          className={styles.hoardingContainer}
          onClick={() => setVisible(!visible)}
        >
          <button
            className={styles.hoardingButton}
            onClick={() => setEditModal(!editModal)}
          >
            Hoarding
          </button>
        </div>
        <div className={styles.locationContainer} onClick={()=> setEditLocation(!editLocation)}>
          <button className={styles.location}>Hyderabad</button>
        </div>
        <div className={styles.dateContainer}>
          <button className={styles.date}>17-Jul - 30-Jul</button>
        </div>

        <div>
          <AiOutlineClose className={styles.closeContainer} />
        </div>
        <div>
          <BiMicrophone className={styles.micContainer} />
        </div>
        <div className={styles.settingsContainer}>
          <Image
            src={icons.setting}
            height={24}
            width={24}
            alt="setting"
            onClick={() => setFiltersModal(!filtersModal)}
          ></Image>
        </div>
        <div className={styles.searchContainer}>
          <Image
            src={icons.searchmobileicon}
            height={24}
            width={24}
            alt="search"
            objectFit={"cover"}
          />
        </div>
      </div>
      <div
        className={styles.modalContainer}
        onMouseLeave={() => setVisible(!visible)}
      >
        {visible && (
          <div className={styles.hoardingContent}>
            {hoardingData.map((data) => (
              <a href="" className={styles.hoardingContentItem} key={data.key}>
                {data.name}
              </a>
            ))}
          </div>
        )}
      </div>
      <div
        className={styles.locationmodalContainer}
        onMouseLeave={()=> setEditLocation(!editLocation)}
      >
        {/* {editLocation && (
          <div className={styles.hoardingContent}>
            {locationData.map((data) => (
              <a href="" className={styles.hoardingContentItem} key={data._id}>
                {data.name}
              </a>
            ))}
          </div>
        )} */}
        {editLocation &&
          <div className={styles.hoardingContent}>
          {locationData.map((component) => (
            <div
              //onClick={() => (onSelect ? onSelect(component) : null)}
              key={component._id}
              className={styles.locationname}
            >
              <div className={styles.hoardingContentItem}>
                <span className='mr-4'>{component.name}</span>
                <span>{component.code}</span>
              </div>
            </div>
          ))}

          </div>
        }
      </div>
      {editModal && (
        <div className={styles.editSearch}>
          <div className={styles.modalHeader}>
            <button onClick={() => setEditModal(!editModal)}>
              <Image
                src={icons.close}
                alt="close"
                height={20}
                width={20}
                className="object-contain"
              />
            </button>
            <h2 className={styles.modalHeaderTitle}>Edit your Search</h2>
            <h2></h2>
          </div>
          <div className={styles.modalBody}>
            <div className={styles.modalBodyHoarding}>
              <Image
                src={icons.textboxsearch}
                alt="category"
                height={15}
                width={15}
                className="object-contain"
              />
              <h3
                className={styles.modalBodyHoardingTitle}
                onClick={ShowHoardingModal}
              >
                Hoarding
              </h3>
            </div>
            <div className={styles.modalBodyLocDate}>
              <div className={styles.modalBodyLocation}>
                <Image
                  src={icons.searchlocation}
                  alt="location"
                  height={20}
                  width={20}
                  className="object-contain"
                />
                <h3
                  className={styles.modalBodyLocationTitle}
                  onClick={ShowEditLocation}
                >
                  Bangalore
                </h3>
              </div>
              <div className={styles.modalBodyDate}>
                <Image
                  src={icons.searchcalender}
                  alt="dates"
                  height={17}
                  width={17}
                  className="object-contain"
                />
                <h3 className={styles.modalBodyDateTitle}>Add Dates</h3>
              </div>
            </div>
          </div>
        </div>
      )}
      <AnimatePresence exitBeforeEnter>
        {filtersModal && (
          <motion.div
            className="backdrop"
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div className="modal" variants={modal}>
              <div className={styles.modalContainerFilters}>
                <Filters
                  setFiltersModal={setFiltersModal}
                  filtersModal={filtersModal}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        {editLocation && (
          <motion.div
            className="backdrop"
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div className="modal" variants={modal}>
              <div className={styles.modalContainerFilters}>
                <EditLocation
                  setEditLocation={setEditLocation}
                  editLocation={editLocation}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        {hoardingModal && (
          <motion.div
            className="backdrop"
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div className="modal" variants={modal}>
              <div className={styles.modalContainerFilters}>
                <HoardingModal
                  setHoardingModal={setHoardingModal}
                  hoardingModal={hoardingModal}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Globalsearch;
