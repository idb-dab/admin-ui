/* eslint-disable */

import { HiX } from 'react-icons/hi';
import Links from './components/Links';

import SidebarCard from 'components/sidebar/components/SidebarCard';
import { IRoute } from 'types/navigation';

function SidebarHorizon(props: { routes: IRoute[];[x: string]: any }) {
  const { routes, open, setOpen } = props;
  return (
    <div
      className={`sm:none duration-175 overflow-y-scroll linear !z-50  min-h-full bg-bob-primary-0 pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 `}
    >
      <div className="sticky top-3 z-40 flex flex-row items-center justify-between p-1 backdrop-blur-sm">
        <div className="relative h-[50px] w-[355px] flex flex-grow items-center gap-2 md:w-[365px] md:flex-grow-0 md:gap-1 xl:w-[365px] xl:gap-2">
          <p className="text-2xl font-serif text-bob-primary-600 dark:text-white md:relative md:top-2 md:ml-2 xl:relative xl:top-0 xl:ml-0">
            BOB AdminAccess
          </p>
        </div>
      </div>
      <div className="mb-7 mt-[44px] h-px" />
      <ul className="mb-auto pt-1">
        <Links routes={routes} />
      </ul>
    </div>
  );
}

export default SidebarHorizon;
