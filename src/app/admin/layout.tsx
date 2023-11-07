'use client';
// Layout components
import { usePathname } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import routes from 'routes';
import {
  getActiveNavbar,
  getActiveRoute,
  isWindowAvailable,
} from 'utils/navigation';
import React from 'react';
import { Portal } from '@chakra-ui/portal';
import Navbar from 'components/navbar';
import Sidebar from 'components/sidebar';
import Footer from 'components/footer/Footer';
import { useRouter } from 'next/router';

import BreadcrumbItem from 'components/breadcrumb/breadcrumbItems';
import Breadcrumb from 'components/breadcrumb/breadcrumbItems';

export default function Admin({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [breadcrumbs, setBreadcrumbs] = useState<{ href: string; label: string }[] | undefined>();

  useEffect(() => {
    const pathWithoutQuery = pathname.split("?")[0];
    let pathArray = pathWithoutQuery.split("/");
    pathArray.shift();

    pathArray = pathArray.filter((path) => path !== "");

    const breadcrumbs = pathArray.map((path, index) => {
      const href = "/" + pathArray.slice(0, index + 1).join("/");
      return {
        href,
        label: path.charAt(0).toUpperCase() + path.slice(1),
      };
    });

    setBreadcrumbs(breadcrumbs);
  }, [pathname]);

  if (isWindowAvailable()) document.documentElement.dir = 'ltr';

  return (<div className=' flex flex-col min-h-full  '>

    {/* <div className=' pb-4 pt-1 px-4'> */}
    {/* <div className=" flex flex-col  "> */}


    <div className="flex flex-grow flex-shrink-0 basis-auto flex-col p-2 font-dm bg-bob-primary-0 dark:bg-navy-900">
      <Navbar
        brandText={getActiveRoute(routes, pathname)}
        secondary={getActiveNavbar(routes, pathname)}
      />
      <div className='flex flex-grow flex-shrink-0 p-4 basis-auto w-full h-full'>
        <Sidebar routes={routes} open={true} variant="admin" />

        <main
          className={`flex w-[100%] h-fit flex-grow card`}
        >
          {/* <div className='py-8'> */}
          <div className='flex flex-wrap'>
            <div className='flex ml-5 text-xl text-bob-secondary-500'>
              <span>Main Dashboard</span>
            </div>
            {children}

            {/* </div> */}
          </div>
        </main>
      </div>
      <Footer />

    </div>


    {/* </div > */}
    {/* </div> */}
  </div>


  );
}
