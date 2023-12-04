'use client';
import { useState } from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import { IRoute } from 'types/navigation';
import Submenu from './Submenu';

type NavItemProps = {
  linkDetails: IRoute;
};

export default function NavItem({ linkDetails }: NavItemProps) {
  const [menuExpanded, setMenuExpanded] = useState<boolean>(false);
  return (
    <>
      <div
        onClick={() => setMenuExpanded(!menuExpanded)}
        className="flex w-full cursor-pointer items-center justify-between rounded-md px-2 py-3 hover:bg-bob-primary-200 hover:shadow-lg"
      >
        <div className="flex">
          {linkDetails.icon && <div className="px-2">{linkDetails.icon}</div>}
          {linkDetails.name}
        </div>
        <div className="flex w-fit">
          {linkDetails.subRoutes && <MdArrowDropDown />}
        </div>
      </div>
      {linkDetails.subRoutes && (
        <div className={`flex w-full ps-8 ${!menuExpanded && 'hidden'} flex-col`}>
          {linkDetails.subRoutes.map((each, key) => (
            <Submenu linkDetails={each} key={key} />
          ))}
        </div>
      )}
    </>
  );
}
