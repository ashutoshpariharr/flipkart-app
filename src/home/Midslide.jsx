import { Box, Stack } from "@mui/material";
import Slide from "./Slide";
import styled from "@emotion/styled";

const Leftcomponent = styled(Box)`
  width: 83%;
`;

const Imagebox = styled(Box)`
  background: #ffffff;
  padding: 5px;
  margin-top: 10px;
  margin-left: 10px;
  width: 17%;
  text-align: center;
`;
// const Imagebox = styled(Box)(({ theme }) => ({
//     [theme.breakpoints.down('sm')]: {
//         display: 'none'
//     }
// }));

export const Midslide = ({ products, title, timer }) => {
  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";
  return (
    <Stack direction={"row"}>
      <Leftcomponent>
        <Slide products={products} title={title} timer={timer} />
      </Leftcomponent>
      <Imagebox
        styled={styled(Box)(({ theme }) => ({
          [theme.breakpoints.down("sm")]: {
            display: "none",
          },
        }))}
      >
        <img src={adURL} alt="add" width={217} />
      </Imagebox>
    </Stack>
  );
};