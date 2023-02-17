import React, { useState, ChangeEvent } from 'react';
import { TextField } from '@material-ui/core';

interface NameNewRemoteFieldProps {
  onChange: (value: string) => void;
}

const NameNewRemoteField = (props: NameNewRemoteFieldProps) => {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    props.onChange(event.target.value);
  };

  return (
    <div style={{ margin: '10px', padding: '10px', lineHeight: '1' }}>
      <TextField
        id="new-remote-name-field"
        label="Remote name"
        value={value}
        onChange={handleChange}
        helperText="Enter a valid name for the new remote"
      />
    </div>
  );
};

export default NameNewRemoteField;
