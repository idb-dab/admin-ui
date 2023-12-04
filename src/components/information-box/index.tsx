import Dropdown from 'components/dropdown';
import { IoMdInformationCircleOutline } from 'react-icons/io';

export default function InformationBox() {
  return (
    <Dropdown
      button={
        <p className="cursor-pointer">
          <IoMdInformationCircleOutline className="h-4 w-4 text-gray-600 dark:text-white" />
        </p>
      }
      classNames={'py-2 top-6 -left-[250px] md:-left-[330px] w-max'}
      animation="origin-[75%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
    >
      <div className="flex w-[350px] flex-col gap-2 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
        Information
      </div>
    </Dropdown>
  );
}
