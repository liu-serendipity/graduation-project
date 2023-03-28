import React from 'react';
import { Box, AspectRatio, Image } from '@chakra-ui/react';
import { ChevronLeftIcon, SettingsIcon } from '@chakra-ui/icons';
import { Info, MyOrder, Applications } from './components';
import { Bar } from '../../components';

import main from './assets/main.jpg';

const About = () => {
  return (
    <Box w='100%' h='100vh' bgColor={'gray.100'}>
      <Bar LeftIcon={ChevronLeftIcon} RightIcon={SettingsIcon} leftLink={-1} rightLink={'/setting'} title={'我的'} />
      <Info />
      <MyOrder />
      <Box m='auto' w='3.52rem' py='0.1rem' mb='0.1rem'>
        <AspectRatio ratio={1125 / 353}>
          <Image src={main} />
        </AspectRatio>
      </Box>
      <Applications />
    </Box>
  );
};

export default About;
