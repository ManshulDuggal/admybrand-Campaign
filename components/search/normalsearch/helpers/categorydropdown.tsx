import React from "react";
import { useAppSelector } from "../../../../store/store";
import styles from "../../normalsearchouter/styles/normalsearchouter.module.scss";

interface propobject {
  _id: number;
  name: string;
}

interface props {
  customstyles?: string;
  onSelect?: (component: propobject) => void;
}

const CategoryDropdown = ({ customstyles, onSelect }: props) => {
  const data = [
    { key: 0, heading: "Influencer" },
    { key: 1, heading: "Google" },
    { key: 2, heading: "Facebook" },
    { key: 3, heading: "Online Sellers" },
    { key: 4, heading: "TV & OTT" },
    { key: 5, heading: "Radio" },
    { key: 6, heading: "Print Media" },
    { key: 7, heading: "Digital OOH" },
    { key: 8, heading: "Hoarding" },
    { key: 9, heading: "Avenue" },
    { key: 10, heading: "Hyperlocal" },
    { key: 11, heading: "Events" },
    { key: 12, heading: "Transport" },
    { key: 13, heading: "BTL Branding" },
    { key: 14, heading: "Movies" },
    { key: 15, heading: "Programmatic" },
    { key: 16, heading: "Social Media" },
    { key: 18, heading: "Mobile" },
    { key: 19, heading: "Website" },
    { key: 20, heading: "SEO & ASO" },
    { key: 21, heading: "Performance" },
    { key: 22, heading: "PR" },
    { key: 17, heading: "Others" },
  ];

  const categories = useAppSelector((state) => state.categories.mainCategories);

  return (
    <div className={`${styles.categorydropdown} ${customstyles}`}>
      <div className=" w-full">
        {categories.map((component) => (
          <h1
            onClick={(e) => (onSelect ? onSelect(component) : null)}
            key={component._id}
            className={styles.categoryheading}
          >
            {component.name}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default CategoryDropdown;
