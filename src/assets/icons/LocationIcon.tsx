import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, SvgProps } from "react-native-svg";
import { Colors } from "../../constants/Colors";

export const LocationIcon = (props: SvgProps) => {
  const { fill } = props;
  return (
    <Svg width={14} height={20} viewBox="0 0 14 20" fill="none" {...props}>
      <Path
        d="M12.921 3.425C11.707 1.33 9.551.05 7.154.002a7.483 7.483 0 00-.308 0C4.45.05 2.293 1.33 1.08 3.425a6.963 6.963 0 00-.09 6.88l4.959 9.077.006.012c.219.38.61.606 1.046.606.437 0 .828-.227 1.046-.606l.007-.012 4.959-9.077a6.963 6.963 0 00-.09-6.88zm-5.92 5.637A2.816 2.816 0 014.187 6.25 2.816 2.816 0 017 3.437 2.816 2.816 0 019.813 6.25 2.816 2.816 0 017 9.062z"
        fill={fill || Colors.COLOR_000000}
      />
    </Svg>
  );
};
