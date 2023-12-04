'use client';
// Layout components
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import routes from 'routes';
import {
  getActiveNavbar,
  getActiveRoute,
  isWindowAvailable,
} from 'utils/navigation';
import React from 'react';
import Navbar from 'components/navbar';
import Sidebar from 'components/sidebar';
import Footer from 'components/footer/Footer';
import Breadcrumb from 'components/breadcrumb/breadcrumb';


export default function Admin({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [breadcrumbs, setBreadcrumbs] = useState<
    { href: string; label: string }[] | undefined
  >();

  useEffect(() => {
    const pathWithoutQuery = pathname.split('?')[0];
    let pathArray = pathWithoutQuery.split('/');
    pathArray.shift();

    pathArray = pathArray.filter((path) => path !== '');

    const breadcrumbs = pathArray.map((path, index) => {
      const href = '/' + pathArray.slice(0, index + 1).join('/');
      return {
        href,
        label: path.charAt(0).toUpperCase() + path.slice(1),
      };
    });

    setBreadcrumbs(breadcrumbs);
  }, [pathname]);

  if (isWindowAvailable()) document.documentElement.dir = 'ltr';

  return (
    <div className="flex min-h-full flex-col">
      <div className="bg-bob-primary-0 flex flex-shrink-0 flex-grow basis-auto flex-col pt-2 font-dm dark:bg-navy-900">
        <Navbar
          brandText={getActiveRoute(routes, pathname)}
          secondary={getActiveNavbar(routes, pathname)}
        />
        <div className="flex h-full w-full flex-shrink-0 flex-grow basis-auto">
          <Sidebar routes={routes} open={true} variant="admin" />
          <main className={`card flex h-fit w-[100%] flex-grow p-4 flex-col`}>
            <Breadcrumb />
            <div className="flex flex-wrap flex-col">
              <div className="ml-5 flex text-xl text-bob-secondary-500">
                <span>Main Dashboard</span>
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
