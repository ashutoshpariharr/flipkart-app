import React from "react";
import Grid from "@mui/material/Grid";
import { imageURL } from "../data/Data";
import styled from "@emotion/styled";

const Image = styled("img")({
  width: "100%",
  display: "flex",
  marginTop: 10,
  justifyContent: "space-between",
});

const Midsection = () => {
  const url =
    "https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50";
  return (
    <>
      <Grid container>
        {imageURL.map((image, index) => (
          <Grid item key={index} lg={4} md={4} sm={12}>
            <img
              src={image}
              alt={`Banner images ${index}`}
              style={{ width: "100%" }}
            />
          </Grid>
        ))}
      </Grid>
      <Image src={url} alt="covid" />
    </>
  );
};

export default Midsection;
