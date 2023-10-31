import React, { useState } from 'react';
import { useCallback } from 'react';
import { usePathname } from 'next/navigation';
import NavLink from 'components/link/NavLink';
import DashIcon from 'components/icons/DashIcon';
import { MdArrowDropDown } from 'react-icons/md';

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
        route.layout === '/admin/adminstration' ||
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
            <div className="flex flex-col items-top">
              {/* Conditionally render NavLink based on route.secondary */}
              {route.secondary ?
                (
                  <div className="flex relative mb-3 hover:cursor-pointer">
                    <li
                      className="my-[3px] flex cursor-pointer items-center px-1 justify-between w-full"
                      onClick={handleSubmenuToggle}
                    >
                      <div className="flex items-center">
                        <span
                          className={`${isActive
                            ? 'font-bold text-brand-500 dark:text-white'
                            : 'font-medium text-gray-600'
                            }`}
                        >
                          {route.icon ? route.icon : <DashIcon />}{' '}
                        </span>
                        <p
                          className={`leading-1 text-[13px] ml-4 flex flex-grow ${isActive
                            ? 'font-bold text-bob-primary-600 dark:text-white'
                            : 'font-medium text-gray-600'
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
                      <li className="my-[3px] flex cursor-pointer items-center px-1 justify-between w-full">
                        <div className="flex items-center">
                          <span
                            className={`${isActive
                              ? 'font-bold text-brand-500 dark:text-white'
                              : 'font-medium text-gray-600'
                              }`}
                          >
                            {route.icon ? route.icon : <DashIcon />}{' '}

                          </span>
                          <p
                            className={`leading-1 text-[13px] ml-4 flex flex-grow ${isActive
                              ? 'font-bold text-bob-primary-600 dark:text-white'
                              : 'font-medium text-gray-600'
                              }`}
                          >
                            {route.name}
                          </p>
                        </div>
                        {route.secondary === true && (
                          <div className='flex items-right' onClick={() => toggleSubMenu(index)}>
                            {<MdArrowDropDown />}
                          </div>
                        )}
                      </li>

                    </div>

                  </NavLink>
                )}
              {/* Render submenu based on conditions */}
              <div className='flex-col'>
                {route.secondary === true && (
                  <div>
                    <SubMenu route={route} activeRoute={activeRoute} isSubMenuVisible={isSubMenuVisible[index]} />
                  </div>
                )}
              </div>
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
    <div>
      {isSubMenuVisible && (
        <div className='flex flex-col'>
          {route.subMenu.map((submenuItem, index) => {
            const actualRoute = `${route.layout}/${route.path}/${submenuItem.path}`;
            const isActive = activeRoute(actualRoute);

            return (
              <NavLink key={index} href={actualRoute}>
                <div className="relative mb-3 flex hover:cursor-pointer">
                  <li className="my-[3px] flex cursor-pointer items-center px-1">
                    <p
                      className={`leading-1 text-[13px] ml-4 flex ${isActive
                        ? 'font-bold text-bob-primary-600 dark:text-white'
                        : 'font-medium text-gray-600'
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
