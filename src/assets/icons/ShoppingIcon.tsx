import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, SvgProps } from "react-native-svg";

export const ShoppingIcon = (props: SvgProps) => {
  const { fill } = props;
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <G
        clipPath="url(#clip0_1_842)"
        fill={fill || "#D35400"}
      >
        <Path d="M13.125 1.25h-1.357A1.877 1.877 0 0010 0a1.88 1.88 0 00-1.769 1.25H6.875a.625.625 0 00-.625.625v2.5c0 .345.28.625.625.625h6.25c.345 0 .625-.28.625-.625v-2.5a.625.625 0 00-.625-.625z" />
        <Path d="M15.75 3H14.5v1.875a1.877 1.877 0 01-1.875 1.875h-6.25A1.877 1.877 0 014.5 4.875V3H3.25C2.561 3 2 3.561 2 4.25v15c0 .701.549 1.25 1.25 1.25h12.5c.701 0 1.25-.549 1.25-1.25v-15C17 3.549 16.451 3 15.75 3zM9.318 14.068l-2.5 2.5a.628.628 0 01-.885 0l-1.25-1.25a.625.625 0 01.883-.884l.809.807 2.057-2.057a.625.625 0 01.886.884zm0-5l-2.5 2.5a.628.628 0 01-.885 0l-1.25-1.25a.625.625 0 01.883-.884l.809.807 2.057-2.057a.625.625 0 01.886.884zm4.557 6.432h-2.5a.625.625 0 010-1.25h2.5a.625.625 0 010 1.25zm0-5h-2.5a.625.625 0 010-1.25h2.5a.625.625 0 010 1.25z" />
      </G>
      <Defs>
        <ClipPath id="clip0_1_842">
          <Path fill={fill || "#D35400"} d="M0 0H20V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
