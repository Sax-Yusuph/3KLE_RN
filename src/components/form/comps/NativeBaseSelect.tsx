import React from 'react';
<<<<<<< HEAD
import {
  Select,
  CheckIcon
} from 'native-base';

export const Example = (props: any) => {
  let [language, setLanguage] = React.useState('')
  return (
        <Select
            selectedValue={language}
            minWidth={200}
            placeholder={props.label}
            onValueChange={(itemValue) => console.log(itemValue)}
            _selectedItem={{
                bg: 'blue.600',
                endIcon: <CheckIcon size={4} />,
            }}
        >
            {props.item.map((item: any) => {
                <Select.Item label={item.label} value={item.value} />
            })}
        </Select>
  )
}
=======
import {Select, CheckIcon} from 'native-base';

export const Example = (props: any) => {
  let [language, setLanguage] = React.useState('');
  return (
    <Select
      selectedValue={language}
      minWidth={200}
      placeholder={props.label}
      onValueChange={itemValue => console.log(itemValue)}
      _selectedItem={{
        bg: 'blue.600',
        endIcon: <CheckIcon size={4} />,
      }}>
      {props.item.map((item: any) => {
        <Select.Item label={item.label} value={item.value} />;
      })}
    </Select>
  );
};
>>>>>>> dev/setup
