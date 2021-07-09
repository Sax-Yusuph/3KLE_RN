import React from 'react';
import {PickerItem} from './PickerItem';
// import { useFormikContext } from 'formik';

import {AppPicker} from './ActualPicker';
// import ErrorMessage from './ErrorMessage';

export function AppFormPicker(props: any) {
  //   const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={props.items}
        numberOfColumns={props.numberOfColumns}
        onSelectItem={(item: any) => console.log('Hi!!!!!!!!!')}
        PickerItemComponent={PickerItem}
        placeholder={props.placeholder}
        // selectedItem={values[name]}
        width={props.width}
        placeholderStyle={props.placeholderStyle}
        textStyle={props.textStyle}
        iconSize={props.iconSize}
      />
      {/* <ErrorMessage error={errors[name]} visible={touched[name]} /> */}
    </>
  );
}
