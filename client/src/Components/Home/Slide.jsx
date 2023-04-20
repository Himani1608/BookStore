import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Countdown from "react-countdown";
import {Link} from 'react-router-dom';

import { Box, Typography, Button, Divider, styled } from "@mui/material";

import React from "react";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Component = styled(Box)`
  margin-top: 10px;
  background-color: #fff;
`;
const Deal = styled(Box)`
  padding: 15px 20px;
  display: flex;
`;
const Timer = styled(Box)`
  display: flex;
  margin-left: 10px;
  align-items: center;
  color: #7f7f7f;
`;
const Dealtext = styled(Typography)`
  font-size: 22px;
  font-weight: 600;
  margin-right: 25px;
`;
const ViewAllButton = styled(Button)`
  margin-left: auto;
  background-color: #000;
  border-radius: 2px;
  font-size: 13px;
  font-weight: 600;
`;
const Image = styled('img')({
    width:'auto',
    height:150
})
const Text = styled(Typography)`
font-size: 14px;
margin-top:5px
`

const Slide = ({ products, title, timer }) => {
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <Box variant="spaan">
        {hours} : {minutes} : {seconds} Left
      </Box>
    );
  };
  // console.log(products);
  return (
    <Component>
      <Deal>
        <Dealtext>{title}</Dealtext>
        {
            timer &&         
            <Timer>
            <img src={timerURL} alt="timer" style={{ width: 22 }} />
            <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
          </Timer>
        }
        <ViewAllButton variant="contained">View All</ViewAllButton>
      </Deal>
      <Divider />
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        showDots={false}
        centerMode={true}
        slidesToSlide={1}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {products.map((data) => {
          return(
            <Link to = {`product/${data.id}`} style={{textDecoration: 'none'}}>
            <Box textAlign={"center"} style={{padding:"20px 15px"}}>
            <Image src={data.url} alt="slide" />
            <Text style={{fontWeight:600 , color:"#212121"}}>{data.title.shortTitle}</Text>
            <Text style={{color:"green"}}>{data.discount}</Text>
            </Box>
            </Link>
            );
        })
        }
      </Carousel>
    </Component>
  );
};

export default Slide;
