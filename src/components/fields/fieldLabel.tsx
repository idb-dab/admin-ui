export default function FieldLabel({ id, variant = 'normal', text }: { id: string; variant?: string; text: string }) {
  return (
    <label htmlFor={id} className={`text-sm text-navy-700 dark:text-white ${variant === 'auth' ? 'ml-1.5 font-medium' : 'font-bold'}`}>
      {text}
    </label>
  );
}
