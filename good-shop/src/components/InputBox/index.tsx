import React, { useState } from 'react';
import { Box, Flex, Text, InputRightElement, InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { FONTSIZE } from '../../const';

export interface InputBoxProps {
  inputRef?: any;
  label?: string;
  type?: string;
}

export const InputBox: React.FC<InputBoxProps> = ({ inputRef, label, type = 'text' }) => {
  const rules = ['text', 'password'];
  if (rules.indexOf(type) < 0)
    return (
      <Box>
        <Text fontSize={FONTSIZE.medium}>{`${type}不符合类型`}</Text>
      </Box>
    );
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [value, setValue] = useState('');

  const handleChange = (e: any) => {
    setValue(e.target.value.trim());
  };

  return (
    <InputGroup w='2.4rem'>
      <InputLeftElement
        pointerEvents='none'
        h='0.36rem'
        children={
          <Box>
            <Text fontSize={FONTSIZE.small} textAlign={'center'}>
              {label}:
            </Text>
          </Box>
        }
        w='0.72rem'
        m='0'
        ml='0.02rem'
        color={'#fff'}
      />
      <Input
        focusBorderColor='#fff'
        h='0.36rem'
        fontSize={FONTSIZE.small}
        p='0'
        pl='0.74rem'
        pr='0.4rem'
        color={'#fff'}
        value={value.trim()}
        ref={inputRef}
        onChange={handleChange}
        type={type === 'text' ? 'text' : isShowPassword ? 'text' : 'password'}
        onBlur={
          type === 'password'
            ? () => setIsShowPassword(false)
            : () => {
                return null;
              }
        }
      />
      {type === 'password' && (
        <InputRightElement
          w='0.4rem'
          h='0.36rem'
          children={
            <Flex
              w='0.4rem'
              h='0.36rem'
              align={'center'}
              justify={'center'}
              fontSize={FONTSIZE.small}
              color={'#fff'}
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {value && (isShowPassword ? <ViewIcon /> : <ViewOffIcon />)}
            </Flex>
          }
        />
      )}
    </InputGroup>
  );
};
