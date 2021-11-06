/* eslint-disable react/no-unescaped-entities */
import "regenerator-runtime/runtime";
import React, { useState } from "react";
import localStyles from "./styles.module.scss";
import { svgs } from "../../constants/icons/icons";
import Image from "next/image";
import { motion } from "framer-motion";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useRouter } from "next/router";
import VoiceMicButton from "../../subComponents/VoiceMicButton/VoiceMicButton";

interface Props {
  searchData: Object;
  setCategoriesAndLocation(args: Object): void;
  handler(args: boolean): void;
}

const VoiceRecognition: React.FC<Props> = ({
  searchData,
  setCategoriesAndLocation,
  handler,
}) => {

  // for showing message after mic goes off
  const [message, setMessage] = useState("");

  //router to redirect to search page
  const router = useRouter();

  //list of commands voice recognition supports
  const commands = [
    {
      command: "search * in *",
      callback: (category, location) => {
        setMessage("Searching");
        router.push(`search?category=${category}&location=${location}`);
      },
    },
    {
      command: "search hoarding in *",
      callback: (location) => {
        setMessage("Searching");
        router.push(`search?category=hoarding&location=${location}`);
      },
    },
    {
      command: "set category * in *",
      callback: (category, location) => {
        setMessage("Sure thing...");
        setCategoriesAndLocation({
          ...searchData,
          category: category,
          location: location,
        });
        handler(false);
      },
    },
    {
      command: "clear",
      callback: ({ resetTranscript }) => resetTranscript(),
    },
  ];

  //destructuring speech recognition hooks
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition({ commands });

  //fires up for continuous listening 
  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true });
    resetTranscript;
  };

//switches between transcripted text when listening and appropriate message for output...
  const showMessage = () => {
    if (listening) {
      return transcript;
    } else {
      return message;
    }
  };

  //just in case browser does not support speech recognition
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
      <div className={localStyles.mainWrapper}>
        <div className={localStyles.mainSubRowLayout}>
          <VoiceMicButton
            listening={listening}
            startListening={startListening}
            stopListening={SpeechRecognition.stopListening}
          />
          <div className={localStyles.leftColumn}>
            <h1 className={localStyles.headingDarkBigBold}>
              {listening ? `Listening...` : `Speak Now...`}
            </h1>
            <p className={localStyles.captionDarkItalic}>
              {`Try Saying, "Search Hoarding in Mumbai"`}
            </p>
          </div>
        </div>
        <h1 className={localStyles.captionPink}>{showMessage()}</h1>
      </div>
    </motion.div>
  );
};
export default VoiceRecognition;
