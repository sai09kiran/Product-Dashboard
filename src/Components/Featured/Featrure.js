import "../Featured/Feature.css";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Featrure = () => {
  return (
    <div className="feature">
      <div className="top">
        <h1 className="tittle">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="buttom">
        <div className="featuredlow">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">total sales made today</p>
        <p className="amount">$420</p>
        <p className="dese">
          {" "}
          previous transions procesing. last payment is not inclued
        </p>
        <div className="summary">
            <div className="info">
                <div className="infotittle">Target </div>
                <div className="inforesult negative">
                 <KeyboardArrowDownIcon fontSize="small"/>
                    <div className="resultamount">
                      $12.4k
                    </div>
                </div>
            </div>
            <div className="info">
                <div className="infotittle">last week </div>
                <div className="inforesult">
                 <KeyboardArrowUpIcon fontSize="small"/>
                    <div className="resultamount">
                      $12.4k
                    </div>
                </div>
            </div>
            <div className="info">
                <div className="infotittle">last month </div>
                <div className="inforesult positive" >
                 <KeyboardArrowDownIcon fontSize="small"/>
                    <div className="resultamount">
                      $12.4k
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Featrure;
