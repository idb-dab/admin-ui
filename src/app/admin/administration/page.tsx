'use client';
import DynamicForm from 'components/dynamic-form/DynamicForm';
import React from 'react';
import { FormData } from 'types/dynamic-form';

function ComplexFormPage(props: { transparent?: boolean; vertical?: boolean }) {

  const formData: FormData[] = [
    {
      id: "first-name",
      type: "text",
      label: "First Name",
      placeholder: "Enter your first name"
    },
    {
      id: "last-name",
      type: "text",
      label: "Last Name",
      placeholder: "Enter your last name"
    },
    {
      id: "email",
      type: "text",
      label: "Email",
      validator: (e:string)=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),
      placeholder: "Enter your email address"
    },
    {
      id: "gender",
      type: "drop-select",
      label: "Gender",
      selectLabel: "Pick one",
      options: [
        {option: "Male", value: "male"},
        {option: "Female", value: "female"},
      ]
    },
    {
      id: "music",
      type: "multi-select",
      label: "Music",
      selectables: ["Music"]
    }
  ]
  return (
    <DynamicForm
      formData={formData}
      primaryAction={{ text: 'Submit', action: (e) => console.log(e), validationCheck: true }}
      secondaryAction={{ text: 'Cancel', action: () => console.log('cancelled') }}
    />
  );
};

export default ComplexFormPage;
