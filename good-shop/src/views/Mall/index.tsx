import React, { useRef, useState, useEffect } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { SearchBox, HotAndRecent } from './compoments';

const Mall = () => {
  const [searchValue, setSearchValue] = useState('');
  const [hotList, setHotList] = useState<any>([]);

  const collectValue = (val: string) => {
    setSearchValue(val);
  };

  return (
    <Box w='100%' h='100vh' bgColor={'gray.100'}>
      <Box w='90%' m='auto' pt='0.1rem'>
        <SearchBox onCollect={collectValue} />
      </Box>
      <HotAndRecent searchValue={searchValue} hotList={hotList} />
    </Box>
  );
};

export default Mall;
