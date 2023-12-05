'use client';

import DynamicForm from 'components/dynamic-form/DynamicForm';
import { FormData } from 'types/dynamic-form';

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
    {
      id: 'multi-select',
      type: 'multi-select',
      label: 'Select all that apply',
      selectables: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'],
      gridTemplate: 'grid-cols-3 gap-4',
    },
    {
      id: 'drop-select',
      type: 'drop-select',
      label: 'Select One',
      options: [
        { option: 'First option', value: 'first-value' },
        { option: 'Second option', value: 'second-value' },
      ],
      selectLabel: 'Please select from dropdown',
    },
  ];

  return (
    <DynamicForm
      formData={input}
      primaryAction={{ text: 'Submit', action: (e) => console.log(e), validationCheck: true }}
      secondaryAction={{ text: 'Cancel', action: () => console.log('cancelled') }}
    />
  );
}
