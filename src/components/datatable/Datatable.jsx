import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { usersColumns, usersRows } from "../../datatableSource";
import { Link } from "react-router-dom";

const Datatable = ({title}) => {
  const actionColumns = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: () => {
        return (
          <div className="cellAction">
            <Link to="/users/testt">
              <div className="viewBtn">view</div>
            </Link>
            <div className="deleteBtn">delete</div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add new User
          <Link to="/users/new" className="link">Add new</Link>
      </div>
      <DataGrid
        rows={usersRows}
        columns={usersColumns.concat(actionColumns)}
        pageSize={7}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
