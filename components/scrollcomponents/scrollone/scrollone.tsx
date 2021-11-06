import React, { useEffect } from "react";
import styles from "./styles/scrollone.module.scss";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { icons } from "../../../constants/icons/icons";
import Mediummenumodal from "../../modal/mediummenumodal/mediummenumodal";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { getCategories } from "../../../store/actions/categories";
import SkeletonLoader from "../../../elements/SkeletonLoader/SkeletonLoader"

interface Itemtype {
  _id: string;
  name: string;
  logo_url: string;
}

const Scrollone = () => {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  const [subdata, setSubdata] = React.useState([]);
  const [subdatasub, setSubdataSub] = React.useState([]);
  const dispatch = useAppDispatch();

  const onLeft = () => {
    const getBtn: any = document.querySelector(
      ".scrollone_scrollcontainer__il-F3 .swiper-button-prev"
    );
    getBtn.click();
  };
  const onRight = () => {
    const getBtn: any = document.querySelector(
      ".scrollone_scrollcontainer__il-F3 .swiper-button-next"
    );
    getBtn.click();
  };

  //dispatch category request
  const fetchCategories = async () => {
    await dispatch(getCategories());

    // // get all categories
    // const allcategories = useAppSelector((state) => state.categories.categories);
  };
  useEffect(() => {
    fetchCategories();
    // setCategories(useAppSelector((state) => state.categories.mainCategories));
    // setAllCategories(useAppSelector((state) => state.categories.categories))
  }, []);
  // eslint-disable-line
  // comment above is intentional, do not remove it
  // get main categories
  const categories = useAppSelector((state) => state.categories.mainCategories);
  // get all categories
  const allcategories = useAppSelector((state) => state.categories.categories);
  //filter subcategories
  console.log(categories.length, "Categories");
  const subCategory = (id: string) => {
    const data = allcategories.filter(
      (c: { parent_id: string }) => c.parent_id === id
    );
    setSubdata(data);
  };
  const subCategorySub = (id: String) => {
    if (id.length !== 0) {
      const data = allcategories.filter(
        (c: { parent_id: string }) => c.parent_id === id
      );
      setSubdataSub(data);
    } else {
      setSubdataSub([]);
    }
  };

  return (
    <>
      {
        <div className={styles.scrollxwrapper}>
          <div onClick={() => onLeft()} className={styles.leftbtncontainer}>
            <Image
              alt="sada"
              className={styles.hoverbtns}
              src={icons.leftbtnarrow}
              height={40}
              width={40}
              objectFit={"contain"}
            />
          </div>
          <div className={styles.scrollcontainer}>
            {categories.length !== 0  ? (
              <Swiper
                className={"overflow-visible"}
                spaceBetween={5}
                slidesPerView={"auto"}
                loop={true}
                navigation
                breakpoints={{
                  // when window width is >= 320px
                  100: {
                    slidesPerView: 3,
                    spaceBetween: 2,
                    slidesPerGroup: 3,
                  },
                  860: {
                    slidesPerView: 6,
                    spaceBetween: 20,
                    slidesPerGroup: 8,
                  },
                  1096: {
                    slidesPerView: 8,
                    spaceBetween: 20,
                    slidesPerGroup: 8,
                  },
                  // when window width is >= 480px
                  1570: {
                    slidesPerView: 8,
                    spaceBetween: 30,
                    slidesPerGroup: 8,
                  },
                  // when window width is >= 640px
                  1948: {
                    slidesPerView: 12,
                    spaceBetween: 40,
                    slidesPerGroup: 8,
                  },
                }}
              >
                {categories.map((item: Itemtype, i) => (
                  <SwiperSlide
                    className={"relative"}
                    key={item._id}
                    virtualIndex={i}
                    onMouseEnter={() => {
                      subCategory(item._id);
                      setSubdataSub([]);
                    }}
                  >
                    <div className={styles.scrollitems}>
                      <div className={styles.topcontainer}>
                        <div className={styles.imagecontainer}>
                          {item.logo_url !== "" && (
                            <Image
                              alt='img'
                              src={item.logo_url}
                              height={40}
                              width={40}
                              objectFit={"contain"}
                              priority
                            />
                          )}
                        </div>
                      </div>
                      <div className={styles.bottomcontainer}>
                        <div className={styles.namecontainer}>
                          <h3 className={styles.namecontainertext}>
                            {item.name}
                          </h3>
                          <div className={styles.downicon}>
                            <Image
                              alt="saad"
                              src={icons.bottomarrow}
                              height={24}
                              width={24}
                              objectFit={"contain"}
                              priority
                            />
                          </div>
                          <Mediummenumodal
                            customclass={` ${
                              ((i + 1) % 8 === 0 || (i + 1) % 3 === 0) &&
                              i !== 0
                                ? styles.mediummenupopupoffset
                                : styles.mediummenupopup
                            }`}
                          >
                            <div className={styles.menuwrapper}>
                              <div className={styles.menuinnercontainer}>
                                {subdata.map((item: Itemtype, index) => {
                                  return (
                                    <div
                                      key={item._id}
                                      className={styles.menuitemscontainer}
                                    >
                                      <h3
                                        className={styles.itemnametext}
                                        onMouseEnter={() => {
                                          const data = allcategories.filter(
                                            (c: { parent_id: string }) => c.parent_id === item._id
                                          );
                                          if(data.length !== 0) 
                                            subCategorySub(item._id)
                                          }
                                        }
                                      >
                                        {item.name}
                                      </h3>
                                    </div>
                                  );
                                })}
                              </div>
                              {subdatasub.length !== 0 && (
                                <div className={styles.menuinnercontainer}>
                                  {subdatasub.map((subitem) => (
                                    <div
                                      key={subitem._id}
                                      className={styles.menuitemscontainer}
                                    >
                                      <h3 className={styles.itemnametext}>
                                        {subitem.name}
                                      </h3>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </Mediummenumodal>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : [0,1,2].map(item=><SkeletonLoader key={item}/>)}
          </div>
          <div onClick={() => onRight()} className={styles.rightbtncontainer}>
            <Image
              alt="sadsa"
              className={styles.hoverbtns}
              src={icons.rightbtnarrow}
              height={40}
              width={40}
              objectFit={"contain"}
            />
          </div>
        </div>
      }
    </>
  );
};

export default Scrollone;
