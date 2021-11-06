import React from 'react'
import Image from 'next/image';
import localStyles from "./styles.module.scss";
import {svgs} from "../../constants/icons/icons";
interface Props{
    startListening(args:any) : void;
    listening :boolean;
    stopListening(args:any):void;
}
 const VoiceMicButton:React.FC<Props> = ({startListening, listening,stopListening}) => {
    return (
        <button
        className={`${localStyles.defaultBehaviour} ${
          listening
            ? localStyles.activeBehaviour
            : " bg-extra-blue"
        }`}
        onTouchStart={startListening}
        onMouseDown={startListening}
        onTouchEnd={stopListening}
        onMouseUp={stopListening}
      >
        <Image
          src={listening ? svgs.micPink : svgs.mic}
          width={50}
          height={50}
        />
      </button>
    )
}
export default VoiceMicButton;
