import React, { Suspense } from 'react';
import { Box, Flex, Text, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import button from './button.gif';

export const SuspendButton99 = () => {
  const navigate = useNavigate();
  const handleJump = () => {
    navigate('/mall');
  };
  return (
    <Box w='0.6rem' h='0.6rem' position={'fixed'} top='40%' left={'0'} onClick={() => handleJump()} zIndex={99}>
      <Image src={button} w='100%' />
    </Box>
  );
};
