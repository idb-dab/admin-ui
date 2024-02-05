import { IRoute } from 'types/navigation';
import Router from 'next/router';

// NextJS Requirement
export const isWindowAvailable = () => typeof window !== 'undefined';

export const findCurrentRoute = (
  routes: IRoute[],
  pathname: string,
): IRoute => {
  if (!isWindowAvailable()) return null;

  for (let route of routes) {
    if(route.pathname === pathname){
      return route
    }
    if(route.subRoutes){
      const subRoute = findCurrentRoute(route.subRoutes, pathname)
      if(subRoute){
        return subRoute
      }
    }
  }
  return null
};
