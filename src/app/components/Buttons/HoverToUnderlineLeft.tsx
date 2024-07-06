"use client";

import { Box, Link } from "@mui/material";
import { useState, useEffect } from "react";
import { keyframes } from "@emotion/react";

type TProps = {
  ButtonName: string;
};

const fadeIn = keyframes`
  from {
    width: 0;
  }
  to {
    width: 82px;
  }
`;

const fadeOut = keyframes`
  from {
    width: 82px;
  }
  to {
    width: 0;
  }
`;

export const HoverToUnderlineLeft: React.FC<TProps> = ({ ButtonName }) => {
  const [hover, setHover] = useState(false);
  const [visibility, setVisibility] = useState("hidden");

  useEffect(() => {
    if (hover) {
      setVisibility("visible");
    } else {
      const endHover = setTimeout(() => setVisibility("hidden"), 300);
      return () => clearTimeout(endHover);
    }
  }, [hover]);

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
          visibility: visibility,
          animation: `${hover ? fadeIn : fadeOut} 0.3s ease-in-out`,
        }}
      />
    </Box>
  );
};

export default HoverToUnderlineLeft;
