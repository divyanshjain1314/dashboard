import React, { useEffect, useState } from "react";
import "../../assets/css/sideBar.css";
import {
  Box,
  Stack,
  Typography,
  Divider,
  ButtonBase,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import verified from "../../assets/images/logos/verified.png";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { AccessAlarm, ThreeDRotation, HomeIcon } from "@mui/icons-material";
import config from "../../Config";
import Sidebar from "../../Components/Common/Sidebar";
import moment from "moment";
import Chart from "./Chart";

const DashboardIndex = () => {
  const [currentTime, setCurrentTime] = useState(moment().format("h:mm:ss a"));
  const currentDay = moment().format("dddd");
  const currentMonth = moment().format("MMMM");
  const currentDate = moment().format("DD");
  const formattedDate = `${currentDay}, ${currentMonth} ${currentDate}`;
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment().format("h:mm:ss a"));
    }, 1000);
    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);
  const tableData = [
    {
      id: 1,
      title: "S&P 500",
      amount: "498.84",
      perDay: "+4.76",
      perMonth: "0.96%",
    },
    {
      id: 2,
      title: "Dow Jones",
      amount: "24567.45",
      perDay: "+125.67",
      perMonth: "1.23%",
    },
    {
      id: 3,
      title: "Nasdaq",
      amount: "13452.67",
      perDay: "+78.90",
      perMonth: "1.34%",
    },
    {
      id: 4,
      title: "FTSE 100",
      amount: "6234.56",
      perDay: "-45.23",
      perMonth: "-0.56%",
    },
    {
      id: 5,
      title: "DAX",
      amount: "13456.78",
      perDay: "+56.34",
      perMonth: "1.02%",
    },
    {
      id: 6,
      title: "CAC 40",
      amount: "5678.90",
      perDay: "+34.56",
      perMonth: "0.78%",
    },
    {
      id: 7,
      title: "Nikkei 225",
      amount: "23456.78",
      perDay: "+89.34",
      perMonth: "1.45%",
    },
    {
      id: 8,
      title: "Hang Seng",
      amount: "27890.12",
      perDay: "-56.78",
      perMonth: "-0.67%",
    },
    {
      id: 9,
      title: "Shanghai Composite",
      amount: "3456.78",
      perDay: "+12.34",
      perMonth: "0.34%",
    },
    {
      id: 10,
      title: "S&P/ASX 200",
      amount: "6234.56",
      perDay: "+45.67",
      perMonth: "0.89%",
    },
    {
      id: 11,
      title: "BSE Sensex",
      amount: "48765.43",
      perDay: "+123.45",
      perMonth: "1.56%",
    },
    {
      id: 12,
      title: "Russell 2000",
      amount: "1987.65",
      perDay: "+10.45",
      perMonth: "0.53%",
    },
    {
      id: 13,
      title: "KOSPI",
      amount: "2987.65",
      perDay: "+23.45",
      perMonth: "0.79%",
    },
    {
      id: 14,
      title: "Ibovespa",
      amount: "115678.90",
      perDay: "-234.56",
      perMonth: "-2.03%",
    },
    {
      id: 15,
      title: "NZX 50",
      amount: "12678.90",
      perDay: "+56.78",
      perMonth: "0.45%",
    },
    {
      id: 16,
      title: "FTSE MIB",
      amount: "23456.78",
      perDay: "+34.56",
      perMonth: "0.67%",
    },
    {
      id: 17,
      title: "TSX",
      amount: "17890.12",
      perDay: "+45.67",
      perMonth: "0.78%",
    },
    {
      id: 18,
      title: "MOEX",
      amount: "3456.78",
      perDay: "+23.45",
      perMonth: "0.56%",
    },
    {
      id: 19,
      title: "ATX",
      amount: "5678.90",
      perDay: "+34.56",
      perMonth: "0.89%",
    },
    {
      id: 20,
      title: "OMX Stockholm 30",
      amount: "1987.65",
      perDay: "+12.34",
      perMonth: "0.67%",
    },
  ];

  console.log(tableData);

  return (
    <React.Fragment>
      <section>
        <p className="text-secondary position-absolute fs-6">{currentTime}</p>
        <div className="d-flex flex-wrap justify-content-between align-items-center py-3 pt-5 border-bottom-custom">
          <div className="d-flex flex-column ">
            <h3 className="text-white fw-bold">
              Hello, Jane{" "}
              <img src={verified} alt="verified" className="img-fluid" />
            </h3>
            <p className="text-secondary ">{formattedDate}</p>
          </div>
          <div>
            <div className="d-flex flex-wrap  ">
              <div className="ps-2">
                <button className="btn btn-theme-dark rounded-pill text-white">
                  <i className="bi bi-1-circle"></i> <span>For you</span>
                </button>
              </div>
              <div className="ps-2">
                <button className="btn btn-theme-dark rounded-pill text-white">
                  <i className="bi bi-1-circle"></i> <span>For you</span>
                </button>
              </div>
              <div className="ps-2">
                <button className="btn btn-theme-dark rounded-pill text-white">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 ">
        <div className="row">
          <div className="col-lg-5 h-auto">
            <div
              className="main-card-bg rounded shadow p-4"
              style={{ height: "100%" }}
            >
              <div className="d-flex flex-column h-100">
                <div>
                  <button className="btn btn-theme-dark rounded-pill text-white">
                    The market are <span className="text-success">bullish</span>
                  </button>
                  <button className="btn btn-theme-dark rounded-circle text-success ms-2">
                    <i className="bi bi-arrow-up-right"></i>
                  </button>
                </div>
                <div className="mt-auto">
                  <p className="text-secondary pt-4">
                    what you need to know today
                  </p>
                  <h5 className="text-white">
                    Jan Inflation Surges, Squezing Budgets; S&P 500 Rellies as
                    Markets Face 'Bumpy' 2% Path
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7" style={{ height: "100%" }}>
            <div className=" p-4 py-3 main-card-bg rounded shadow">
              <div className="d-flex justify-content-between py-3 mb-2">
                <h5 className="text-white">Sector Performance</h5>
                <h6 className="text-secondary">% price change</h6>
              </div>
              <div className="row">
                <div className="col-lg-6 sector-performance">
                  <div className="d-flex justify-content-between mb-2">
                    <div className="border-bottom-custom">
                      <p className="text-white fw-medium mb-0">All Sector</p>
                    </div>
                    <div className="">
                      <span className="btn text-white">
                        <span>+</span>0.88%
                      </span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <div className="border-bottom-custom ">
                      <p className="text-white fw-medium mb-0">Industrials</p>
                    </div>
                    <div className="">
                      <button className="btn ">
                        <span>+</span>1.66%
                      </button>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <div className="border-bottom-custom ">
                      <p className="text-white fw-medium mb-0">
                        Communication Services
                      </p>
                    </div>
                    <div className="">
                      <button className="btn ">
                        <span>+</span>1.55%
                      </button>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <div className="border-bottom-custom ">
                      <p className="text-white fw-medium mb-0">Technology</p>
                    </div>
                    <div className="">
                      <button className="btn ">
                        <span>+</span>1.08%
                      </button>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <div className="border-bottom-custom ">
                      <p className="text-white fw-medium mb-0">
                        Consumer Cyclical
                      </p>
                    </div>
                    <div className="">
                      <button className="btn ">
                        <span>+</span>1.02%
                      </button>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <div className="border-bottom-custom">
                      <p className="text-white fw-medium mb-0">Financial</p>
                    </div>
                    <div className="">
                      <button className="btn">
                        <span>+</span>0.99%
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 sector-performance">
                  <div className="d-flex justify-content-between mb-2">
                    <div className="border-bottom-custom">
                      <p className="text-white fw-medium mb-0">All Sector</p>
                    </div>
                    <div className="">
                      <span className="btn text-white">
                        <span>+</span>0.88%
                      </span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <div className="border-bottom-custom ">
                      <p className="text-white fw-medium mb-0">Industrials</p>
                    </div>
                    <div className="">
                      <button className="btn ">
                        <span>+</span>1.66%
                      </button>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <div className="border-bottom-custom ">
                      <p className="text-white fw-medium mb-0">
                        Communication Services
                      </p>
                    </div>
                    <div className="">
                      <button className="btn ">
                        <span>+</span>1.55%
                      </button>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <div className="border-bottom-custom ">
                      <p className="text-white fw-medium mb-0">Technology</p>
                    </div>
                    <div className="">
                      <button className="btn ">
                        <span>+</span>1.08%
                      </button>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <div className="border-bottom-custom ">
                      <p className="text-white fw-medium mb-0">
                        Consumer Cyclical
                      </p>
                    </div>
                    <div className="">
                      <button className="btn ">
                        <span>+</span>1.02%
                      </button>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <div className="border-bottom-custom">
                      <p className="text-white fw-medium mb-0">Financial</p>
                    </div>
                    <div className="">
                      <button className="btn">
                        <span>+</span>0.99%
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Markets */}

      <section>
        <div className="text-secondary mb-3"> <h5>Markets</h5> </div>
        <div className="row main-card-bg p-3 py-4 rounded mx-0">
          <div className="col-md-5">
            {/* table */}
            <div className="table-responsive">
              <table className="table table-hover border-0 sector-performance">
                <thead></thead>
                <tbody>
                  {tableData?.map((item) => {
                    return (
                      <tr key={item.id} className="pt-2">
                        <td className="bg-transparent text-white border-0 p-2">
                          <div className="">
                            {item.title}
                          </div>
                        </td>
                        <td className="bg-transparent text-white border-0 p-2">
                          {item.amount}
                        </td>
                        <td className="bg-transparent text-white border-0 p-2">
                          {item.perDay}
                        </td>
                        <td className="bg-transparent text-white border-0 p-2 text-end">
                          {" "}
                          <button className="btn">{item.perMonth}</button>{" "}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-lg-7">
            <Chart/>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default DashboardIndex;
