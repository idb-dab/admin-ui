'use client';

import { DynamicForm } from '@idb-dab/dynamic-form-microfrontend';
import {personalFormData} from './personalFormData';
import { enachFormData } from './enachFormData';

export default function PersonalData() {
  return (
    <DynamicForm
      productID="152"
      channelID="33"
      formData={personalFormData}
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
