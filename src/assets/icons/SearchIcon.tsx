import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import { Colors } from "../../constants/Colors";

export const SearchIcon = (props: SvgProps) => {
  const { fill } = props;
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <Path
        d="M19.756 18.577l-5.688-5.687a7.878 7.878 0 001.765-4.973C15.833 3.552 12.281 0 7.917 0 3.552 0 0 3.552 0 7.917s3.552 7.916 7.917 7.916a7.878 7.878 0 004.973-1.765l5.687 5.688a.831.831 0 001.179 0 .832.832 0 000-1.179zm-11.84-4.41a6.256 6.256 0 01-6.25-6.25 6.256 6.256 0 016.25-6.25 6.256 6.256 0 016.25 6.25 6.256 6.256 0 01-6.25 6.25z"
        fill={fill || Colors.COLOR_00000050}
        fillOpacity={0.5}
      />
    </Svg>
  );
};
