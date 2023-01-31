import React from 'react';
import TextField from '@mui/material/TextField';

export default function EndpointS3APIField() {
    return (
        <div style={{ margin: '10px', padding: '10px', lineHeight: '1' }}>
            <TextField id="outlined-helperText" label="Endpoint for S3 API" defaultValue="Default" helperText="Leave blank if using AWS to use the default endpoint for the region." />
        </div>
    );
}
