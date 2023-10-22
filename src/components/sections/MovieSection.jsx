"use client"
import { blockbusters } from '@/data/data'
import { Box, Container, Flex, Heading, TagLeftIcon } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { MovieCard } from '..'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FreeMode, Pagination, Navigation } from 'swiper/modules';


function SampleNextArrow(props) {
   const { className, style, onClick } = props;
   return (
     <Box
       className={className}
       width={'fit-content'}
       style={{...style, display: "block" }}
       onClick={onClick}
     />
   );
 }
 
 function SamplePrevArrow(props) {
   const { className, style, onClick } = props;
   return (
     <div
       className={className}
       style={{ ...style, display: "block" }}
       onClick={onClick}
     />
   );
 }
 

const MovieSection = ({header, header2}) => {
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      accessibility: true,responsive: [
         {
           breakpoint: 1024,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 3,
             infinite: true,
             dots: true
           }
         },
         {
           breakpoint: 600,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 2,
             initialSlide: 2
           }
         },
         {
           breakpoint: 480,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1
           }
         }
       ],
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
  return (
    <Box my={'60px'}>
      <Container px={'40px'} maxW={'1300px'}>
         <Flex color={'#fff'} justify={'space-between'} align={'center'}>
            <Heading mb={5}>{header}<span style={{color: '#205090'}}>{header2}</span></Heading>
            <Link href={'#'}>See more</Link>
         </Flex>

         <Slider {...settings}>
            {
               blockbusters.map((movie, index) => (
                     <MovieCard key={index} movie={movie}/>
               ))
            }
        </Slider>

      </Container>
    </Box>
  )
}

export default MovieSection