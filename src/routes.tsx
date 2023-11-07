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
  MdWifiChannel,
  MdReport,
  MdSearch,
  MdHomeRepairService,
  MdBatchPrediction,
} from 'react-icons/md';
import { RiWechatChannelsFill, RiWechatChannelsLine } from 'react-icons/ri';

const routes = [
  {
    name: 'Main Dashboard',
    layout: '/admin',
    path: 'default',
    icon: <MdHome className="h-5 w-5" />,
  },
  {
    name: 'My Profile',
    layout: '/profile',
    path: 'profile',
    icon: <MdHome className="h-5 w-5" />,
  },
  {
    name: 'Customer Assist Login',
    layout: '/admin',
    path: 'customer-assist-login',
    icon: <MdLogin className="h-5 w-5" />,
    secondary: true,
    subMenu: [
      {
        name: 'sample option'
      }
    ]
  },
  {
    name: 'Monitoring Tool',
    layout: '/monitoring-tool',
    path: 'monitoring-tool',
    icon: <MdMonitor className="h-5 w-5" />,
  },
  {
    name: 'Channel Administration',
    layout: '/admin/administration',
    path: 'channel',
    icon: <RiWechatChannelsLine className="h-5 w-5" />,
    secondary: true,
    subMenu: [
      {
        name: 'sample option'
      }
    ]
  },
  {
    name: 'Transaction Administration',
    layout: '/admin/administration',
    path: 'transaction',
    icon: <AiOutlineTransaction className="h-5 w-5" />,
    secondary: true,
    subMenu: [
      {
        name: 'sample option'
      }
    ]
  },
  {
    name: 'General Administration',
    layout: '/admin/administration',
    path: 'general',
    icon: <FaRandom className="h-5 w-5" />,
    secondary: true,
    subMenu: [
      {
        name: 'sample option'
      }
    ]
  },
  {
    name: 'Retail Customer Entitlements',
    layout: '/admin/entitlements',
    path: 'retail',
    icon: <FaCertificate className="h-5 w-5" />,
    secondary: true,
    subMenu: [
      {
        layout: '',
        name: 'Dashboard',
        path: 'dashboard'
      },
      {
        layout: '',
        name: 'Approval Policy Setup',
        path: 'approval-policy-setup'
      },
      {
        layout: '',
        name: 'Float Maintenance',
        path: 'float-maintenance'
      },
      {
        layout: '',
        name: 'Personal Payee Link',
        path: 'personal-payee-link'
      },
      {
        layout: '',
        name: 'Self Confirmation Setup',
        path: 'self-confirmation-setup'
      },
      {
        layout: '',
        name: 'User Maintenance',
        path: 'user-maintenance'
      }
    ]
  },
  {
    name: 'Corporate Customer Entitlements',
    layout: '/admin/entitlements',
    path: 'corporate',
    icon: <AiFillSafetyCertificate className="h-5 w-5" />,
    secondary: true,
    subMenu: [
      {
        layout: '',
        name: 'Dashboard',
        path: 'dashboard'
      },
      {
        layout: '',
        name: 'Approval Policy Setup',
        path: 'approval-policy-setup'
      },
      {
        layout: '',
        name: 'Float Maintenance',
        path: 'float-maintenance'
      },
      {
        layout: '',
        name: 'Personal Payee Link',
        path: 'personal-payee-link'
      },
      {
        layout: '',
        name: 'Self Confirmation Setup',
        path: 'self-confirmation-setup'
      },
      {
        layout: '',
        name: 'User Maintenance',
        path: 'user-maintenance'
      }
    ]
  },
  {
    name: 'Retail Relationship Management',
    layout: '/admin/management',
    path: 'retail',
    icon: <FcManager className="h-5 w-5" />,
    secondary: true,
    subMenu: [
      {
        layout: '',
        name: 'Dashboard',
        path: 'dashboard'
      },
      {
        layout: '',
        name: 'Online Registration Maintenance',
        path: 'online-registration-maintenance',
      },
      {
        layout: '',
        name: 'Financial Transaction Queue',
        path: 'financial-transaction-queue'
      },
      {
        layout: '',
        name: 'Transaction Support Services Queue',
        path: 'transaction-support-services-queue'
      },
      {
        layout: '',
        name: 'Service Request Queue',
        path: 'service-request-queue'
      },
      {
        layout: '',
        name: 'Payable Instruments Queue',
        path: 'payable-instruments-queue'
      },
      {
        layout: '',
        name: 'Receivable Instruments Queue',
        path: 'receivable-instrument-queue'
      },
      {
        layout: '',
        name: 'Confirmation Approval Queue',
        path: 'confirmation-approval-queue'
      },
      {
        layout: '',
        name: 'Investment Management Queue',
        path: 'investment-management-queue'
      },
      {
        layout: '',
        name: 'Transaction Based Inquiry',
        path: 'transaction-based-inquiry'
      },
    ]
  },
  {
    name: 'Corporate Relationship Management',
    layout: '/admin/management',
    path: 'corporate',
    icon: <FcManager className="h-5 w-5" />,
    secondary: true,
    subMenu: [
      {
        layout: '',
        name: 'Dashboard',
        path: 'dashboard'
      },
      {
        layout: '',
        name: 'Online Registration Maintenance',
        path: 'online-registration-maintenance',
      },
      {
        layout: '',
        name: 'Financial Transaction Queue',
        path: 'financial-transaction-queue'
      },
      {
        layout: '',
        name: 'Transaction Support Services Queue',
        path: 'transaction-support-services-queue'
      },
      {
        layout: '',
        name: 'Service Request Queue',
        path: 'service-request-queue'
      },
      {
        layout: '',
        name: 'Payable Instruments Queue',
        path: 'payable-instruments-queue'
      },
      {
        layout: '',
        name: 'Receivable Instruments Queue',
        path: 'receivable-instrument-queue'
      },
      {
        layout: '',
        name: 'Confirmation Approval Queue',
        path: 'confirmation-approval-queue'
      },
      {
        layout: '',
        name: 'Investment Management Queue',
        path: 'investment-management-queue'
      },
      {
        layout: '',
        name: 'Transaction Based Inquiry',
        path: 'transaction-based-inquiry'
      },
    ]
  },
  {
    name: 'Reports Administration',
    layout: '/admin/administration',
    path: 'reports',
    icon: <MdReport className="h-5 w-5" />,
    secondary: true,
    subMenu: [
      {
        name: 'sample option'
      }
    ]
  },
  {
    name: 'Activity Inquiry',
    layout: '/admin',
    path: 'inquiry',
    icon: <MdSearch className="h-5 w-5" />,
    secondary: true,
    subMenu: [
      {
        name: 'sample option'
      }
    ]
  },
  {
    name: 'Request Maintenance',
    layout: '/admin',
    path: 'maintenance',
    icon: <MdHomeRepairService className="h-5 w-5" />,
    secondary: true,
    subMenu: [
      {
        name: 'sample option'
      }
    ]
  },
  {
    name: 'Batch Administration',
    layout: '/admin/administration',
    path: 'reports',
    icon: <MdBatchPrediction className="h-5 w-5" />,
    secondary: true,
    subMenu: [
      {
        name: 'sample option'
      }
    ]
  },
  {
    name: 'Prepaid Cards',
    layout: '/admin',
    path: 'prepaid-cards',
    icon: <IoCard className="h-5 w-5" />,
    secondary: true,
    subMenu: [
      {
        name: 'sample option'
      }
    ]
  },
  {
    name: 'NFT Marketplace',
    layout: '/admin',
    path: 'nft-marketplace',
    icon: <MdOutlineShoppingCart className="h-5 w-5" />,
  },
  {
    name: 'Data Tables',
    layout: '/admin',
    icon: <MdBarChart className="h-5 w-5" />,
    path: 'data-tables',
  },
  {
    name: 'Profile',
    layout: '/admin',
    path: 'profile',
    icon: <MdPerson className="h-5 w-5" />,
  },
  {
    name: 'Sign In',
    layout: '/auth',
    path: 'sign-in',
    icon: <MdLock className="h-5 w-5" />,
  },
  {
    name: 'RTL Admin',
    layout: '/rtl',
    path: 'rtl-default',
    icon: <MdHome className="h-5 w-5" />,
  },
  {
    name: 'FAQs',
    layout: '/faq',
    path: 'faq',
    icon: <MdQuestionAnswer className="h-5 w-5" />
  },
  {
    name: 'Contact Us',
    layout: '/contact',
    path: 'contact-us',
    icon: <MdContactPage className="h-5 w-5" />
  }
];
export default routes;
