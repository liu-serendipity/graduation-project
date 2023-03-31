import React, { useState, useEffect } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { SearchBox, HotAndRecent, Recommend } from './compoments';
import { useMallContext } from '../../hooks/useMallContext';

const Mall = () => {
  const [searchValue, setSearchValue] = useState('');
  const { hotList, goodsList } = useMallContext();

  const collectValue = (val: string) => {
    setSearchValue(val);
  };

  return (
    <Box w='100%' bgColor={'gray.100'} pb='0.64rem'>
      <Flex
        bgColor={'red.500'}
        justify='center'
        align={'center'}
        pt='0.08rem'
        pb='0.06rem'
        pos={'fixed'}
        w='100%'
        mt='-0.5rem'
      >
        <Box w='94%'>
          <SearchBox onCollect={collectValue} />
        </Box>
      </Flex>
      <Box mt='0.5rem' w='100%' pt='0.08rem'>
        <HotAndRecent searchValue={searchValue} hotList={hotList} />
      </Box>
      <Box mt='0.08rem'>
        <Recommend data={goodsList} />
      </Box>
    </Box>
  );
};

export default Mall;
