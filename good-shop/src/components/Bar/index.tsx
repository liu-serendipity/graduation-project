import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { ChevronLeftIcon, SettingsIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { FONTSIZE } from '../../const';

interface BarProps {
  LeftIcon?: any;
  RightIcon?: any;
  leftLink?: any;
  rightLink?: string;
  title: string;
  fontColor?: string;
  leftIconColor?: string;
  rightIconColor?: string;
  leftClick?: () => void;
  rightClick?: () => void;
}

export const Bar = ({
  LeftIcon,
  leftIconColor,
  RightIcon,
  rightIconColor,
  leftLink,
  rightLink,
  leftClick,
  rightClick,
  title,
  fontColor = '#fff',
}: BarProps) => {
  const navigate = useNavigate();

  const handleLeftJump = () => {
    leftClick
      ? leftClick()
      : leftLink
      ? navigate(leftLink)
      : () => {
          return null;
        };
  };

  const handleRightJump = () => {
    rightClick
      ? rightClick()
      : rightLink
      ? navigate(rightLink)
      : () => {
          return null;
        };
  };

  return (
    <Flex
      position={'fixed'}
      backdropFilter={'blur(6px)'}
      background={'rgba(255, 255, 255, .2)'}
      w='100%'
      fontSize={FONTSIZE.big}
      align={'center'}
      h='0.4rem'
      justify={'space-between'}
      borderBottomRadius={'0.14rem'}
      color={fontColor}
      zIndex={99}
    >
      <Flex w='0.6rem' align={'center'} justify={'center'} onClick={() => handleLeftJump()}>
        {LeftIcon && <LeftIcon color={leftIconColor} />}
      </Flex>
      <Text>{title}</Text>
      <Flex w='0.6rem' align={'center'} justify={'center'} onClick={() => handleRightJump()}>
        {RightIcon && <RightIcon color={rightIconColor} />}
      </Flex>
    </Flex>
  );
};
