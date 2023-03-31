import React, { useState, useEffect, useMemo } from 'react';
import { getHomeBannerList, getHomeRecommendList } from '../service';

export const HomeContext = React.createContext();

export const HomeProvider = ({ children }) => {
  const [bannerList, setBannerList] = useState([]);
  const [recommendList, setRecommendList] = useState([]);

  useEffect(() => {
    getHomeBannerList().then((res) => {
      setBannerList(res);
    });
    getHomeRecommendList().then((res) => {
      setRecommendList(res);
    });
  }, []);

  const value = useMemo(() => {
    return {
      bannerList,
      recommendList,
    };
  }, [bannerList, recommendList]);

  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
};
