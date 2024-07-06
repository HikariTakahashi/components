"use client";

import { Box, Link } from "@mui/material";
import { useState } from "react";

type TProps = {
  ButtonName: string;
};

export const HoverToUnderline: React.FC<TProps> = ({ ButtonName }) => {
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
        borderRadius={0.5}
        sx={{ visibility: hover ? "visible" : "hidden" }}
      />
    </Box>
  );
};

export default HoverToUnderline;
