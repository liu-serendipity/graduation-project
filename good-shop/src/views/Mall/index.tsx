import React, { useRef, useState, useEffect } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { StarIcon, Search2Icon, DeleteIcon } from '@chakra-ui/icons';
import { FONTSIZE } from '../../const';
import { SearchBox, HotAndRecent } from './compoments';

const Mall = () => {
  const [searchValue, setSearchValue] = useState('');

  const collectValue = (val: string) => {
    setSearchValue(val);
  };

  return (
    <Box w='100%'>
      <Box w='90%' m='auto' mt='0.1rem'>
        <SearchBox onCollect={collectValue} />
      </Box>
      <HotAndRecent searchValue={searchValue} />
    </Box>
  );
};

export default Mall;
