import Card from 'components/card';

const Widget = (props: {
  icon?: JSX.Element;
  title: string;
  subtitle: string;
}) => {
  const { icon, title, subtitle } = props;
  return (
    <Card extra="!flex-row flex-grow items-center bg-bob-primary-50 rounded-xxl">
      <div className="ml-[18px] my-2 flex w-auto flex-row items-center">
        <div className="bg-white h-10 w-10 rounded-full flex items-center justify-center shadow-lg">
          {icon ? (
            <span className=" place-items-center rounded-full text-bob-neutral-700 dark:text-white">
              {icon}
            </span>
          ) : null}
        </div>
      </div>

      <div className="h-50 ml-4 flex w-auto flex-col justify-center">
        <p className="font-dm text-sm font-medium text-navy-700">{title}</p>
        <h4 className="text-md font-bold text-bob-secondary-100 dark:text-white">
          {subtitle}
        </h4>
      </div>
    </Card>
  );
};

export default Widget;
