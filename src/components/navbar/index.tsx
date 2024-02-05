import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

import logo from '/public/svg/bank-of-baroda.svg';
import Image from 'next/image';
import { IRoute } from 'types/navigation';
import SearchBox from 'components/search-box/SearchBox';
import NotificationsBox from 'components/notifications-box';
import ProfileMenu from 'components/profile-menu';
import InformationBox from 'components/information-box';

const Navbar = (props: {
  sidebarOpen: boolean;
  setSidebarOpen: (e: boolean) => void;
  currentRoute: IRoute;
  [x: string]: any;
}) => {
  return (
    <nav
      className={`h-15 sticky top-0 z-20 flex items-center border-b-[0.5px] border-bob-neutral-100 bg-white px-4 justify-between`}
    >
        {/* Sidebar collapse button and BOB Logo */}
        <div className="flex h-full items-center">
          <AiOutlineMenu
            onClick={() => props.setSidebarOpen(!props.sidebarOpen)}
            className="h-full w-10 rounded-md p-2 hover:bg-gray-100"
          />
          <Image
            className="md:w-30 my-2 h-8 w-40 rounded-xl md:h-10 md:rounded-full"
            src={logo}
            alt="BOB"
          />
        </div>

        {/* Search Box */}
        <div className="flex h-full items-center">
          <SearchBox />
        </div>

        <div className="flex h-10 flex-grow items-center justify-around gap-2 rounded-full bg-white px-2 py-2 shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none md:w-36 md:flex-grow-0 md:gap-1 xl:w-36 xl:gap-2">
          {/* Notifications */}
          <NotificationsBox />
          {/* Information Box */}
          <InformationBox />
          {/* Profile Menu */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
            <ProfileMenu />
          </div>
        </div>
    </nav>
  );
};

export default Navbar;
