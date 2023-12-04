'use client';

import InputField from "components/fields/InputField";
import Radio from "components/radio";
import { useState } from "react";

function UserMaintenanceList(props: { transparent?: boolean; vertical?: boolean }) {
    const [userDetails, setUserDetails] = useState({
        userDetails: false,
        retailMasterUserId: '',
        segmentName: '',
        mobileNumber: '',
        emailId: ''
    })

    const [customerIdDetails, setCustomerIdDetails] = useState({
        customerIdDetails: false,
        customerId: '',
        customerBankId: ''
    })

    const [accountNumberDetails, setAccountNumberDetails] = useState({
        accountNumberDetails: false,
        accountId: '',
        customerBankId: ''
    })

    const handleFieldChange = (e, section) => {
        const { id, value } = e.target;
        switch (section) {
            case 'userDetails':
                userDetails[id] = value;
                break;
            case 'customerIdDetails':
                customerIdDetails[id] = value;
                break;
            case 'accountNumberDetails':
                accountNumberDetails[id] = value;
                break;
            default:
                break;
        }
    };
    const [activeSection, setActiveSection] = useState(null);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const selectedData: any = {};

        if (activeSection === 'userDetails') {
            Object.assign(selectedData, {
                retailMasterUserId: userDetails.retailMasterUserId,
                segmentName: userDetails.segmentName,
                mobileNumber: userDetails.mobileNumber,
                emailId: userDetails.emailId,
            });
        } else if (activeSection === 'customerIdDetails') {
            Object.assign(selectedData, {
                customerId: customerIdDetails.customerId,
                customerBankId: customerIdDetails.customerBankId
            });
        } else if (activeSection === 'accountNumberDetails') {
            Object.assign(selectedData, {
                accountId: accountNumberDetails.accountId,
                customerBankId: accountNumberDetails.customerBankId
            });
        }

        const userListJson = JSON.stringify(selectedData);
        // console.log(userListJson); // You can send it to a server or use it as needed
    };

    return (
        <div className="space-y-12">
            <form onSubmit={handleSubmit}>
                <fieldset className="p-4 mt-4 border bg-bob-primary-0 border-gray-300 rounded-lg dark:bg-navy-900">
                    <legend className="text-lg mt-4 font-semibold leading-6 text-gray-900 dark:text-white">
                        Search Criteria
                    </legend>

                    <div className="mt-6 space-y-1 ">
                        <div className="p-4 mt-4 border border-gray-300 rounded-lg bg-white dark:text-white dark:bg-navy-800">
                            <div className="flex items-center gap-x-3 ">
                                <Radio
                                    id='userDetails'
                                    checked={activeSection === 'userDetails'}
                                    name='abc'
                                    onChange={() => {
                                        setActiveSection('userDetails');
                                        setAccountNumberDetails((prevUserDetails) => ({
                                            ...prevUserDetails,
                                            accountNumberDetails: false,
                                        }));
                                        setUserDetails((prevUserDetails) => ({
                                            ...prevUserDetails,
                                            userDetails: true,
                                        }));
                                        setCustomerIdDetails((prevUserDetails) => ({
                                            ...prevUserDetails,
                                            customerIdDetails: false,
                                        }));
                                    }}
                                />
                                <label htmlFor="userDetails" className="block text-m font-large leading-6 text-gray-900 dark:text-white ">
                                    User Details
                                </label>
                            </div>
                            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-10">
                                <div className="sm:col-span-2">
                                    <InputField
                                        variant="auth"
                                        id="retailMasterUserId"
                                        label="Retail Master User Id"
                                        placeholder="Enter Retail Master User Id"
                                        type="text"
                                        extra="mb-4"
                                        onChange={(e) => handleFieldChange(e, 'userDetails')}
                                        disabled={userDetails.userDetails === false}
                                    />
                                </div>
                                <div className="sm:col-span-2">
                                    <InputField
                                        variant="auth"
                                        id="segmentName"
                                        label="Segment Name"
                                        placeholder="Enter Segment Name"
                                        type="text"
                                        extra="mb-4"
                                        onChange={(e) => handleFieldChange(e, 'userDetails')}
                                        disabled={userDetails.userDetails === false}
                                    />
                                </div>
                                <div className="sm:col-span-2">
                                    <InputField
                                        variant="auth"
                                        id="mobileNumber"
                                        label="Mobile Number"
                                        placeholder="Enter Mobile Number"
                                        type="number"
                                        extra="mb-4"
                                        onChange={(e) => handleFieldChange(e, 'userDetails')}
                                        disabled={userDetails.userDetails === false}
                                    />
                                </div>
                                <div className="sm:col-span-2">
                                    <InputField
                                        variant="auth"
                                        id="emailId"
                                        label="Email Id"
                                        placeholder="Enter email"
                                        type="text"
                                        extra="mb-4"
                                        onChange={(e) => handleFieldChange(e, 'userDetails')}
                                        disabled={userDetails.userDetails === false}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 space-y-1 ">
                            <div className="p-4 mt-4 border border-gray-300 rounded-lg bg-white dark:text-white dark:bg-navy-800">
                                <div className="flex items-center gap-x-3">
                                    <Radio
                                        id='customerIdDetails'
                                        checked={activeSection === 'customerIdDetails'}
                                        name='abc'
                                        onChange={() => {
                                            setActiveSection('customerIdDetails');
                                            setAccountNumberDetails((prevUserDetails) => ({
                                                ...prevUserDetails,
                                                accountNumberDetails: false,
                                            }));
                                            setUserDetails((prevUserDetails) => ({
                                                ...prevUserDetails,
                                                userDetails: false,
                                            }));
                                            setCustomerIdDetails((prevUserDetails) => ({
                                                ...prevUserDetails,
                                                customerIdDetails: true,
                                            }));
                                        }}
                                    />
                                    <label htmlFor="customerIdDetails" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                        Customer Id Details
                                    </label>
                                </div>
                                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-10">
                                    <div className="sm:col-span-2">
                                        <InputField
                                            variant="auth"
                                            id="customerId"
                                            label="Customer Id"
                                            placeholder="Enter Customer Id"
                                            type="text"
                                            extra="mb-4"
                                            onChange={(e) => handleFieldChange(e, 'customerIdDetails')}
                                            disabled={customerIdDetails.customerIdDetails === false}
                                        />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <InputField
                                            variant="auth"
                                            id="customerBankId"
                                            label="Customer Bank Id"
                                            placeholder="Enter Customer Bank Id"
                                            type="text"
                                            extra="mb-4"
                                            onChange={(e) => handleFieldChange(e, 'customerIdDetails')}
                                            disabled={customerIdDetails.customerIdDetails === false}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 space-y-1 ">
                        <div className="p-4 mt-4 border border-gray-300 rounded-lg bg-white dark:text-white dark:bg-navy-800">
                            <div className="flex items-center gap-x-3">
                                <Radio
                                    id='accountNumberDetails'
                                    checked={activeSection === 'accountNumberDetails'}
                                    name='abc'
                                    onChange={() => {
                                        setActiveSection('accountNumberDetails');
                                        setAccountNumberDetails((prevUserDetails) => ({
                                            ...prevUserDetails,
                                            accountNumberDetails: true,
                                        }));
                                        setUserDetails((prevUserDetails) => ({
                                            ...prevUserDetails,
                                            userDetails: false,
                                        }));
                                        setCustomerIdDetails((prevUserDetails) => ({
                                            ...prevUserDetails,
                                            customerIdDetails: false,
                                        }));
                                    }}
                                />
                                <label htmlFor="accountNumberDetails" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                    Account Number Details
                                </label>
                            </div>
                            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-10">
                                <div className="sm:col-span-2">
                                    <InputField
                                        variant="auth"
                                        id="accountId"
                                        label="Account Id"
                                        placeholder="Enter Account Id"
                                        type="text"
                                        extra="mb-4"
                                        onChange={(e) => handleFieldChange(e, 'accountNumberDetails')}
                                        disabled={accountNumberDetails.accountNumberDetails === false}
                                    />
                                </div>
                                <div className="sm:col-span-2">
                                    <InputField
                                        variant="auth"
                                        id="customerBankId"
                                        label="Customer Bank Id"
                                        placeholder="Enter Customer Bank Id"
                                        type="text"
                                        extra="mb-4"
                                        onChange={(e) => handleFieldChange(e, 'accountNumberDetails')}
                                        disabled={accountNumberDetails.accountNumberDetails === false}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <div className="mb-4">
                    <button
                        type="submit"
                        className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:ring focus:ring-indigo-200"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default UserMaintenanceList
