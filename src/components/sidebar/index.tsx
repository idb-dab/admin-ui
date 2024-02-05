/* eslint-disable */
import { IRoute } from 'types/navigation';
import NavList from './components/NavList';

type SidebarProps = {
  routes: IRoute[];
  [x: string]: any;
};

export default function Sidebar({ routes, open }: SidebarProps) {
  return (
    <aside className={`flex min-h-full flex-col bg-bob-primary-100 pt-5 shadow-md ${open? 'w-1/4': 'w-0'} transition-all duration-300 ease-in-out`}>
      <div className={`sticky top-14 h-screen overflow-y-auto custom-scrollbar ${!open && 'opacity-0'} transition-all duration-800 ease-in-out`}>
        <div className="-mb-10 flex h-full flex-col">
          <NavList subRoutes={routes} />
        </div>
      </div>
      <div className="sticky"></div>
    </aside>
  );
}
