import Link from 'next/link';
import React from 'react';
import routes from '../../routes';
import { usePathname } from 'next/navigation';

export default function Breadcrumb(){
  const pathnames = usePathname().split('/').filter(x => x.length>0)
  // const breadcrumbs = generateBreadcrumbs(pathnames);
  const names = generateNamesFromPath(pathnames)
  console.log(names)

  return (
    <nav className="breadcrumbs">
      {
        names.map((each,key)=>(
          <span className='text-sm text-gray-300' key={key}><Link href={'/'+pathnames.slice(0,key+1).join('/')}>{each}</Link> &gt; </span>
        ))
      }
    </nav>
  );
};

// Recursive function to generate breadcrumbs
// const generateBreadcrumbs = (pathnames) => {
//   const breadcrumbs = [];

//   for (let i = 0; i < pathnames.length; i++) {
//     const currentPath = `/${pathnames.slice(0, i + 1).join('/')}`;
//     const route = findRouteByPath(currentPath);

//     if (route) {
//       breadcrumbs.push(route);
//       if (route.subMenu) {
//         // If the route has a submenu, recursively generate breadcrumbs for submenus
//         const submenuBreadcrumbs = generateBreadcrumbs(pathnames.slice(i + 1));
//         breadcrumbs.push(...submenuBreadcrumbs);
//         break;
//       }
//     }
//   }

//   return breadcrumbs;
// };

function generateNamesFromPath(pathnames: string[]){
  const names = new Array(pathnames.length)
  pathnames.forEach((each,key)=>{
    routes.forEach(eachRoute=>{
      if(eachRoute.path === each){
        names[key] = eachRoute.name
      }
    })
  })
  return names
}
