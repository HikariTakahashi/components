"use client";

import { Box, Link } from "@mui/material";
import { useState } from "react";
import { keyframes } from "@emotion/react";

type TProps = {
  ButtonName: string;
};

const Extension = keyframes`
  from {
    width: 0;
  }
  to {
    width: 82px;
  }
`;

export const HoverToUnderlineLeft: React.FC<TProps> = ({ ButtonName }) => {
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
        width={82}
        height={2}
        bgcolor="black"
        sx={{
          visibility: hover ? "visible" : "hidden",
          animation: hover ? `${Extension} 0.3s ease-in-out` : "none",
        }}
      />
    </Box>
  );
};

export default HoverToUnderlineLeft;
