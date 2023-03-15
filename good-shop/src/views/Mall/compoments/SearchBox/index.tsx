import React, { useRef, useState, useEffect } from 'react';
import { Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon, CloseIcon } from '@chakra-ui/icons';
import { FONTSIZE } from '../../../../const';

interface SearchBoxProps {
  onCollect: (val: string) => void;
}

export const SearchBox = ({ onCollect }: SearchBoxProps) => {
  const [value, setValue] = useState('');
  const valueRef: any = useRef(null);

  const handleValueChange = (event: any) => {
    setValue(event.target.value);
  };

  const handleCloseClick = () => {
    valueRef.current.value = '';
    setValue('');
  };

  const onKeyup = (e: any) => {
    if (e.keyCode === 13 && value.trim()) {
      onCollect && onCollect(value);
      if (localStorage.getItem('good-shop-recent-search')) {
        const temp = JSON.parse(localStorage.getItem('good-shop-recent-search') || '[]');
        const index = temp.indexOf(value);
        if (index > 0) {
          temp.splice(index, 1);
        }
        temp.unshift(value);
        localStorage.setItem('good-shop-recent-search', JSON.stringify(temp));
      } else {
        localStorage.setItem('good-shop-recent-search', JSON.stringify([value]));
      }
      handleCloseClick();
      valueRef.current.blur();
    }
  };

  return (
    <InputGroup>
      <InputLeftElement
        h='0.36rem'
        pointerEvents={'none'}
        fontSize={FONTSIZE.big}
        children={<SearchIcon color='gray.400' />}
        w='0.5rem'
      />
      <Input
        pos={'relative'}
        bgColor={'gray.100'}
        h='0.36rem'
        pl='0.5rem'
        pr='0.5rem'
        focusBorderColor='pink.300'
        placeholder={'请输入商品内容'}
        fontSize={FONTSIZE.medium}
        ref={valueRef}
        onChange={handleValueChange}
        onKeyUp={onKeyup}
      />
      {value && (
        <Flex
          pos={'absolute'}
          align={'center'}
          justify={'center'}
          right={0}
          onClick={handleCloseClick}
          w='0.5rem'
          h='0.36rem'
          fontSize={FONTSIZE.small}
          zIndex={9}
        >
          <CloseIcon color='gray.300' />
        </Flex>
      )}
    </InputGroup>
  );
};
