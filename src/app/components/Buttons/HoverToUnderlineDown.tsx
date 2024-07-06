"use client";

import { Box, Link } from "@mui/material";
import { useState } from "react";
import { keyframes } from "@emotion/react";

type TProps = {
  ButtonName: string;
};

// 16行目のtranslateY()内の数値を弄るとアンダーラインの開始位置が変わります
// 20行目のtranslateY()内の数値を弄るとアンダーラインの停止位置が変わります
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HoverToUnderlineDown: React.FC<TProps> = ({ ButtonName }) => {
  const [hover, setHover] = useState(false);

  return (
    <Box
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link
        href="/"
        underline="none"
        color={"black"}
        p={1}
        fontSize={21}
        sx={{ cursor: "pointer" }}
      >
        {ButtonName}
      </Link>
      <Box
        width={80}
        height={2}
        bgcolor="black"
        sx={{
          visibility: hover ? "visible" : "hidden",
          animation: hover ? `${fadeIn} 0.3s ease-in-out` : "none",
        }}
      />
    </Box>
  );
};

export default HoverToUnderlineDown;
