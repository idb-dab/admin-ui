import Link from 'next/link';
import React from 'react';
import routes from '../../routes';

const Breadcrumb = () => {
    const pathnames = window.location.pathname.split('/').filter((x) => x);
    const breadcrumbs = generateBreadcrumbs(pathnames);

    return (
        <nav className="breadcrumbs">
            {breadcrumbs.map((breadcrumb, index) => (
                <React.Fragment key={index}>

                    <Link href={breadcrumb.layout || breadcrumb.path}>
                        {breadcrumb.name}
                    </Link>
                    <span>   /   </span>
                </React.Fragment>
            ))}
        </nav>
    );
};

// Recursive function to generate breadcrumbs
const generateBreadcrumbs = (pathnames) => {
    const breadcrumbs = [];

    for (let i = 0; i < pathnames.length; i++) {
        const currentPath = `/${pathnames.slice(0, i + 1).join('/')}`;
        const route = findRouteByPath(currentPath);

        if (route) {
            breadcrumbs.push(route);
            if (route.subMenu) {
                // If the route has a submenu, recursively generate breadcrumbs for submenus
                const submenuBreadcrumbs = generateBreadcrumbs(pathnames.slice(i + 1));
                breadcrumbs.push(...submenuBreadcrumbs);
                break;
            }
        }
    }

    return breadcrumbs;
};

// Helper function to find a route by path
const findRouteByPath = (path) => {
    return routes.find((route) => route.layout === path || route.path === path);
};

export default Breadcrumb;
