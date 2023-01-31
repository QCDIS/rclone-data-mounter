import React from 'react';
import TextField from '@mui/material/TextField';

export default function AccesKeyIdField() {
    return (
        <div style={{ margin: '10px', padding: '10px', lineHeight: '1' }}>
            <TextField id="outlined-helperText" label="Access_key_id" defaultValue="ID" helperText="Enter a valid access key for the new S3" />
        </div>
    );
}
