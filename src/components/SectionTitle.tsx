import React from "react";
import MoreSVG from "../assets/More.svg";
import Text from "./Text";
import CadetRight from "../assets/cadet-right.svg";

interface SectionTitleProps {
  moreButton?: boolean;
  onButtonPress?: () => void;
  title: string;
}
const SectionTitle:React.FC<SectionTitleProps> = ({ title, onButtonPress, moreButton = true }) => {
  return (
    <div className="flex justify-between items-center mt-5 mb-5">
      <Text className="text-lg font-semibold">{title}</Text>
      {moreButton ? (
        <button onClick={onButtonPress}>
          <img src={MoreSVG} className="w-5.5 h-5.5" />
        </button>
      ) : (
        <button className="flex items-center" onClick={onButtonPress}>
          <Text className="text-sm text-emerald">View All</Text>
          <img src={CadetRight} className="h-4.5 w-4.5" />
        </button>
      )}
    </div>
  );
};

export default SectionTitle;
