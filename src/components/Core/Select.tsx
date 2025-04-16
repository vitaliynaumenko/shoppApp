import React, { useCallback } from 'react';

interface ISelectProps {
  classes: string;
  data: Array<string> | null;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<ISelectProps> = ({ ...props }) => {
  const onSelectChange = useCallback(
    (...args: any) => {
      // @ts-ignore
      props.onChange?.(...args);
    },
    [props.onChange]
  );

  return (
    <select className={props.classes ?? ''} {...props} onChange={onSelectChange}>
      {props.data?.map((item, index) => <option key={index}>{item}</option>)}
    </select>
  );
};

export default Select;
