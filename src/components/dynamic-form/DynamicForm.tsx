'use client';

import Button from 'components/button/Button';
import InputField from 'components/fields/InputField';
import { ChangeEvent, useState } from 'react';

export type FormData = {
  type: 'text' | 'numeric' | 'select' | 'switch';
  id: string;
  label: string;
  validator?: (e: string) => boolean;
  placeholder?: string;
  disabled?: boolean;
  secret?: boolean;
};

export type DynamicFormProps = {
  onSubmit: (e: any) => void;
  formData: FormData[];
};

export default function DynamicForm({ formData, onSubmit }: DynamicFormProps) {
  // state for input data
  const [inputData, setInputData] = useState<any>({});

  // state for validations, initially all validations are true
  const [inputValidation, setInputValidation] = useState<any>(
    formData.reduce((obj, currentInput) => {
      obj[currentInput.id] = true;
      return obj;
    }, {})
  );

  return (
    <div className="flex w-full flex-col">
      {formData.map((each, key) => (
        <div key={key} className="flex w-full flex-col">
          {each.type === 'text' && (
            <InputField
              extra="flex w-1/2 flex-col"
              id={each.id}
              onBlur={() => {
                let temp = { ...inputValidation };
                temp[each.id] = each.validator(inputData[each.id]);
                setInputValidation(temp);
              }}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                let temp = { ...inputData };
                temp[each.id] = e.target.value;
                setInputData(temp);
              }}
              label={each.label}
              state={!inputValidation[each.id] ? 'error' : ''}
              placeholder={each.placeholder ? each.placeholder : each.label}
              disabled={each.disabled}
              type={each.secret && 'password'}
            />
          )}
        </div>
      ))}
      <Button className="mt-2" type="primary" onClick={() => onSubmit(inputData)}>
        Submit
      </Button>
    </div>
  );
}
