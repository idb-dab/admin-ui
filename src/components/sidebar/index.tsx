/* eslint-disable */
import { IRoute } from 'types/navigation';
import NavItem from './components/NavItem';

type SidebarProps = {
  routes: IRoute[];
  [x: string]: any;
};

export default function Sidebar({ routes, open, setOpen }: SidebarProps) {
  return (
    <aside className="flex min-h-full w-1/4 flex-col bg-bob-primary-100 pt-5 shadow-md">
      <div className="sticky top-14 h-screen overflow-y-auto custom-scrollbar">
        <div className="-mb-10 flex h-full flex-col">
          <ul className="flex flex-col">
            {routes.map((each, key) => (
              <NavItem key={key} linkDetails={each} />
            ))}
          </ul>
        </div>
      </div>
      <div className="sticky"></div>
    </aside>
  );
}
