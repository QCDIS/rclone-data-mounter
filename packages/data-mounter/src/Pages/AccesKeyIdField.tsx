import React, { useState, ChangeEvent } from 'react';
import { TextField } from '@material-ui/core';

interface AccesKeyIdFieldProps {
  onChange: (value: string) => void;
}

const AccesKeyIdField = (props: AccesKeyIdFieldProps) => {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    props.onChange(event.target.value);
  };

  return (
    <div style={{ margin: '10px', padding: '10px', lineHeight: '1' }}>
      <TextField
        id="access-key-id-field"
        label="Access key ID"
        value={value}
        onChange={handleChange}
        helperText="Enter access key ID"
      />
    </div>
  );
};

export default AccesKeyIdField;
