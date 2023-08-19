import React ,{useState}from 'react'
import './users.scss'
import DataTable from '../../components/DataTable/DataTable'
import { userRows } from "../../data";
import Add from '../../components/Add/Add';


const columns= [
  { field: "id", headerName: "ID", width: 80 },
  {
    field: "img",
    headerName: "Avatar",
    width: 80,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 100,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 100,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 140,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 120,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 100,
    type: "boolean",
  },
];



const Users = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className='users'>
      <div className="info">
        <h1>Users</h1>
        <button>Add New Users</button>
        </div>
        <DataTable slug='users' columns={columns} rows={userRows} />
        {open && <Add slug="user" columns={columns} setOpen={setOpen} />}

      
    </div>
  )
}

export default Users;