'use client';
import React from 'react';
import { FormData } from 'types/dynamic-form';
import { DynamicForm } from '@idb-dab/dynamic-form-microfrontend';
import { formData } from './formData';

export default function FormPage() {
  // const formData: FormData[] = [
  //   {
  //     id: 'first-name',
  //     type: 'text',
  //     label: 'First Name',
  //     placeholder: 'Enter your first name',
  //   },
  //   {
  //     id: 'last-name',
  //     type: 'text',
  //     label: 'Last Name',
  //     placeholder: 'Enter your last name',
  //   },
  //   {
  //     id: 'email',
  //     type: 'text',
  //     label: 'Email',
  //     validator: (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),
  //     placeholder: 'Enter your email address',
  //   },
  //   {
  //     id: 'gender',
  //     type: 'drop-select',
  //     label: 'Gender',
  //     selectLabel: 'Pick one',
  //     options: [
  //       { option: 'Male', value: 'male' },
  //       { option: 'Female', value: 'female' },
  //     ],
  //   },
  //   {
  //     id: 'music',
  //     type: 'multi-select',
  //     label: 'Music',
  //     selectables: ['Music'],
  //   },
  // ];
  return (
    // <DynamicForm
    //   formData={formData}
    //   primaryAction={{ text: 'Submit', action: (e) => console.log(e), validationCheck: true }}
    //   secondaryAction={{ text: 'Cancel', action: () => console.log('cancelled') }}
    // />
    <DynamicForm
      productID="152"
      channelID="33"
      formData={formData}
      formConsents={[]}
      heading={'Dynamic Form'}
      subHeading={''}
      onErrorEvent="PERSONAL_DETAILS_CAPTURED"
      onSuccessEvent="PERSONAL_DETAILS_ERROR"
      buttonText={'Submit'}
      showBackButton={true}
      showSubmitButton={true}
      otherInfo={[]}
      buttonValid={false}
    />
  );
}
