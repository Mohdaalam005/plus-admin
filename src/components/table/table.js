
import { Button, Grid } from '@mui/material';
import { DataGrid , } from '@mui/x-data-grid';

import "./table.css"



const columns = [
  { field: 'id', headerName: 'ID', width: 100 ,  headerClassName: 'customHeader'},
  { field: 'firstName', headerName: 'PORTLS', width: 800 ,  headerClassName: 'customHeader'}, 
  { field: 'lastName', headerName: 'CREATE DATE',  headerClassName: 'customHeader' ,width: 150 },
  {
    field: 'action',
    headerName: 'Action',
    width: 180,
    headerClassName: 'customHeader',
    sortable: false,
    disableClickEventBubbling: true,

    renderCell: () =>
    <Grid>
    <Button variant='outlined' sx={{marginRight : '10px'}} onClick={() => editPortal()}>
        EDIT
    </Button>
    <Button variant='outlined' onClick={() => mergePortal()}>
        MERGE
    </Button>

    </Grid>
   
   

  }
]  
const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataTable() {
  return (
    <Grid style={{ height: 400 , position :'relative', top : '155px', left : '64px'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        classes={{
          columnHeader: 'customColumnHeader',
          cell: 'customCell',
        }}
        

        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        // checkboxSelection
      />
    </Grid>
  );
}
function editPortal() {
    
}
function mergePortal( ) {
    
}



