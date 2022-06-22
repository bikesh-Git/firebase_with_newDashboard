import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const Widget = ({ type }) => {
  let data;

  //temprary
  let amount = 100;
  let percentage = 200;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "see all users",
        icon: (
          <PersonIcon
            className="icon"
            style={{
              backgroundColor: "rgb(198, 250, 198)",
              color: "rgb(104, 255, 104)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "see all users",
        icon: (
          <ShoppingCartIcon
            className="icon"
            style={{
              backgroundColor: "rgb(254, 255, 100)",
              color: "rgb(252, 255, 0)",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNING",
        isMoney: true,
        link: "view net earnings",
        icon: (
          <AttachMoneyIcon
            className="icon"
            style={{
              backgroundColor: "rgb(187, 250, 187)",
              color: "rgb(0, 190, 0)",
            }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "see details",
        icon: (
          <AccountBalanceWalletIcon
            className="icon"
            style={{
              backgroundColor: "rgb(198, 250, 198)",
              color: "rgb(104, 255, 104)",
            }}
          />
        ),
      };
      break;

    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {percentage}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
