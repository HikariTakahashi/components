"use client";

import { Box, Link } from "@mui/material";
import { useEffect, useState } from "react";
import { keyframes } from "@emotion/react";

type TProps = {
  ButtonName: string;
};

const FadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const FadeOut = keyframes`
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(-4px);
  }
`;

export const HoverToUnderlineDown: React.FC<TProps> = ({ ButtonName }) => {
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
        width={80}
        height={2}
        bgcolor="black"
        sx={{
          visibility: visibility,
          animation: `${hover ? FadeIn : FadeOut} 0.3s ease-in-out`,
        }}
      />
    </Box>
  );
};

export default HoverToUnderlineDown;
