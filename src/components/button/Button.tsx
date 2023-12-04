export type ButtonProps = {
  type: 'primary' | 'secondary';
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
};

export default function Button({ type = 'primary', children, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex ${
        type === 'primary' ? 'bg-bob-secondary-300 text-white' : 'border-1 border-bob-secondary-300 text-bob-secondary-300'
      } w-fit rounded-md px-2 py-2 ${className}`}
    >
      {children}
    </button>
  );
}
