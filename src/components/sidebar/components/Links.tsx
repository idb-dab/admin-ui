import React, { useState } from 'react';
import { useCallback } from 'react';
import { usePathname } from 'next/navigation';
import NavLink from 'components/link/NavLink';
import DashIcon from 'components/icons/DashIcon';
import { MdArrowDropDown } from 'react-icons/md';
import { IoContrast } from 'react-icons/io5';
import { BsDot } from 'react-icons/bs';

export const SidebarLinks = (props: { routes: RoutesType[] }): JSX.Element => {
  const pathname = usePathname();
  const { routes } = props;

  const activeRoute = useCallback(
    (actualRoute: string) => {
      const isActive = actualRoute.includes(pathname);
      console.log('actualRoute:', actualRoute);
      console.log('pathname:', pathname);
      console.log('isActive:', isActive);
      return isActive;
    },
    [pathname]
  );
  const getActualRoute = (routeItem, parentRoute = '') => {
    const { layout, path, subMenu, secondary } = routeItem;
    const routePath = `${parentRoute}${layout}/${path}`;
    if (subMenu && secondary) {
      return subMenu.map((submenuItem) => {
        return getActualRoute(submenuItem, routePath);
      });
    } else {
      return routePath;
    }
  };

  const [isSubMenuVisible, setSubMenuVisible] = useState(
    routes.map(() => false) // Initialize an array of booleans, one for each menu item
  );

  const toggleSubMenu = (index: number) => {
    const updatedSubMenuVisible = [...isSubMenuVisible];
    updatedSubMenuVisible[index] = !updatedSubMenuVisible[index];
    setSubMenuVisible(updatedSubMenuVisible);
  };

  const createLinks = (routes: RoutesType[]) => {
    return routes.map((route, index) => {
      console.log('Key:', index);
      if (
        route.layout === '/admin' ||
        route.layout === '/auth' ||
        route.layout === '/rtl' ||
        route.layout === '/monitoring-tool' ||
        route.layout === '/admin/administration' ||
        route.layout === '/admin/management' ||
        route.layout === '/admin/entitlements'
      ) {
        const actualRoute = getActualRoute(route)
        const isActive = activeRoute(actualRoute);
        const handleSubmenuToggle = () => {
          if (route.secondary === true) {
            toggleSubMenu(index);
          }
        };
        return (
          <div key={index}>
            <div className={`flex text-sm max-h-10 flex-col items-top hover:bg-gray-100 ${isActive ? ' transition-all bg-white max-h-12 ' : ''}`}>
              {/* Conditionally render NavLink based on route.secondary */}
              {route.secondary ?
                (
                  <div className="flex relative mb-3 hover:cursor-pointer ">
                    <li
                      className="my-[3px] flex cursor-pointer items-center justify-between w-full"
                      onClick={handleSubmenuToggle}
                    >
                      <div className="flex flex-row">
                        <span
                          className={`${isActive
                            ? 'font-bold  text-bob-neutral-700 dark:text-white'
                            : 'font-medium text-bob-neutral-700 dark:text-white'
                            }`}
                        >
                          {route.icon ? route.icon : <DashIcon />}{' '}
                        </span>
                        <p
                          className={`leading-1 ml-2 flex flex-grow ${isActive
                            ? 'font-bold text-bob-primary-900 dark:text-white'
                            : 'font-medium text-bob-secondary-100 dark:text-white'
                            }`}
                          onClick={handleSubmenuToggle}
                        >
                          {route.name}
                        </p>
                      </div>
                      {route.secondary === true && (
                        <div className='flex items-right' onClick={handleSubmenuToggle}>
                          {<MdArrowDropDown />}
                        </div>
                      )}
                    </li>
                  </div>
                ) : (
                  <NavLink href={route.layout + '/' + route.path}>
                    <div className="flex relative mb-3 hover:cursor-pointer" >
                      <li className="my-[3px] flex cursor-pointer items-center justify-between w-full">
                        <div className="flex flex-row">
                          <span
                            className={`${isActive
                              ? 'font-bold  text-bob-neutral-700 dark:text-white'
                              : 'font-medium text-bob-neutral-700 dark:text-white'
                              }`}
                          >
                            {route.icon ? route.icon : <DashIcon />}{' '}

                          </span>
                          <p
                            className={`leading-1 ml-2 flex flex-grow ${isActive
                              ? 'font-bold text-bob-primary-900 dark:text-white'
                              : 'font-medium text-bob-secondary-100 dark:text-white'
                              }`}
                          >
                            {route.name}
                          </p>
                        </div>
                        {route.secondary === true && (
                          <div className='flex items-right pl-9' onClick={() => toggleSubMenu(index)}>
                            {<MdArrowDropDown />}
                          </div>
                        )}
                      </li>

                    </div>

                  </NavLink>
                )}
              {/* Render submenu based on conditions */}

            </div>
            <div className=' flex flex-col'>
              {route.secondary === true && (
                <div className=''>
                  <SubMenu route={route} activeRoute={activeRoute} isSubMenuVisible={isSubMenuVisible[index]} />
                </div>
              )}
            </div>
          </div>

        );
      }
      return null;
    });
  };

  return <>{createLinks(routes)}</>;
};

export default SidebarLinks;

const SubMenu = ({ route, isSubMenuVisible, activeRoute }) => {
  return (
    <div className={`overflow-hidden  transition-all ease-linear duration-300 ${isSubMenuVisible ? 'opacity-100' : 'opacity-0'}`}>
      {isSubMenuVisible && (
        <div className='flex flex-col text-sm'>
          {route.subMenu.map((submenuItem, index) => {
            const actualRoute = `${route.layout}/${route.path}/${submenuItem.path}`;
            const isActive = activeRoute(actualRoute);

            return (
              <NavLink key={index} href={actualRoute} className={` hover:bg-gray-100 ${isActive ? 'bg-white' : ''}  `}>
                <div className=''></div>
                <div className="relative ml-2 mb-3 flex hover:cursor-pointer">
                  <li className="my-[3px] flex flex-auto rounded-md cursor-pointer items-center px-1">
                    <p
                      className={`leading-1 max-h-4 flex flex-auto text-sm text-left pl-8  ${isActive
                        ? 'font-bold text-bob-primary-900 dark:text-white'
                        : 'font-medium text-bob-secondary-100 dark:text-white'
                        }`}
                    >
                      {submenuItem.name}
                    </p>
                  </li>
                </div>
              </NavLink>
            );
          })}
        </div>
      )}
    </div>
  );
};
