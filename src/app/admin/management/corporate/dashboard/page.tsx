'use client'
import React from 'react';
import Widget from 'components/widget/Widget';
import { IoDocuments } from 'react-icons/io5';
import { MdBarChart } from 'react-icons/md';
import ComplexTable from 'components/admin/default/ComplexTable'
import tableDataComplex from 'variables/data-tables/tableDataComplex'
import PieChartCard from 'components/admin/default/PieChartCard';
import DailyTraffic from 'components/admin/default/DailyTraffic';

const CorporateRelationshipManagementDashboard = () => {
  return (
    <div className="p-6">
      <div className='ml-4 mb-2 text-3xl'>
        Dashboard
      </div>
      <div className='grid grid-cols-1 mb-4 gap-8 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-4'>
        <div className='grid grid-cols-1 gap-6'>
          {/* <Card title={'Password Alerts'}
            children={<div className='space-y-1'>
              <Widget
                icon={<MdBarChart className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                title="Transaction Password Expiring in day(s)"
                subtitle="27"
              />
              <Widget
                icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                title="Last Unsuccessful Login Attempt"
                subtitle="10/05/2023 09:53:22 AM IST"
              />
              <Widget
                icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                title="Spend this month"
                subtitle="642.39"
              />
              <Widget
                icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                title="Spend this month"
                subtitle="642.39"
              />
            </div>} /> */}
          <fieldset className=" bg-bob-primary-0 border-bob-neutral-500 border-2 rounded-t-2xl rounded-b-md">
            <legend className=" ml-2 text-xl leading-6 font-bold text-bob-secondary-100 mb-4 ">
              {'Mail Alert'}
            </legend>


            <div className="flex h-60 flex-wrap gap-6 overflow-y-auto hover:will-change-scroll card">
              <div className='space-y-1'>
                <Widget
                  icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                  title={'Spend this month'}
                  subtitle={'642.39'}
                />
                <Widget
                  icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                  title={'Spend this month'}
                  subtitle={'642.39'}
                />
                <Widget
                  icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                  title={'Spend this month'}
                  subtitle={'642.39'}
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
                  icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                  title={'Spend this month'}
                  subtitle={'642.39'}
                />
                <Widget
                  icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                  title={'Spend this month'}
                  subtitle={'642.39'}
                />
                <Widget
                  icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                  title={'Spend this month'}
                  subtitle={'642.39'}
                />
              </div>
            </div>
          </fieldset>
        </div>
        {/* <div className='flex flex-auto border-bob-neutral-500 overflow-auto card'> */}

        <div className='grid grid-cols-1 gap-6'>
          <fieldset className=" bg-bob-primary-0 border-bob-neutral-500 border-2 rounded-t-2xl rounded-b-md">
            <legend className=" ml-2 text-xl leading-6 font-bold text-bob-secondary-100 mb-4 ">
              {'Mail Alert'}
            </legend>


            <div className="flex h-60 flex-wrap gap-6 overflow-y-auto hover:will-change-scroll card">
              <div className='space-y-1'>
                <Widget
                  icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                  title={'Spend this month'}
                  subtitle={'642.39'}
                />
                <Widget
                  icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                  title={'Spend this month'}
                  subtitle={'642.39'}
                />
                <Widget
                  icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                  title={'Spend this month'}
                  subtitle={'642.39'}
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
                  icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                  title={'Spend this month'}
                  subtitle={'642.39'}
                />
                <Widget
                  icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                  title={'Spend this month'}
                  subtitle={'642.39'}
                />
                <Widget
                  icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                  title={'Spend this month'}
                  subtitle={'642.39'}
                />
              </div>
            </div>
          </fieldset>
        </div>

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-1 col-span-2">
          <DailyTraffic />
          {/* <PieChartCard /> */}
          {/* </div> */}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 3xl:grid-cols-6">
        {/* Card 1: Password Alert */}
        <div className='grid grid-cols-1 gap-6'>
          <fieldset className=" bg-bob-primary-0 border-bob-neutral-500 border-2 rounded-t-2xl rounded-b-md">
            <legend className=" ml-2 text-xl leading-6 font-bold text-bob-secondary-100 mb-4 ">
              {'Mail Alert'}
            </legend>


            <div className="flex h-60 flex-wrap gap-6 overflow-y-auto hover:will-change-scroll card">
              <div className='space-y-1'>
                <Widget
                  icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                  title={'Spend this month'}
                  subtitle={'642.39'}
                />
                <Widget
                  icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                  title={'Spend this month'}
                  subtitle={'642.39'}
                />
                <Widget
                  icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                  title={'Spend this month'}
                  subtitle={'642.39'}
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
                  icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                  title={'Spend this month'}
                  subtitle={'642.39'}
                />
                <Widget
                  icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                  title={'Spend this month'}
                  subtitle={'642.39'}
                />
                <Widget
                  icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                  title={'Spend this month'}
                  subtitle={'642.39'}
                />
              </div>
            </div>
          </fieldset>
        </div>
        <div className='grid grid-cols-1'>
          <fieldset className=" bg-bob-primary-0 border-bob-neutral-500 border-2 rounded-t-2xl rounded-b-md">
            <legend className=" ml-2 text-xl leading-6 font-bold text-bob-secondary-100 mb-4 ">
              {'Mail Alert'}
            </legend>


            <div className="flex h-60 flex-wrap gap-6 overflow-y-auto hover:will-change-scroll card">
              <div className='space-y-1'>
                <Widget
                  icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                  title={'Spend this month'}
                  subtitle={'642.39'}
                />
                <Widget
                  icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                  title={'Spend this month'}
                  subtitle={'642.39'}
                />
                <Widget
                  icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                  title={'Spend this month'}
                  subtitle={'642.39'}
                />
              </div>
            </div>
          </fieldset>
          <fieldset className=" bg-bob-primary-0 border-bob-neutral-500 border-2 rounded-t-2xl rounded-b-md">
            <legend className=" ml-2 text-xl leading-6 font-bold text-bob-secondary-100 mb-4 ">
              {'Mail Alert'}
            </legend>


            <div className="flex h-60 flex-wrap gap-6 overflow-y-auto hover:will-change-scroll card">
              <div className='space-y-1' >
                <Widget
                  icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                  title={'Spend this month'}
                  subtitle={'642.39'}
                />
                <Widget
                  icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                  title={'Spend this month'}
                  subtitle={'642.39'}
                />
                <Widget
                  icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                  title={'Spend this month'}
                  subtitle={'642.39'}
                />
              </div>
            </div>
          </fieldset>
        </div>
        <div className=' space-y-2'>
          <Card
            title={'Relationship Management Alerts'}
            children={<div className='space-y-1'>
              <Widget
                icon={<MdBarChart className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                title={'Transaction Password Expiring in day(s)'}
                subtitle={'27'}
              />
              <Widget
                icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                title={'Last Unsuccessful Login Attempt'}
                subtitle={'10/05/2023 09:53:22 AM IST'}
              />
              <Widget
                icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                title={'Spend this month'}
                subtitle={'642.39'}
              />
              <Widget
                icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                title={'Spend this month'}
                subtitle={'642.39'}
              />
            </div>}
          />
          <Card
            title={'Administration Alerts'}
            children={<div className='space-y-1'>
              <Widget
                icon={<MdBarChart className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                title={'Transaction Password Expiring in day(s)'}
                subtitle={'27'}
              />
              <Widget
                icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                title={'Last Unsuccessful Login Attempt'}
                subtitle={'10/05/2023 09:53:22 AM IST'}
              />
              <Widget
                icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                title={'Spend this month'}
                subtitle={'642.39'}
              />
              <Widget
                icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                title={'Spend this month'}
                subtitle={'642.39'}
              />
            </div>}
          />
        </div>

        <div className='grid grid-cols-1 gap-6'>
          <Card title={'License Usage'}
            children={<div className='space-y-1'>
              <Widget
                icon={<MdBarChart className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                title="Transaction Password Expiring in day(s)"
                subtitle="27"
              />
              <Widget
                icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                title="Last Unsuccessful Login Attempt"
                subtitle="10/05/2023 09:53:22 AM IST"
              />
              <Widget
                icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                title="Spend this month"
                subtitle="642.39"
              />
              <Widget
                icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                title="Spend this month"
                subtitle="642.39"
              />
            </div>} />


          {/* Card 2: Mail Alert */}
          <Card
            title={'Digital Reports'}
            children={<div className='space-y-1'>
              <Widget
                icon={<MdBarChart className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                title={'Transaction Password Expiring in day(s)'}
                subtitle={'27'}
              />
              <Widget
                icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                title={'Last Unsuccessful Login Attempt'}
                subtitle={'10/05/2023 09:53:22 AM IST'}
              />
              <Widget
                icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                title={'Spend this month'}
                subtitle={'642.39'}
              />
              <Widget
                icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                title={'Spend this month'}
                subtitle={'642.39'}
              />
            </div>}
          />
        </div>
        <div>

        </div>



        {/* More Cards Can be Added Here */}
      </div>

      <div className='flex justify-between'>
        <fieldset className=" bg-bob-primary-0 mx-2 border-bob-neutral-500 border-2 rounded-t-2xl rounded-b-md">
          <legend className=" ml-2 text-xl leading-6 font-bold text-bob-secondary-100 mb-4 ">
            {'Mail Alert'}
          </legend>


          <div className="flex h-60 mx-1 flex-wrap gap-6 overflow-y-auto hover:will-change-scroll card">
            <div className='space-y-1 mr-3'>
              <Widget
                icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                title={'Spend this month'}
                subtitle={'642.39'}
              />
              <Widget
                icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                title={'Spend this month'}
                subtitle={'642.39'}
              />
              <Widget
                icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                title={'Spend this month'}
                subtitle={'642.39'}
              />
              <Widget
                icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                title={'Spend this month'}
                subtitle={'642.39'}
              />
              <Widget
                icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                title={'Spend this month'}
                subtitle={'642.39'}
              />
              <Widget
                icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                title={'Spend this month'}
                subtitle={'642.39'}
              />
              <Widget
                icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                title={'Spend this month'}
                subtitle={'642.39'}
              />
              <Widget
                icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                title={'Spend this month'}
                subtitle={'642.39'}
              />
              <Widget
                icon={<IoDocuments className="h-2 w-2 md:h-5 md:w-5 lg:h-8 lg:w-8" />}
                title={'Spend this month'}
                subtitle={'642.39'}
              />
            </div>
          </div>
        </fieldset>
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
                Bank can use this placeholder to:
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

// Card component
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

export default CorporateRelationshipManagementDashboard;
