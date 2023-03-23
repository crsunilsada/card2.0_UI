import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col, Table, Button } from "react-bootstrap";

const pdeScrutinyList = () => {
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
            UserName: "",
            RegType: "",
            SROName: "",
            DistrictName: "",
            VillageName: "",
            PPCheck: "",
            AllowPermission: "",
        },
        {
            SNo: "3",
            UserName: "",
            RegType: "",
            SROName: "",
            DistrictName: "",
            VillageName: "",
            PPCheck: "",
            AllowPermission: "",
        },
        {
            SNo: "4",
            UserName: "",
            RegType: "",
            SROName: "",
            DistrictName: "",
            VillageName: "",
            PPCheck: "",
            AllowPermission: "",
        },

    ]
    return (

        <div className="pageMainWrap">
            <Head>
                <title>Document Presentation-CARD</title>
                <meta name="description" content="login" />
                <link rel="icon" href="/igrsfavicon.ico" />
            </Head>

            <div className="mainWrapper">
                <div className="otherMenuwrapperInner1">
                    <div className="acknowledgement">
                        <h4>PP Grant Permission</h4>
                    </div>

                    <Container>
                        <Row className="justify-content-md-center">
                            <Col lg={7} md={8} xs={12} className="pageTableSearch">
                                <form className="md-form">
                                    <div className={`input-group md-form form-sm form-1 pl-0`}>
                                        <input
                                            className={`form-control form-control-sm ml-3 w-75`}
                                            type="text"
                                            placeholder="Search Here.."
                                            aria-label="Search"
                                        />
                                        <div className={`input-group-prepend`}>
                                            <button
                                                className={`btn btn-outline-success`}
                                                type="submit"
                                            >
                                                <Image
                                                    width={30}
                                                    height={30}
                                                    src="/images/Search-icon.svg"
                                                    alt="image"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </form>

                                <div className="searchFiler">
                                    <button className="today">Today</button>
                                    <button className="filter">
                                        <small>Filters</small>
                                        <Image width={20} height={20} src="/images/filter.svg" alt="image" />
                                    </button>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                    <div className="documentsTable pageTableMain pageTableContainer table-responsive">

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
                                        <tr key={index}>
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
                                                <Button className="bluebuttonclass">Allow</Button>                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default pdeScrutinyList;
