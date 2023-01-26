import React from 'react';
import TextField from '@mui/material/TextField';

export default function NameNewRemoteField() {
    return (
        <div>
            <TextField id="outlined-helperText" label="Remote name" defaultValue="Test" helperText="Enter a valid name for the new remote" />
        </div>
    );
}
