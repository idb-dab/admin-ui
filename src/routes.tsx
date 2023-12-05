import React from 'react';
import { AiFillSafetyCertificate, AiOutlineTransaction } from 'react-icons/ai';
import { FaCertificate, FaRandom } from 'react-icons/fa';
import { FcManager } from 'react-icons/fc';
import { IoCard } from 'react-icons/io5';

// Admin Imports

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
  MdContactPage,
  MdQuestionAnswer,
  MdLogin,
  MdMonitor,
  MdReport,
  MdSearch,
  MdHomeRepairService,
  MdBatchPrediction,
} from 'react-icons/md';
import { RiWechatChannelsLine } from 'react-icons/ri';
import { IRoute } from 'types/navigation';

const adminPath = '/admin'

// Entitlement (retail/corporate)
const entitlementsPath = `${adminPath}/entitlements`
const retailEntitlementsPath = `${entitlementsPath}/retail`
const corporateEntitlementsPath = `${entitlementsPath}/corporate`

// Relationship management (retail/corporate)
const managementPath = `${adminPath}/management`
const retailManagementPath = `${managementPath}/retail`
const corporateManagementPath = `${managementPath}/corporate`

export const samplePath = `${adminPath}/sample-path` // common route for pages not yet implemented

const routes: IRoute[] = [
  {
    name: 'Main Dashboard',
    pathname: adminPath,
    icon: <MdHome className="h-5 w-5" />,
  },
  {
    name: 'My Profile',
    pathname: `${adminPath}/profile`, 
    icon: <MdHome className="h-5 w-5" />,
  },
  {
    name: 'Customer Assist Login',
    pathname: samplePath,
    icon: <MdLogin className="h-5 w-5" />,
    secondary: true,
    subRoutes: [
      {
        name: 'sample option',
        pathname: samplePath
      }
    ]
  },
  {
    name: 'Monitoring Tool',
    pathname: samplePath,
    icon: <MdMonitor className="h-5 w-5" />,
  },
  {
    name: 'Channel Administration',
    pathname: samplePath,
    icon: <RiWechatChannelsLine className="h-5 w-5" />,
    secondary: true,
    subRoutes: [
      {
        name: 'Administration',
        pathname: `${adminPath}/administration`
      }
    ]
  },
  {
    name: 'Transaction Administration',
    pathname: samplePath,
    icon: <AiOutlineTransaction className="h-5 w-5" />,
    secondary: true,
    subRoutes: [
      {
        name: 'sample option',
        pathname: samplePath
      }
    ]
  },
  {
    name: 'General Administration',
    pathname: samplePath,
    icon: <FaRandom className="h-5 w-5" />,
    secondary: true,
    subRoutes: [
      {
        name: 'sample option',
        pathname: samplePath
      }
    ]
  },
  {
    name: 'Retail Customer Entitlements',
    pathname: `${retailEntitlementsPath}`,
    icon: <FaCertificate className="h-5 w-5" />,
    secondary: true,
    subRoutes: [
      {
        name: 'Dashboard',
        pathname: `${retailEntitlementsPath}/dashboard`
      },
      {
        name: 'Approval Policy Setup',
        pathname: samplePath
      },
      {
        name: 'Float Maintenance',
        pathname: samplePath
      },
      {
        name: 'Personal Payee Link',
        pathname: samplePath
      },
      {
        name: 'Self Confirmation Setup',
        pathname: samplePath
      },
      {
        name: 'User Maintenance',
        pathname: `${retailEntitlementsPath}/user-maintenance`
      }
    ]
  },
  {
    name: 'Corporate Customer Entitlements',
    pathname: corporateEntitlementsPath,
    icon: <AiFillSafetyCertificate className="h-5 w-5" />,
    secondary: true,
    subRoutes: [
      {
        name: 'Dashboard',
        pathname: `${corporateEntitlementsPath}/dashboard`
      },
      {
        name: 'Approval Policy Setup',
        pathname: samplePath
      },
      {
        name: 'Float Maintenance',
        pathname: samplePath
      },
      {
        name: 'Personal Payee Link',
        pathname: samplePath
      },
      {
        name: 'Self Confirmation Setup',
        pathname: samplePath
      },
      {
        name: 'User Maintenance',
        pathname: `${corporateEntitlementsPath}/user-maintenance`
      }
    ]
  },
  {
    name: 'Retail Relationship Management',
    pathname: retailManagementPath,
    icon: <FcManager className="h-5 w-5" />,
    secondary: true,
    subRoutes: [
      {
        name: 'Dashboard',
        pathname: `${retailManagementPath}/dashboard`
      },
      {
        name: 'Online Registration Maintenance',
        pathname: samplePath,
      },
      {
        name: 'Financial Transaction Queue',
        pathname: samplePath
      },
      {
        name: 'Transaction Support Services Queue',
        pathname: samplePath
      },
      {
        name: 'Service Request Queue',
        pathname: samplePath
      },
      {
        name: 'Payable Instruments Queue',
        pathname: samplePath
      },
      {
        name: 'Receivable Instruments Queue',
        pathname: samplePath
      },
      {
        name: 'Confirmation Approval Queue',
        pathname: samplePath
      },
      {
        name: 'Investment Management Queue',
        pathname: samplePath
      },
      {
        name: 'Transaction Based Inquiry',
        pathname: samplePath
      },
    ]
  },
  {
    name: 'Corporate Relationship Management',
    pathname: corporateManagementPath,
    icon: <FcManager className="h-5 w-5" />,
    secondary: true,
    subRoutes: [
      {
        name: 'Dashboard',
        pathname: `${corporateManagementPath}/dashboard`
      },
      {
        name: 'Online Registration Maintenance',
        pathname: samplePath,
      },
      {
        name: 'Financial Transaction Queue',
        pathname: samplePath
      },
      {
        name: 'Transaction Support Services Queue',
        pathname: samplePath
      },
      {
        name: 'Service Request Queue',
        pathname: samplePath
      },
      {
        name: 'Payable Instruments Queue',
        pathname: samplePath
      },
      {
        name: 'Receivable Instruments Queue',
        pathname: samplePath
      },
      {
        name: 'Confirmation Approval Queue',
        pathname: samplePath
      },
      {
        name: 'Investment Management Queue',
        pathname: samplePath
      },
      {
        name: 'Transaction Based Inquiry',
        pathname: samplePath
      },
    ]
  },
  {
    name: 'Reports Administration',
    pathname: samplePath,
    icon: <MdReport className="h-5 w-5" />,
    secondary: true,
    subRoutes: [
      {
        name: 'sample option',
        pathname: samplePath
      }
    ]
  },
  {
    name: 'Activity Inquiry',
    pathname: samplePath,
    icon: <MdSearch className="h-5 w-5" />,
    secondary: true,
    subRoutes: [
      {
        name: 'sample option',
        pathname: samplePath
      }
    ]
  },
  {
    name: 'Request Maintenance',
    pathname: 'maintenance',
    icon: <MdHomeRepairService className="h-5 w-5" />,
    secondary: true,
    subRoutes: [
      {
        name: 'sample option',
        pathname: samplePath
      }
    ]
  },
  {
    name: 'Batch Administration',
    pathname: 'reports',
    icon: <MdBatchPrediction className="h-5 w-5" />,
    secondary: true,
    subRoutes: [
      {
        name: 'sample option',
        pathname: samplePath
      }
    ]
  },
  {
    name: 'Prepaid Cards',
    pathname: samplePath,
    icon: <IoCard className="h-5 w-5" />,
    secondary: true,
    subRoutes: [
      {
        name: 'sample option',
        pathname: samplePath
      }
    ]
  },
  {
    name: 'NFT Marketplace',
    pathname: samplePath,
    icon: <MdOutlineShoppingCart className="h-5 w-5" />,
  },
  {
    name: 'Data Tables',
    icon: <MdBarChart className="h-5 w-5" />,
    pathname: samplePath,
  },
  {
    name: 'Profile',
    pathname: samplePath,
    icon: <MdPerson className="h-5 w-5" />,
  },
  {
    name: 'Sign In',
    pathname: samplePath,
    icon: <MdLock className="h-5 w-5" />,
  },
  {
    name: 'FAQs',
    pathname: samplePath,
    icon: <MdQuestionAnswer className="h-5 w-5" />
  },
  {
    name: 'Contact Us',
    pathname: samplePath,
    icon: <MdContactPage className="h-5 w-5" />
  },
  {
    name: 'Dynamic form',
    pathname: '/admin/form'
  }
];
export default routes;
