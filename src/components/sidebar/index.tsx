/* eslint-disable */

import { HiX } from 'react-icons/hi';
import Links from './components/Links';

import SidebarCard from 'components/sidebar/components/SidebarCard';
import { IRoute } from 'types/navigation';

function SidebarHorizon(props: { routes: IRoute[];[x: string]: any }) {
  const { routes, open, setOpen } = props;
  return (

    <div className='sticky flex flex-col w-[25%]  h-screen'>
      {/* <div className={`block  top-5 z-40   pb-10 shadow-2xl shadow-white/5 transition duration-200 rounded-lg dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 `}> */}
      {/* <div className="sticky top-3 z-40 flex flex-row items-center justify-between p-1 backdrop-blur-sm"> */}
      {/* <div className='h-[100%] top-0'> */}
      <div className='overflow-x-hidden overflow-y-scroll bg-red-50  sidebar p-1 flex-grow'>
        <ul className="mb-auto pt-1 ">
          <Links routes={routes} />
        </ul>
      </div>
      {/* </div> */}
      <div className='sticky'></div>
      {/* </div> */}

    </div>

  );
}

export default SidebarHorizon;
