export const usersColumns = [   { field: 'id', headerName: 'ID', width: 70 },
{ field: 'firstName', headerName: 'firstName', width: 150 },
{
    field: 'users',
    headerName: 'users',
    width: 230,
    renderCell: (params) =>{
        return(
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="avatar" />
                {params.row.username}
            </div>
        )
    }
  },
  { field: 'age', headerName: 'Age', width: 70 },


    ]


    export const usersRows = [
        { id: 1, username: 'Snow',img: "https://i.picsum.photos/id/385/200/300.jpg?hmac=IG8cHDliDmlgbSYX1yquX_5cAHcuS_O378oPs5rZGrU", firstName: 'Jon', age: 35 },
        { id: 2, username: 'Lannister', img: "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U", firstName: 'Cersei', age: 42 },
        { id: 3, username: 'Lannister',  img: "https://i.picsum.photos/id/916/200/300.jpg?grayscale&hmac=t1cfTR5BJhbHZpKWcRNgWGz1sd3ucOkrhI_HvfrdMxA", firstName: 'Jaime', age: 45 },
        { id: 4, username: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, username: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, username: 'Melisandre', firstName: null, age: 150 },
        { id: 7, username: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, username: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, username: 'Roxie', firstName: 'Harvey', age: 65 },
    ]