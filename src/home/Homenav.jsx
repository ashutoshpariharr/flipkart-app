import { Box, Typography, styled } from "@mui/material";
import { navData } from "../data/Data";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "55px 130px 0 130px",
  justifyContent: "space-between",
  overflow: "hidden",
  [theme.breakpoints.down("lg")]: {
    margin: 0,
  },
}));

const Text = styled(Typography)`
  font-size: 14px;
  font-weight: bold;
  font-family: inherit;
`;

const Components = styled(Box)`
  padding: 12px 8px;
  text-align: center;
`;

const Wrapper = styled(Box)`
  background-color: #fff;
`;

const Homenav = () => {
  return (
    <Wrapper>
      <Container>
        {navData.map((data, index) => (
          <Components key={index}>
            <img src={data.url} alt={`Nav-img-${index}`} width={60} />
            <Text>{data.text}</Text>
          </Components>
        ))}
      </Container>
    </Wrapper>
  );
};

export default Homenav;
