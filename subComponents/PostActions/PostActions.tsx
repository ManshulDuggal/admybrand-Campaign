import React, { useState } from "react";
import { svgs } from "../../constants/icons/icons";
import localStyles from "./styles.module.scss";
import IconBtn from "../../components/IconBtn/IconBtn";
import { postActions } from "./api";
import {
  Tab,
  TabLayout,
  TabList,
  TabPanel,
  TabPanels,
} from "../../elements/TabLayout/TabLayout";
import InteractTab from "./helpers/InteractTab/InteractTab";
import RepostTab from "./helpers/RepostTab/RepostTab";
import { motion } from "framer-motion";
import {
  Dropdown,
  DropdownBtn,
  DropdownPanel,
} from "../../elements/DropdownR/DropDownR";
import LikeTab from "./helpers/LikeTab/LikeTab";

const PostActions = () => {
  const [open, setOpen] = useState(-1);
  const [reaction, setReaction] = useState({type:"Like", img:svgs.like})
  return (
    <div className={localStyles.mainWrapper}>
      <TabLayout open={open} setOpen={setOpen}>
        <TabList className="flex justify-between">
          <div className="flex">
            <Dropdown>
              <DropdownBtn>
                <IconBtn text={reaction.type} icon={reaction.img}/>
              </DropdownBtn>
              <DropdownPanel>
              <LikeTab setReaction={setReaction}/>
              </DropdownPanel>
            </Dropdown>
            {postActions.map((item, index) => (
              <Tab idx={index} key={index}>
                <IconBtn text={item.type} icon={item.icon} />
              </Tab>
            ))}
          </div>
          <IconBtn text="Save" icon={svgs.save} />
        </TabList>
        <TabPanels>
          {postActions.map((item, index) => (
            <TabPanel idx={index} className="flex flex-col" key={index}>
              {item.type === "Interact" && <InteractTab />}
              {item.type === "Repost" && <RepostTab />}
            </TabPanel>
          ))}
        </TabPanels>
      </TabLayout>
    </div>
  );
};
export default PostActions;
