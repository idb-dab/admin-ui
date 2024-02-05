import { useState } from 'react';
import FieldLabel from './fieldLabel';

// Custom components
function InputField(props: {
  id: string;
  label: string;
  extra?: string;
  placeholder: string;
  variant?: string;
  state?: string;
  disabled?: boolean;
  type?: string;
  onChange?: any;
  value?: any;
  onBlur?: () => void;
}) {
  const { label, id, extra, type, placeholder, variant, state, disabled, onChange, value, onBlur } = props;

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className={`${extra}`}>
      <FieldLabel variant={variant} id={id} text={label} />
      <div className="relative">
        <input
          onBlur={onBlur}
          onChange={onChange}
          disabled={disabled}
          type={isPasswordVisible ? 'text' : type}
          id={id}
          placeholder={placeholder}
          value={value}
          className={`flex h-12 w-full items-center justify-center rounded-lg border bg-white/0 p-3 text-sm outline-none ${
            disabled === true
              ? '!border-none !bg-gray-100 dark:!bg-white/5 dark:placeholder:!text-[rgba(255,255,255,0.15)]'
              : state === 'error'
              ? 'border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400'
              : state === 'success'
              ? 'border-green-500 text-green-500 placeholder:text-green-500 dark:!border-green-400 dark:!text-green-400 dark:placeholder:!text-green-400'
              : 'border-gray-200 dark:!border-white/10 dark:text-white'
          }`}
        />
        {type === 'password' && (
          <button className="absolute right-3 top-2 cursor-pointer text-gray-600 dark:text-gray-300" onClick={togglePasswordVisibility}>
            {isPasswordVisible ? 'Hide' : 'Show'}
          </button>
        )}
      </div>
    </div>
  );
}

export default InputField;
