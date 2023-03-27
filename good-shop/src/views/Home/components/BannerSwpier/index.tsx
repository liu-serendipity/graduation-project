import React, { useState } from 'react';
import { Box, AspectRatio, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';

export const BannerSwiper = ({ bannerList = [] }: any) => {
  const [swiperIndex, setSwiperIndex] = useState(0);
  const navigate = useNavigate();

  const jumpToWhere = (target: string) => {
    target
      ? navigate(target)
      : () => {
          return null;
        };
  };

  return (
    <Swiper
      slidesPerView={1}
      className='home_banner'
      modules={[Autoplay]}
      autoplay={{ delay: 3000 }}
      speed={300}
      loop={true}
      centeredSlides={true}
      spaceBetween={15}
      onSlideChange={(s) => {
        setSwiperIndex(s.realIndex);
      }}
    >
      {bannerList.map((item: { link: string; pic: string | undefined }) => {
        return (
          <SwiperSlide key={item.pic}>
            <Box onClick={() => jumpToWhere(item.link)} w='3.6rem'>
              <AspectRatio ratio={1125 / 670}>
                <Image src={item.pic} />
              </AspectRatio>
            </Box>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
