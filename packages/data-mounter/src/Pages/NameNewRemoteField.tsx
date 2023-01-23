import React from 'react';
import TextField from '@mui/material/TextField';

export default function NameNewRemoteField() {
    return (
        <div>
            <TextField id="outlined-helperText" label="Access_key_id" defaultValue="ID" helperText="Enter a valid access key for the new remote" />
        </div>
    );
}
