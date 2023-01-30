import React from 'react';
import TextField from '@mui/material/TextField';

export default function SecretKeyField() {
    return (
        <div>
            <TextField id="outlined-helperText" label="Secret_key" defaultValue="Key" helperText="Enter a valid asecret key for the new remote" />
        </div>
    );
}
