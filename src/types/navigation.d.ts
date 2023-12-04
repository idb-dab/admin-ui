import { ComponentType, Element } from 'react';

export interface IRoute {
  name: string;
  pathname: string;
  icon?: JSX.Element | string;
  secondary?: boolean | undefined;
  subRoutes?: IRoute[];
}
