import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revanve</h1>
        <MoreVertIcon fontSize="small" />
      </div>

      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar
            value={66}
            maxValue={100}
            text={"70%"}
            strokeWidth={5}
          />
        </div>

        <p className="title"> total sale made today</p>
        <p className="amount"> $440</p>
        <p className="desc">
          previous transaction processing. last payment may not be included.
        </p>

        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon fontSize="small" />
              <div className="resultAmount">$20.78</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last week</div>
            <div className="itemResult negative">
              <KeyboardArrowUpIcon fontSize="small" />
              <div className="resultAmount">$1220.78</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon  fontSize="small" />
              <div className="resultAmount">$232.78</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Featured;
