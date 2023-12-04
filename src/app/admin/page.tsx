'use client';
import MiniCalendar from 'components/calendar/MiniCalendar';
import WeeklyRevenue from 'components/admin/default/WeeklyRevenue';
import TotalSpent from 'components/admin/default/TotalSpent';
import PieChartCard from 'components/admin/default/PieChartCard';
import { IoMdHome } from 'react-icons/io';
import { IoDocuments } from 'react-icons/io5';
import { MdBarChart, MdDashboard } from 'react-icons/md';

import Widget from 'components/widget/Widget';
import CheckTable from 'components/admin/default/CheckTable';
import ComplexTable from 'components/admin/default/ComplexTable';
import DailyTraffic from 'components/admin/default/DailyTraffic';
import TaskCard from 'components/admin/default/TaskCard';
import tableDataCheck from 'variables/data-tables/tableDataCheck';
import tableDataComplex from 'variables/data-tables/tableDataComplex';

const Dashboard = () => {

  return (
    <div className="p-6">
      <div className='grid grid-cols-1 mb-4 gap-8 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-4'>
        <fieldset className=" bg-bob-primary-0 border-bob-neutral-500 border-2 rounded-t-2xl rounded-b-md">
          <legend className=" ml-2 text-xl leading-6 font-bold text-bob-secondary-100 mb-4 ">
            {'Password Alerts'}
          </legend>


          <div className="flex h-60 flex-wrap gap-6 overflow-y-auto hover:will-change-scroll card">
            <div className='space-y-1'>
              <Widget
                icon={<MdBarChart className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                title={'Sign On Password Expiry'}
                subtitle={'365 Days'}
              />
              <Widget
                icon={<MdBarChart className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                title={'Transaction Password Expiry'}
                subtitle={'360 Days'}
              />
              <Widget
                icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                title={'Last Unsuccessful Login Attempt'}
                subtitle={'10/05/2023 09:53:22 AM IST'}
              />
            </div>
          </div>
        </fieldset>


        {/* Card 2: Mail Alert */}
        <fieldset className=" bg-bob-primary-0 border-bob-neutral-500 border-2 rounded-t-2xl rounded-b-md">
          <legend className=" ml-2 text-xl leading-6 font-bold text-bob-secondary-100 mb-4 ">
            {'Mail Alert'}
          </legend>


          <div className="flex h-60 flex-wrap gap-6 overflow-y-auto hover:will-change-scroll card">
            <div className='space-y-1'>
              <Widget
                icon={<MdBarChart className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                title={'Broadcast messages'}
                subtitle={'0'}
              />
              <Widget
                icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                title={'Unread messages'}
                subtitle={'7'}
              />
            </div>
          </div>
        </fieldset>

        <fieldset className=" bg-bob-primary-0 border-bob-neutral-500 border-2 rounded-t-2xl rounded-b-md">
          <legend className=" ml-2 text-xl leading-6 font-bold text-bob-secondary-100 mb-4 ">
            {'Administration Alert'}
          </legend>


          <div className="flex h-60 flex-wrap gap-6 overflow-y-auto hover:will-change-scroll card">
            <div className='space-y-1'>
              <Widget
                icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                title={'Reports pending for approval'}
                subtitle={'18'}
              />
              <Widget
                icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                title={'Records sent for review'}
                subtitle={'5'}
              />
              <Widget
                icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                title={'Records approved'}
                subtitle={'7'}
              />
            </div>
          </div>
        </fieldset>


        {/* Card 2: Mail Alert */}
        <fieldset className=" bg-bob-primary-0 border-bob-neutral-500 border-2 rounded-t-2xl rounded-b-md">
          <legend className=" ml-2 text-xl leading-6 font-bold text-bob-secondary-100 mb-4 ">
            {'RM Alert'}
          </legend>


          <div className="flex h-60 flex-wrap gap-6 overflow-y-auto hover:will-change-scroll card">
            <div className='space-y-1'>
              <Widget
                icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                title={'Corporate Service Request(s) Pending Approval'}
                subtitle={'5'}
              />
              <Widget
                icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                title={'Customer Service Request(s) Pending Approval'}
                subtitle={'8'}
              />
              <Widget
                icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                title={'Customer Mutual Fund(s) Pending Approval'}
                subtitle={'6'}
              />
            </div>
          </div>
        </fieldset>
        {/* <div className='grid grid-cols-1 gap-6'>
            
          </div>
  
          <div className='grid grid-cols-1 gap-6'>
            
          </div> */}


      </div>

      <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-1">
        <CheckTable
          tableData={tableDataCheck}
        />
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5">

      </div>


      <div>
        <div className='grid grid-cols-1'>
          <fieldset className=" bg-bob-primary-0 border-bob-neutral-500 border-2  border-dashed rounded-t-2xl rounded-b-md">
            <legend className=" ml-2 text-xl text-center leading-6 font-bold text-bob-secondary-100 mb-4 ">
              {'Additional Information'}
            </legend>


            <div className="flex h-60 flex-wrap gap-6 overflow-y-auto hover:will-change-scroll card">
              <p className='mx-3'>
              </p>
              <></>
            </div>
          </fieldset>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Charts or Components Can be Added Here */}
      </div>

      <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-2">
        {/* Tables & Charts */}
      </div>


    </div>
  );

};

export default Dashboard;


const Card = ({ title, children }) => {
  return (
    <div className="bg-red-50 border-2 border-bob-neutral-500 rounded-lg shadow-md card p-2">
      <div>
        <h2 className="text-xl font-bold text-bob-secondary-100 mb-0">{title}</h2>
      </div>

      <div className="flex justify-between h-5/6 overflow-y-auto rounded-md card">
        {children}
      </div>
    </div>
  );
};
