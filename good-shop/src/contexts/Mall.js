import React, { useState, useEffect, useMemo } from 'react';
import { getHotList, getGoodsList, getGoodsDetail } from '../service';

export const MallContext = React.createContext();

export const MallProvider = ({ children }) => {
  const [hotList, setHotList] = useState([]);
  const [goodsList, setGoodsList] = useState([]);
  const [goodsDetail, setGoodsDetail] = useState({});

  useEffect(() => {
    getHotList().then((res) => {
      setHotList(res);
    });
    getGoodsList().then((res) => {
      setGoodsList(res);
    });
    const params = {};
    getGoodsDetail(params).then((res) => {
      setGoodsDetail(res);
    });
  }, []);

  const value = useMemo(() => {
    return {
      hotList,
      goodsList,
      goodsDetail,
    };
  }, [hotList, goodsList, goodsDetail]);

  return <MallContext.Provider value={value}>{children}</MallContext.Provider>;
};
