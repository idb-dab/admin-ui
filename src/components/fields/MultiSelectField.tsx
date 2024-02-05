import Checkbox from 'components/checkbox';
import FieldLabel from './fieldLabel';

export type MultiSelectFieldProps = {
  id: string;
  label: string;
  gridTemplate?: string;
  selectables: string[];
  data: string[];
  setData: (e: string[]) => void;
};
export default function MultiSelectField({ id, label, gridTemplate, selectables, data, setData }: MultiSelectFieldProps) {
  return (
    <div className="flex w-full flex-col">
      <FieldLabel id={id} text={label} />
      <div className={`${gridTemplate ? 'grid ' + gridTemplate : 'flex-col space-y-2 w-full'}`}>
        {selectables.map((each, key) => (
          <div key={key} className="flex w-full mt-2 space-x-2 text-sm">
            <Checkbox
              id={id}
              onChange={(e) => {
                let temp = data ? [...data] : [];
                if (e.target.checked && !temp.includes(each)) {
                  temp.push(each);
                  setData(temp);
                } else if (!e.target.checked && temp.includes(each)) {
                  temp.splice(temp.indexOf(each), 1);
                  setData(temp);
                }
              }}
            />
            <span>{each}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
