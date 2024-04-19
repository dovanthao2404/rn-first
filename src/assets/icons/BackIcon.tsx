import * as React from "react";
import Svg, {  Path, SvgProps } from "react-native-svg";

export const BackIcon = (props: SvgProps) => {
  return (
    <Svg width={5} height={10} viewBox="0 0 8 12" fill="none" {...props}>
      <Path
        d="M6.5 11L1.5 6L6.5 1"
        stroke="black"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
