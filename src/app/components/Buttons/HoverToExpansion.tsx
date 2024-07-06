import { Box, Button, Typography } from "@mui/material";

type TProps = {
  ButtonName: string;
};
export const HoverToExpansion: React.FC<TProps> = ({ ButtonName }) => {
  return (
    <Box>
      <Button
        sx={{
          "&:hover": {
            // scale()の中の数値を弄ると拡大サイズが変わります
            transform: "scale(1.1)",
            // 数値を弄ると拡大までの時間が変わります
            transition: "transform 0.5s",
          },
        }}
      >
        <Typography color={"black"}>{ButtonName}</Typography>
      </Button>
    </Box>
  );
};

export default HoverToExpansion;
