import React from 'react';
import TextField from '@mui/material/TextField';

export default function SecretKeyField() {
    return (
        <div style={{ margin: '10px', padding: '10px', lineHeight: '1' }}>
            <TextField id="outlined-helperText" label="Secret_key" defaultValue="Key" helperText="Enter a valid secret key for the new S3" />
        </div>
    );
}
