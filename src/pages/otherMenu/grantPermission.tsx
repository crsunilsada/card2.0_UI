import { useEffect,useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Row, Col, Table, Button } from "react-bootstrap";
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;
const grantPermission = () => {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
    const pendingtableData = [
        {
            SNo: "1",
            UserName: "Krishna",
            RegType: "Urban",
            SROName: "KANKIPADU",
            DistrictName: "Krishna",
            VillageName: "Kankipadu",
            PPCheck: "",
            AllowPermission: "",
        },
        {
            SNo: "2",
            UserName: "Bharat",
            RegType: "Urban",
            SROName: "KANKIPADU",
            DistrictName: "Krishna",
            VillageName: "Kankipadu",
            PPCheck: "",
            AllowPermission: "",
        },
        {
            SNo: "3",
            UserName: "Rakesh",
            RegType: "Urban",
            SROName: "KANKIPADU",
            DistrictName: "Krishna",
            VillageName: "Kankipadu",
            PPCheck: "",
            AllowPermission: "",
        },
        {
            SNo: "4",
            UserName: "Sudarshan",
            RegType: "Urban",
            SROName: "KANKIPADU",
            DistrictName: "Krishna",
            VillageName: "Kankipadu",
            PPCheck: "",
            AllowPermission: "",
        },
        {
            SNo: "5",
            UserName: "Prashanth",
            RegType: "Urban",
            SROName: "KANKIPADU",
            DistrictName: "Krishna",
            VillageName: "Kankipadu",
            PPCheck: "",
            AllowPermission: "",
        },
    ]
    const [clickedRowIndex, setClickedRowIndex] = useState(-1);

    const handleButtonClick = (index) => {
      setClickedRowIndex(index);
    };
  
    const isRowDisabled = (index) => {
      return index === clickedRowIndex;
    };

    return (
        <div className="pageMainWrap">
            <Head>
                <title>Grant Permission-CARD</title>
                <meta name="description" content="login" />
                <link rel="icon" href="/igrsfavicon.ico" />
            </Head>
            <div className="mainWrapper">
                <div className="otherMenuwrapperInner1">
                    <div className="acknowledgement">
                        <h4>PP Grant Permission</h4>
                    </div>
                    <div className="documentsTable pageTableMain pageTableContainer">
                        <Row >
                        <Col xxl={2} xl={2} lg={2} md={12} sm={12} >
                        </Col>
                        <Col xxl={0} xl={0} lg={0} md={0} sm={0}></Col>
                            <Col xxl={5} xl={5} lg={8} md={10} sm={12} className="float-end my-1">
                            <input
                                type="text"
                                className="justify-content-end float-end search-click"
                                name=""
                                placeholder=" Search Here"
                            />
                            </Col>
                            <Col xxl={1} xl={1} lg={12} md={9}sm={12} className="my-1 mx-2 px-1">
                                <button className="today">Today</button>
                                </Col>
                                <Col xxl={2} xl={2} lg={4} md={6} sm={12} className="my-1">
                                <RangePicker/>
                                </Col>
                        </Row>
                        <div className="table-responsive">
                        <Table bordered className="tableData listData tableheadBg">
                            <thead>
                                <tr>
                                    <th rowSpan={2} className="text-center">
                                        S.No
                                    </th>
                                    <th rowSpan={2} className="text-center">
                                        User Name
                                    </th>
                                    <th rowSpan={2} className="text-center">
                                        Reg Type
                                    </th>
                                    <th rowSpan={2} className="text-center">
                                        SRO Name
                                    </th>
                                    <th rowSpan={2} className="text-center">
                                        District Name
                                    </th>
                                    <th rowSpan={2} className="text-center">
                                        Village Name
                                    </th>
                                    <th rowSpan={2} className="text-center">
                                        PP Check
                                    </th>
                                    <th rowSpan={2} className="text-center">
                                        Allow Permission
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {pendingtableData.map((item, index) => {
                                    return (
                                        <tr key={index} style={{ opacity: isRowDisabled(index) ? "0.5" : "1", pointerEvents: isRowDisabled(index) ? 'none' : 'auto' }}>
                                            <td className="text-center">{item.SNo}</td>
                                            <td className="text-center">{item.UserName}</td>
                                            <td className="text-center">{item.RegType}</td>
                                            <td className="text-center">{item.SROName}</td>
                                            <td className="text-center">{item.DistrictName}</td>
                                            <td className="text-center">{item.VillageName}</td>
                                            <td className="text-center">
                                                <div className="image-container">
                                                    <Image src="/images/info.svg"
                                                        width={20}
                                                        height={27}
                                                        alt="Your Image" />
                                                    <Table bordered className="tableData listData tableheadBg">
                                                        <thead>
                                                            <tr>
                                                                <th rowSpan={2}>Survey No</th>
                                                                <th rowSpan={2}>Sub Survey No</th>
                                                                <th rowSpan={2}>Plat No</th>
                                                                <th rowSpan={2}>Extent</th>
                                                                <th rowSpan={2}>Unit</th>
                                                                <th colSpan={2}>Prohibited</th>
                                                                <th colSpan={2}>Notified Gazette</th>
                                                                <th rowSpan={2}>Other Reference</th>
                                                                <th rowSpan={2}>Entry Date</th>
                                                                <th rowSpan={2}>Holder Name</th>
                                                            </tr>
                                                            <tr>
                                                                <th>Code</th>
                                                                <th>Description</th>
                                                                <th>No</th>
                                                                <th>Date</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>1</td>
                                                                <td></td>
                                                                <td>1</td>
                                                                <td>1.02</td>
                                                                <td>A</td>
                                                                <td>1</td>
                                                                <td>Govt Land</td>
                                                                <td>Revese r16</td>
                                                                <td>14/05/2018</td>
                                                                <td>Collector Krishna Machillipatnam</td>
                                                                <td>16-Sep-2018</td>
                                                                <td>Section 22(A)(1)(B)</td>
                                                            </tr></tbody>
                                                    </Table>
                                                </div>
                                            </td>
                                            <td className="text-center">
                                            <div>
                                                    {isRowDisabled(index) ? (
                                                        <span>Permission Granted</span>
                                                    ) : (
                                                        <Button onClick={() => handleButtonClick(index)} className="bluebuttonclass float-none">Allow</Button>
                                                    )}
                                                </div>
                                                </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                        </div>
                        <div className="paginationMain">
                        <ul className="pagination d-flex align-items-center justify-content-end">
                          <li className="PageItems">
                            Items per page:
                            <select className="text-center"
                              value={5}
                              onChange={(e) => {
                                setPageSize(Number(e.target.value));
                              }}
                            >
                              {[5, 10, 15, 20].map((pageSize) => (
                                <option key={pageSize} value={pageSize}>
                                  {pageSize}
                                </option>
                              ))}
                            </select>
                          </li>
                          <li className="pagesList">
                            <a className="page-link"></a>
                          </li>
                          <li
                            className="paginationPrev pageNav"
                            onClick={() => previousPage()}
                          >
                            <a className="page-link">
                              <img src="/images/pagination-prev.jpg" />
                            </a>
                          </li>
                          <li
                            className="paginationNext pageNav"
                            onClick={() => nextPage()}
                          >
                            <a className="page-link">
                              <img src="/images/pagination-next.jpg" />
                            </a>
                          </li>
                        </ul>
                      </div>

                    </div>
                </div>
            </div>
        </div>
    );
};
export default grantPermission;
