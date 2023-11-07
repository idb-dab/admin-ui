'use client'
import React, { useState } from 'react';
import Widget from 'components/widget/Widget';
import { IoMdHome } from 'react-icons/io';
import { IoDocuments } from 'react-icons/io5';
import { MdBarChart, MdDashboard } from 'react-icons/md';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

const Section = ({ title, content, isVisible, toggleSection }) => {
    return (
        <div className="mb-5 ">
            <div
                className={`text-left flex justify-between text-md bg-red-50 border-x-[2.5px] border-y-[1px] border-y-orange-400 border-x-orange-400 rounded-[6px] border-bob-secondary-100 bg-bob-primary-50 bg-blend-saturation cursor-pointer ${isVisible
                    ? 'text-bob-secondary-100 border-lightPrimary shadow-shadow-500 dark:text-white dark:shadow-none'
                    : 'text-bob-secondary-100 dark:text-white dark:shadow-none'
                    }`}
                onClick={toggleSection}
            >
                <div className="ml-5 text-bob-secondary-100">
                    {title}
                </div>
                <div>
                    {isVisible ? (
                        <BsChevronUp /> // Show BsChevronUp when isVisible is true
                    ) : (
                        <BsChevronDown />
                    )}
                </div>
            </div>
            {isVisible && (
                <div
                    className={`grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6 w-auto rounded-xl py-3 px-4 text-sm shadow-xl shadow-shadow-500 ${isVisible
                        ? 'bg-white dark:!bg-navy-700 dark:shadow-none'
                        : 'bg-gray-100 dark:bg-gray-700 dark:shadow-none'
                        }`}
                >
                    {content}
                </div>
            )}
        </div>
    );
};

const DashboardSection = ({ title, widgets, isVisible, toggleSection }) => {
    return (
        <Section
            title={title}
            content={widgets}
            isVisible={isVisible}
            toggleSection={toggleSection}
        />
    );
};

const RetailRelationshipManagementDashboard = () => {
    const [sectionVisibility, setSectionVisibility] = useState({
        passwordAlerts: false,
        mailAlerts: false,
        relationshipManagementAlerts: false,
        administrationAlerts: false,

        // Add more sections as needed
    });

    const toggleSection = (sectionName) => {
        setSectionVisibility((prevState) => ({
            ...prevState,
            [sectionName]: !prevState[sectionName],
        }));
    };

    const passwordAlertsWidgets = [
        <Widget
            icon={<MdBarChart className="h-7 w-7" />}
            title={'Transaction Password Expiring in day(s)'}
            subtitle={'27'}
        />,
        <Widget
            icon={<IoDocuments className="h-6 w-6" />}
            title={'Last Unsuccessful Login Attempt'}
            subtitle={'10/05/2023 09:53:22 AM IST'}
        />,
        // Add more widgets as needed
    ];

    const mailAlertsWidgets = [
        <Widget
            icon={<MdBarChart className="h-7 w-7" />}
            title={'Earnings'}
            subtitle={'$340.5'}
        />,
        <Widget
            icon={<IoDocuments className="h-6 w-6" />}
            title={'Spend this month'}
            subtitle={'$642.39'}
        />,
        // Add more widgets as needed
    ];

    const relationshipManagementAlertsWidgets = [
        <Widget
            icon={<MdBarChart className="h-7 w-7" />}
            title={'Earnings'}
            subtitle={'$340.5'}
        />,
        <Widget
            icon={<IoDocuments className="h-6 w-6" />}
            title={'Spend this month'}
            subtitle={'$642.39'}
        />,
        // Add more widgets as needed
    ];

    const administrationAlertsWidgets = [
        <Widget
            icon={<MdBarChart className="h-7 w-7" />}
            title={'Earnings'}
            subtitle={'$340.5'}
        />,
        <Widget
            icon={<IoDocuments className="h-6 w-6" />}
            title={'Spend this month'}
            subtitle={'$642.39'}
        />,
        // Add more widgets as needed
    ];

    return (
        <div>
            <div className='font-bold mt-10 ml-5 text-[30px] text-bob-secondary-100'>
                <h6>
                    Dashboard
                </h6>
            </div>
            <div className="p-5">
                <DashboardSection
                    title="Password Alerts"
                    widgets={passwordAlertsWidgets}
                    isVisible={sectionVisibility.passwordAlerts}
                    toggleSection={() => toggleSection('passwordAlerts')}
                />
                <DashboardSection
                    title="Mail Alerts"
                    widgets={mailAlertsWidgets}
                    isVisible={sectionVisibility.mailAlerts}
                    toggleSection={() => toggleSection('mailAlerts')}
                />
                <DashboardSection
                    title="Relationship Management Alerts"
                    widgets={relationshipManagementAlertsWidgets}
                    isVisible={sectionVisibility.relationshipManagementAlerts}
                    toggleSection={() => toggleSection('relationshipManagementAlerts')}
                />
                <DashboardSection
                    title="Administration Alerts"
                    widgets={administrationAlertsWidgets}
                    isVisible={sectionVisibility.administrationAlerts}
                    toggleSection={() => toggleSection('administrationAlerts')}
                />
                {/* Add more sections as needed */}
            </div>
        </div>

    );
};

export default RetailRelationshipManagementDashboard;
