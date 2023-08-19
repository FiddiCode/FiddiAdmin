import React from 'react'
import './DataTable.scss'
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar,} from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const DataTable = (props) => {
    
    const handleDelete = (id) => {
        //delete the item
      };

    const actionColumn = {
        field: "action",
        headerName: "Action",
        width: 100,
        renderCell: (params) => {
          return (
            <div className="action">
              <Link to={`/${props.slug}/${params.row.id}`}>
              <VisibilityOutlinedIcon/>
              </Link>
              <div className="delete" onClick={() => handleDelete(params.row.id)}>
              <DeleteOutlineIcon/>
              </div>
            </div>
          );
        },
      };
  
  return (
    <div className='dataTable'>
          <Box sx={{ height: 750, width: '100%' }}>
      <DataGrid
        className='dataGrid'
        rows={props.rows}
        columns={[...props.columns,actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableDensitySelector
        disableColumnSelector
      />
    </Box>
    </div>
  )
}

export default DataTable;