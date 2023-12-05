export type ButtonProps = {
  type: 'primary' | 'secondary';
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
};

export default function Button({ type = 'primary', children, onClick, className, disabled }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex ${type === 'primary' ? 'bg-bob-secondary-300 text-white' : 'border-1 border-bob-secondary-300 text-bob-secondary-300'} ${
        disabled && 'opacity-30'
      } w-fit rounded-md px-2 py-2 ${className}`}
    >
      {children}
    </button>
  );
}
