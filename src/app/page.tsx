import { Box } from "@mui/material";
import HoverToExpansion from "./components/Buttons/HoverToExpansion";
import HoverToUnderline from "./components/Buttons/HoverToUnderline";
import HoverToUnderlineDown from "./components/Buttons/HoverToUnderlineDown";
import HoverToUnderlineUp from "./components/Buttons/HoverToUnderlineUp";
import HoverToUnderlineLeft from "./components/Buttons/HoverToUnderlineLeft";

function Home() {
  return (
    <>
      <h1>ButtonComponents</h1>
      <Box display={"flex"} flexWrap={"wrap"}>
        <HoverToExpansion ButtonName={"Button"} />
        <HoverToUnderline ButtonName={"Button"} />
        <HoverToUnderlineDown ButtonName={"Button"} />
        <HoverToUnderlineUp ButtonName={"Button"} />
        <HoverToUnderlineLeft ButtonName={"Button"} />
      </Box>
    </>
  );
}

export default Home;
