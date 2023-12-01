/* eslint-disable */
import Links from './components/Links';
import { IRoute } from 'types/navigation';

type SidebarProps = {
  routes: IRoute[];
  [x: string]: any;
};

export default function Sidebar({ routes, open, setOpen }: SidebarProps) {
  return (
    <aside className="flex min-h-full w-[25%] flex-col">
      <div className="card sticky top-6 h-screen overflow-y-auto ">
        <div className="-mb-10 flex h-full flex-col">
          <ul className="mb-auto pt-1 ">
            <Links routes={routes} />
          </ul>
        </div>
      </div>
      <div className="sticky"></div>
    </aside>
  );
}
