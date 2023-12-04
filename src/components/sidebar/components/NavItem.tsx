'use client';
import { useState } from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import { IRoute } from 'types/navigation';
import NavList from './NavList';
import { useRouter } from 'next/navigation';

type NavItemProps = {
  linkDetails: IRoute;
};

export default function NavItem({ linkDetails }: NavItemProps) {
  const [menuExpanded, setMenuExpanded] = useState<boolean>(false);
  const router = useRouter()

  function handleClick(){
    if(!linkDetails.subRoutes){
      router.push(linkDetails.pathname)
    }
    else{
      setMenuExpanded(!menuExpanded)
    }
  }

  return (
    <>
      <div
        onClick={handleClick}
        className="flex w-full cursor-pointer items-center justify-between rounded-md px-2 py-3 hover:bg-bob-primary-300 hover:shadow-lg"
      >
        <div className="flex">
          {linkDetails.icon && <div className="px-2">{linkDetails.icon}</div>}
          {linkDetails.name}
        </div>
        <div className="flex w-fit">
          {linkDetails.subRoutes && <MdArrowDropDown className={`${menuExpanded && 'rotate-180'} transition-all duration-400`} />}
        </div>
      </div>
      {linkDetails.subRoutes && (
        <div className={`flex w-full ps-8 ${!menuExpanded && 'hidden'} flex-col`}>
            <NavList subRoutes={linkDetails.subRoutes} />
        </div>
      )}
    </>
  );
}
