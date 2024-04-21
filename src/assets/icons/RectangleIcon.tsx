import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

export const RectangleIcon = (props: SvgProps) => {
  const { fill } = props;
  return (
    <Svg
      width={14}
      height={19}
      viewBox="0 0 14 19"
      fill="none"
      {...props}
    >
      <Path
        d="M0 1a1 1 0 011-1h11.936a1 1 0 011 1v16.571c0 .893-1.082 1.338-1.71.704l-4.417-4.454a1 1 0 00-1.405-.015L1.695 18.36c-.634.614-1.695.165-1.695-.718V1z"
        fill={fill || "#D35400"}
      />
    </Svg>
  )
}

