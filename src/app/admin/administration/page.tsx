'use client';
import Checkbox from 'components/checkbox';
import Dropdown from 'components/dropdown';
import InputField from 'components/fields/InputField';
import React, { ChangeEvent, useState } from 'react';
import { AiOutlineShop, AiOutlineUser } from 'react-icons/ai';
import { BsArrowBarUp, BsThreeDots, BsThreeDotsVertical } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import { MdArrowDropDown } from 'react-icons/md';
import { TiLightbulb } from 'react-icons/ti';

function ComplexFormPage(props: { transparent?: boolean; vertical?: boolean }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender: 'male',
    interests: [],
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault()
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleFieldChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleGenderChange = (e) => {
    const gender = e.target.value;
    setFormData({ ...formData, gender });
  };

  const handleInterestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    const interests = formData.interests.slice();

    if (checked) {
      interests.push(name);
    } else {
      const index = interests.indexOf(name);
      if (index !== -1) {
        interests.splice(index, 1);
      }
    }

    setFormData({ ...formData, interests });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formDataJson = JSON.stringify(formData);
    console.log(formDataJson); // You can send it to a server or use it as needed
  };

  const { transparent, vertical } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold mb-4">Form</h1>
      <form onSubmit={handleSubmit}>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <InputField
              variant="auth"
              id="firstName"
              label="First Name"
              placeholder="Enter your first name"
              type="text"
              extra="mb-4"
              value={formData.firstName}
              onChange={handleFieldChange}
            />
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <InputField
              variant="auth"
              id="lastName"
              label="Last Name"
              placeholder="Enter your first name"
              type="text"
              extra="mb-4"
              value={formData.lastName}
              onChange={handleFieldChange}
            />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <InputField
              variant="auth"
              id="email"
              label="Email"
              placeholder="Enter your email"
              type="text"
              extra="mb-4"
              value={formData.email}
              onChange={handleFieldChange}
            />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <InputField
              variant="auth"
              id="password"
              label="Password"
              placeholder="Enter Password"
              type="password"
              extra="mb-4"
              value={formData.password}
              onChange={handleFieldChange}
            />

          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="gender" className="block font-medium text-gray-700">
            Gender
          </label>
          <Dropdown
            button={
              <button
                onClick={toggleDropdown}
                className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-200"
              >
                {formData.gender}
              </button>
            }
            animation="origin-top-right transition-all duration-300 ease-in-out"
            classNames="top-11 left-0 w-max">
              <div className="z-50 left w-max rounded-xl bg-white py-3 px-4 text-sm shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                <option value="male" onClick={handleGenderChange} className="hover:text-black flex cursor-pointer items-center gap-2 text-gray-600 hover:font-medium">
                  <span>
                    Male
                  </span>
                </option>
                <option value="female" onClick={handleGenderChange} className="hover:text-black mt-2 flex cursor-pointer items-center gap-2 pt-1 text-gray-600 hover:font-medium">
                  <span>
                    Female
                  </span>
                </option>
                <option value="other" onClick={handleGenderChange} className="hover:text-black mt-2 flex cursor-pointer items-center gap-2 pt-1 text-gray-600 hover:font-medium">
                  <span>
                    Other
                  </span>
                </option>
              </div>
              </Dropdown>
        </div>
        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">

          <label className="inline-flex items-center">
            <Checkbox
              id='music'
              name='music'
              checked={formData.interests.includes('music')}
              onChange={handleInterestChange}
              extra="text-indigo-600 border-gray-300 rounded focus:ring focus:ring-indigo-200"
            />
            <span className="ml-2">Music</span>
          </label>
        </div>
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
  );
};

export default ComplexFormPage;
