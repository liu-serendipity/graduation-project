// 根据路由决定是否显示footer
export const isPathPartlyExisted = (path) => {
  const arr = ['/home', '/mall', '/cart', '/about'];
  // 任何情况 结果数组第二项都是arr里匹配的单项
  let pathRes = path.split('/');
  if (pathRes[1] && arr.indexOf(`/${pathRes[1]}`) != -1) return true;
  return false;
};

// 根据路由决定是否显示SuspendButton
export const isPathShowSuspendButton = (path) => {
  const arr = ['/home', '/mall', '/cart', '/about'];
  // 任何情况 结果数组第二项都是arr里匹配的单项
  let pathRes = path.split('/');
  if (pathRes[1] && arr.indexOf(`/${pathRes[1]}`) != -1) return true;
  return false;
};
