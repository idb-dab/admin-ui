'use client';

import Button from 'components/button/Button';
import InputField from 'components/fields/InputField';
import MultiSelectField from 'components/fields/MultiSelectField';
import SelectField from 'components/fields/SelectField';
import FieldLabel from 'components/fields/fieldLabel';
import { ChangeEvent, useEffect, useState } from 'react';
import { FormData } from 'types/dynamic-form';

export type DynamicFormProps = {
  primaryAction?: { text: string; action: (e: any) => void; validationCheck?: boolean; disabled?: boolean };
  secondaryAction?: { text: string; action: (e: any) => void; disabled?: boolean };
  children?: React.ReactNode;
  formData: FormData[];
};

export default function DynamicForm({ formData, primaryAction, secondaryAction, children }: DynamicFormProps) {
  // state for input data
  const [inputData, setInputData] = useState<any>({});

  // state for validations, initially all validations are true
  const [inputValidation, setInputValidation] = useState<any>(
    formData.reduce((obj, currentInput) => {
      obj[currentInput.id] = true;
      return obj;
    }, {})
  );

  useEffect(() => {
    console.log(inputValidation);
  });

  return (
    <div className="flex w-full flex-col space-y-4">
      {formData.map((each, key) => (
        <div key={key} className="flex w-full flex-col">
          {/* Text Input */}
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

          {/* Multi Select Input */}
          {each.type === 'multi-select' && (
            <div className="flex w-1/2 flex-col">
              <MultiSelectField
                id={each.id}
                label={each.label}
                selectables={each.selectables}
                gridTemplate={each.gridTemplate}
                data={inputData[each.id]}
                setData={(e: string[]) => {
                  let temp = { ...inputData };
                  temp[each.id] = e;
                  setInputData(temp);
                }}
              />
            </div>
          )}

          {/* Dropdown Select Input */}
          {each.type === 'drop-select' && (
            <div className="flex w-1/2 flex-col">
              <FieldLabel id={each.id} text={each.label} />
              <SelectField
                id={each.id}
                label={each.selectLabel}
                options={each.options}
                setData={(e: string) => {
                  let temp = { ...inputData };
                  temp[each.id] = e;
                  setInputData(temp);
                }}
              />
            </div>
          )}
          {/* Children to be included in the form */}
          {children}
        </div>
      ))}
      {/* Form actions */}
      <div className="flex w-full space-x-4">
        {primaryAction && (
          <Button
            className="mt-2"
            type="primary"
            disabled={primaryAction.validationCheck && Object.values(inputValidation).includes(false) && primaryAction.disabled}
            onClick={() => primaryAction.action(inputData)}
          >
            {primaryAction.text}
          </Button>
        )}

        {secondaryAction && (
          <Button className="mt-2" type="secondary" disabled={secondaryAction.disabled} onClick={() => secondaryAction.action(inputData)}>
            {secondaryAction.text}
          </Button>
        )}
      </div>
    </div>
  );
}
