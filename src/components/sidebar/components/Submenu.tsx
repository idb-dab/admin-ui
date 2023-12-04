import { IRoute } from 'types/navigation';
import NavItem from './NavItem';

type SubmenuProps = {
  subRoutes: IRoute[];
};

export default function Submenu({ subRoutes }: SubmenuProps) {
  return (
    <div className="flex w-full flex-col">
      {subRoutes.map((each, key) => (
        <NavItem key={key} linkDetails={each} />
      ))}
    </div>
  );
}
