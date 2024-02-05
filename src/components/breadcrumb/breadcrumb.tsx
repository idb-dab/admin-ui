import Link from 'next/link';
import React from 'react';
import routes from '../../routes';
import { IRoute } from 'types/navigation';

type BreadcrumbProps = {
  route: IRoute;
};

export default function Breadcrumb({ route }: BreadcrumbProps) {
  const paths = getPathsFromPathname(route.pathname)
  
  const convertedRoutes = paths.reduce((obj, path) => {
    let routeFromPath = getRouteFromPath(path, routes);
    if(routeFromPath){
      obj[path] = routeFromPath;
    }
    return obj;
  }, {});

  return (
    <nav className="breadcrumbs">
      {
        Object.keys(convertedRoutes).map((each,key)=>(
          <span className='text-sm text-gray-300 hover:text-gray-600' key={key}><Link href={convertedRoutes[each].pathname}>{convertedRoutes[each].name}</Link> &gt; </span>
        ))
      }
    </nav>
  );
}

function getPathsFromPathname(pathname: string){
  const pathnames = pathname.split('/').filter(x=>x)
  let paths = []
  for(let path of pathnames){
    if(paths.length === 0){
      paths.push(`/${path}`)
    }
    else{
      paths.push(`${paths[paths.length-1]}/${path}`)
    }
  }
  return paths
}

function getRouteFromPath(path: string, routes: IRoute[]) : IRoute {
  for(let route of routes){
    if(route.pathname === path){
      return route
    }
    if(route.subRoutes){
      const result = getRouteFromPath(path, route.subRoutes)
      if(result){
        return result
      }
    }
  }
}
