import React from "react";
import { motion } from 'framer-motion';

const Logo = (props) => (
  <motion.svg initial={{ y: -200 }}  animate={{ y: 10 }} className="logo" height={200} {...props}>
    <g>
      <title>{"Layer 1"}</title>
      <ellipse
        fill="none"
        strokeWidth={5}
        cx={110}
        cy={110}
        id="svg_2"
        rx={22}
        ry={22}
        stroke="#5D3AC5"
      />
      <rect
        fill="#5D3AC5"
        stroke="#5D3AC5"
        x={118}
        y={100}
        width={7}
        height={30}
        id="svg_5"
        rx={3}
      />
      <rect
        fill="#5D3AC5"
        stroke="#5D3AC5"
        x={95}
        y={100}
        width={7}
        height={30}
        id="svg_6"
        rx={3}
      />
    </g>
  </motion.svg>
);

export default Logo;
