import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 123312,
      product: "dell inspiron",
      img: "https://i.picsum.photos/id/916/200/300.jpg?grayscale&hmac=t1cfTR5BJhbHZpKWcRNgWGz1sd3ucOkrhI_HvfrdMxA",
      customer: "bikesh verma",
      date: "1 feb",
      amount: 456,
      method: "cash on delivery",
      status: "Approved",
    },
    {
      id: 433421,
      product: "asus ",
      img: "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
      customer: "rahul kumar",
      date: "1 jan",
      amount: 234,
      method: "online",
      status: "Approved",
    },
    {
      id: 43242,
      product: "lenovo legion",
      img: "https://i.picsum.photos/id/385/200/300.jpg?hmac=IG8cHDliDmlgbSYX1yquX_5cAHcuS_O378oPs5rZGrU",
      customer: "sahil saini ",
      date: "6 dec",
      amount: 123,
      method: "cash on delivery",
      status: "Pending",
    },
    {
      id: 232134,
      product: "mac ait",
      img: "https://i.picsum.photos/id/668/200/300.jpg?hmac=E7YE9NQG89nCsmW1hc-1nACBZTj9ll8IiXS65WjdD28",
      customer: "varun verma",
      date: "3 march",
      amount: 947,
      method: "online",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell"> {row.id} </TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}> {row.status}</span>
               </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
