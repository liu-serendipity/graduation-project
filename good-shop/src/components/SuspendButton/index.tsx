import React, { Suspense } from 'react';
import { Box, Flex, Text, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import shopBtn from './shopBtn.png';

export const SuspendButton = () => {
  const navigate = useNavigate();
  const handleJump = () => {
    navigate('/cart');
  };
  return (
    <Box w='0.6rem' h='0.6rem' position={'fixed'} bottom='1.2rem' right={'0.32rem'} onClick={() => handleJump()}>
      <Image src={shopBtn} w='100%' />
    </Box>
  );
};
