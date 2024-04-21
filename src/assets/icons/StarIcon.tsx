import * as React from "react";
import Svg, { ClipPath, Defs, G, Path, SvgProps } from "react-native-svg";

export const StarIcon = (props: SvgProps) => {
  return (
    <Svg
      width={10}
      height={10}
      viewBox="0 0 10 10"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_1_525)">
        <Path
          d="M9.974 3.836a.53.53 0 00-.458-.365L6.63 3.208 5.49.538a.532.532 0 00-.978 0L3.37 3.208l-2.887.263a.531.531 0 00-.301.93l2.181 1.913-.643 2.834a.531.531 0 00.79.574L5 8.234l2.489 1.488a.53.53 0 00.79-.574l-.643-2.834L9.818 4.4a.532.532 0 00.156-.565z"
          fill="#FFC107"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_525">
          <Path fill="#fff" d="M0 0H10V10H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
