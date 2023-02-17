import React, { useState, ChangeEvent } from 'react';
import { TextField } from '@material-ui/core';

interface SecretKeyFieldProps {
  onChange: (value: string) => void;
}

const SecretKeyField = (props: SecretKeyFieldProps) => {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    props.onChange(event.target.value);
  };

  return (
    <div style={{ margin: '10px', padding: '10px', lineHeight: '1' }}>
      <TextField
        id="secret-key-field"
        label="Secret key"
        value={value}
        onChange={handleChange}
        helperText="Enter secret key"
      />
    </div>
  );
};

export default SecretKeyField;
