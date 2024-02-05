import { IRoute } from 'types/navigation';
import NavItem from './NavItem';

type NavListProps = {
  subRoutes: IRoute[];
};

export default function NavList({ subRoutes }: NavListProps) {
  return (
    <div className="flex w-full flex-col">
      {subRoutes.map((each, key) => (
        <NavItem key={key} linkDetails={each} />
      ))}
    </div>
  );
}
