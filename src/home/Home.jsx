import Bannerr from "./Bannerr";
import Homenav from "./Homenav";

import { Midslide } from "./Midslide.jsx";
import Midsection from "./Midsection.jsx";

import { Fragment, useEffect } from "react";

import { Box, styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/actions/productAction";

// import {Slide} from "./Slide";
import Slide from "./Slide.jsx";

const Padding = styled(Box)`
  padding: 10px;
  background: #f2f2f2;
`;

export const Home = () => {
  const { products } = useSelector((state) => state.getProducts);

  //  console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Fragment>
      <Homenav />
      <Padding>
        <Bannerr />
        <Midslide products={products} title="Deal of the day" timer={true} />
        <Slide products={products} title="Big Sell of the year" timer={false} />
        <Midsection />
        <Slide products={products} title="Session sell" timer={false} />
        <Slide products={products} title="Discounts for You" timer={false} />
        <Slide products={products} title="Suggested Items" timer={false} />
        <Slide products={products} title="Top Selection" timer={false} />
        <Slide products={products} title="Recommended Items" timer={false} />
      </Padding>
    </Fragment>
  );
};
