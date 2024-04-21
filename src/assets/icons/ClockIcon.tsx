import * as React from "react";
import Svg, {  ClipPath, Defs, G, Path, SvgProps } from "react-native-svg";

export const ClockIcon = (props: SvgProps) => {
  return (
    <Svg
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_1_512)" fill="#34495E">
        <Path d="M8.138 7.06L6.465 5.805V3.249a.464.464 0 10-.93 0v2.788c0 .147.07.285.186.372l1.86 1.394a.462.462 0 00.65-.093.464.464 0 00-.093-.65z" />
        <Path d="M6 0C2.691 0 0 2.691 0 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 11.07A5.077 5.077 0 01.93 6 5.077 5.077 0 016 .93 5.076 5.076 0 0111.07 6 5.077 5.077 0 016 11.07z" />
      </G>
      <Defs>
        <ClipPath id="clip0_1_512">
          <Path fill="#fff" d="M0 0H12V12H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
