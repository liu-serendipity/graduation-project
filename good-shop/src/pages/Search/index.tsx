import React, { useEffect, useState } from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';

const Search = () => {
  const [search] = useSearchParams();
  const query = search.get('q' || '');

  return <Box>{query}</Box>;
};

export default Search;
