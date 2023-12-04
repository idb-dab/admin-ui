import React from 'react';
import Dropdown from 'components/dropdown';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsArrowBarUp } from 'react-icons/bs';

import {
  IoMdNotificationsOutline,
  IoMdInformationCircleOutline,
} from 'react-icons/io';
import avatar from '/public/img/avatars/avatar4.png';
import logo from '/public/svg/bank-of-baroda.svg';
import Image from 'next/image';
import { IRoute } from 'types/navigation';
import SearchBox from 'components/search-box/SearchBox';

const Navbar = (props: {
  sidebarOpen: boolean;
  setSidebarOpen: (e: boolean) => void;
  currentRoute: IRoute;
  [x: string]: any;
}) => {
  return (
    <nav
      className={`h-15 sticky top-0 z-20 flex items-center border-b-[0.5px] border-bob-neutral-100 bg-white px-4`}
    >
      <div className="flex h-full w-full flex-wrap items-center justify-between">
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

        <div className="relative right-0 my-2 flex h-[30px] w-[100px] flex-grow items-center justify-around gap-2 rounded-full bg-white px-2 py-2 shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none md:w-[150px] md:flex-grow-0 md:gap-1 xl:w-[150px] xl:gap-2">
          <Dropdown
            button={
              <p className="cursor-pointer">
                <IoMdNotificationsOutline className="h-4 w-4 text-gray-600 dark:text-white" />
              </p>
            }
            animation="origin-[65%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
            classNames={'py-2 top-4 -left-[230px] md:-left-[440px] w-max'}
          >
            <div className="flex w-[360px] flex-col gap-3 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none sm:w-[460px]">
              <div className="flex items-center justify-between">
                <p className="text-base font-bold text-navy-700 dark:text-white">
                  Notification
                </p>
                <p className="text-sm font-bold text-navy-700 dark:text-white">
                  Mark all read
                </p>
              </div>

              <button className="flex w-full items-center">
                <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
                  <BsArrowBarUp />
                </div>
                <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                  <p className="mb-1 text-left text-base font-bold text-gray-900 dark:text-white">
                    New Update: Horizon UI Dashboard PRO
                  </p>
                  <p className="font-base text-left text-xs text-gray-900 dark:text-white">
                    A new update for your downloaded item is available!
                  </p>
                </div>
              </button>

              <button className="flex w-full items-center">
                <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
                  <BsArrowBarUp />
                </div>
                <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                  <p className="mb-1 text-left text-base font-bold text-gray-900 dark:text-white">
                    New Update: Horizon UI Dashboard PRO
                  </p>
                  <p className="font-base text-left text-xs text-gray-900 dark:text-white">
                    A new update for your downloaded item is available!
                  </p>
                </div>
              </button>
            </div>
          </Dropdown>
          {/* start Horizon PRO */}
          <Dropdown
            button={
              <p className="cursor-pointer">
                <IoMdInformationCircleOutline className="h-4 w-4 text-gray-600 dark:text-white" />
              </p>
            }
            classNames={'py-2 top-6 -left-[250px] md:-left-[330px] w-max'}
            animation="origin-[75%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
          >
            <div className="flex w-[350px] flex-col gap-2 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
              Notifications
            </div>
          </Dropdown>
          {/* <div
            className="cursor-pointer text-gray-600"
            onClick={() => {
              if (darkmode) {
                document.body.classList.remove('dark');
                setDarkmode(false);
              } else {
                document.body.classList.add('dark');
                setDarkmode(true);
              }
            }}
          >
            {darkmode ? (
              <RiSunFill className="h-4 w-4 text-gray-600 dark:text-white" />
            ) : (
              <RiMoonFill className="h-4 w-4 text-gray-600 dark:text-white" />
            )}
          </div> */}
          {/* Profile & Dropdown */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
            <Dropdown
              button={
                <Image
                  width="2"
                  height="10"
                  className="h-7 w-7 place-items-center rounded-full"
                  src={avatar}
                  alt="Elon Musk"
                />
              }
              classNames={'py-2 top-8 -left-[180px] w-max'}
            >
              <div className="flex h-48 w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
                <div className="ml-4 mt-3">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-bold text-navy-700 dark:text-white">
                      👋 Hey, Adela
                    </p>{' '}
                  </div>
                </div>
                <div className="mt-3 h-px w-full bg-gray-200 dark:bg-white/20 " />

                <div className="ml-4 mt-3 flex flex-col">
                  <a
                    href=" "
                    className="text-sm text-gray-800 dark:text-white hover:dark:text-white"
                  >
                    Profile Settings
                  </a>
                  <a
                    href=" "
                    className="mt-3 text-sm text-gray-800 dark:text-white hover:dark:text-white"
                  >
                    Newsletter Settings
                  </a>
                  <a
                    href=" "
                    className="mt-3 text-sm font-medium text-red-500 hover:text-red-500"
                  >
                    Log Out
                  </a>
                </div>
              </div>
            </Dropdown>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
