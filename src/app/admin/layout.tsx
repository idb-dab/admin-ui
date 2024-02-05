'use client';
// Layout components
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import routes, { samplePath } from 'routes';
import { findCurrentRoute, isWindowAvailable } from 'utils/navigation';
import React from 'react';
import Navbar from 'components/navbar';
import Sidebar from 'components/sidebar';
import Footer from 'components/footer/Footer';
import Breadcrumb from 'components/breadcrumb/breadcrumb';
import { IRoute } from 'types/navigation';

export default function Admin({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const [currentRoute, setCurrentRoute] = useState<IRoute>(routes[0]);
  const [ sidebarOpen, setSidebarOpen ] = useState<boolean>(true)

  useEffect(() => {
    const pathWithoutQuery = pathname.split('?')[0];
    let pathArray = pathWithoutQuery.split('/');
    pathArray.shift();

    pathArray = pathArray.filter((path) => path !== '');
    setCurrentRoute(findCurrentRoute(routes, pathname));
  }, [pathname]);

  if (isWindowAvailable()) document.documentElement.dir = 'ltr';

  return (
    <div className="flex min-h-full flex-col">
      <div className="bg-bob-primary-0 flex flex-shrink-0 flex-grow basis-auto flex-col pt-2 font-dm dark:bg-navy-900">
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} currentRoute={currentRoute} />
        <div className="flex h-full w-full flex-shrink-0 flex-grow basis-auto">
          <Sidebar routes={routes} open={sidebarOpen} variant="admin" />
          <main className={`card flex h-fit w-[100%] flex-grow flex-col p-4`}>
            <Breadcrumb route={currentRoute} />
            <div className="flex flex-col flex-wrap">
              <div className="my-4 flex text-xl text-bob-secondary-500">
                <span>
                  {pathname === samplePath ? 'Sample Page' : currentRoute.name}
                </span>
              </div>
              {children}
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
}
