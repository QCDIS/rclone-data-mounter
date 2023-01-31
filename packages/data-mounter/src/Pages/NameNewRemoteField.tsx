import React from 'react';
import TextField from '@mui/material/TextField';

export default function NameNewRemoteField() {
    return (
        <div style={{ margin: '10px', padding: '10px', lineHeight: '1' }}>
            <TextField id="outlined-helperText" label="Remote name" defaultValue="Test" helperText="Enter a valid name for the new remote" />
        </div>
    );
}
