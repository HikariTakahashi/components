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
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const FadeOut = keyframes`
  from {
    opacity: 0;
    transform: translateY(0);
  }
  to {
    opacity: 1;
    transform: translateY(8px);
  }
`;

export const HoverToUnderlineUp: React.FC<TProps> = ({ ButtonName }) => {
  const [hover, setHover] = useState(false);
  const [visibility, setVisibility] = useState("hidden");

  useEffect(() => {
    if (hover) {
      setVisibility("visible");
    } else {
      const timeout = setTimeout(() => setVisibility("hidden"), 300);
      return () => clearTimeout(timeout);
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

export default HoverToUnderlineUp;
function setVisibility(arg0: string) {
  throw new Error("Function not implemented.");
}
