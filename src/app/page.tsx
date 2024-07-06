import { Box } from "@mui/material";
import HoverToExpansion from "./components/Buttons/HoverToExpansion";
import HoverToUnderline from "./components/Buttons/HoverToUnderline";
import HoverToUnderlineDown from "./components/Buttons/HoverToUnderlineDown";
import HoverToUnderlineUp from "./components/Buttons/HoverToUnderlineUp";
import HoverToUnderlineLeft from "./components/Buttons/HoverToUnderlineLeft";
import HoverToUnderlineRight from "./components/Buttons/HoverToUnderlineRight";
import HoverToUnderlinePass from "./components/Buttons/HoverToUnderlinePass";

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
        <HoverToUnderlineRight ButtonName={"Button"} />
        <HoverToUnderlinePass ButtonName={"Button"} />
      </Box>
    </>
  );
}

export default Home;
