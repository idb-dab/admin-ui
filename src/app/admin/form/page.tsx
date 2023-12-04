'use client'

import DynamicForm, { FormData } from 'components/dynamic-form/DynamicForm';

export default function page() {
  const input: FormData[] = [
    {
      type: 'text',
      id: 'customerId',
      label: 'Customer ID',
      validator: (e: string) => e && e.length === 5,
      placeholder: 'Enter customer ID',
      disabled: false,
    },
  ];

  return <DynamicForm formData={input} onSubmit={(e) => console.log(e)} />;
}
