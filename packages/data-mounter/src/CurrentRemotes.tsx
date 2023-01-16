import React from "react";
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const rows: GridRowsProp = [
  { id: 1, col1: 'Test', col2: 'S3' },
  { id: 2, col1: 'Test2', col2: 'S3' },
  { id: 3, col1: 'Test3', col2: 'S3' },
];

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Name', width: 150 },
  { field: 'col2', headerName: 'Type', width: 150 },
];

function CurrentRemotes({
  remotes
}: {
  remotes: { name: string; type: string }[];
}) {
  return (
    <div style={{ height: 300, width: '100%' }}>
    <DataGrid rows={rows} columns={columns} />
  </div>
  );
}

export default CurrentRemotes;
