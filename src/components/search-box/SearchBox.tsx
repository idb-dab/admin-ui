import { FiSearch } from 'react-icons/fi';

export default function SearchBox() {
  return (
    <div className="flex items-center rounded-full bg-lightPrimary text-navy-700 dark:bg-navy-900 dark:text-white xl:w-[225px]">
      <p className="flex py-2 pl-3 pr-2 text-xl">
        <FiSearch className="h-6 w-6 text-gray-400 dark:text-white" />
      </p>
      <input
        type="text"
        placeholder="Search..."
        className="block h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-900 dark:text-white dark:placeholder:!text-white sm:w-fit"
      />
    </div>
  );
}
