import React, { useState, ChangeEvent } from 'react';
import { TextField } from '@material-ui/core';

interface EndpointS3APIFieldProps {
  onChange: (value: string) => void;
}

const EndpointS3APIField = (props: EndpointS3APIFieldProps) => {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    props.onChange(event.target.value);
  };

  return (
    <div style={{ margin: '10px', padding: '10px', lineHeight: '1' }}>
      <TextField
        id="endpoint-s3-api-field"
        label="Endpoint S3 API"
        value={value}
        onChange={handleChange}
        helperText="Enter endpoint S3 API"
      />
    </div>
  );
};

export default EndpointS3APIField;
