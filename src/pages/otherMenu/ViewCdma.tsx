import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col, Table, Form, Nav, Tab, Tabs } from "react-bootstrap";


const ViewCdma = () => {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
    const tableData = [
        {
            assesment_Ptin_no: "2321",
            door_no: "45/B",
            property_address: "Property Address",
            locality_name: "Locality Name",
            revenue_ward: "Revenue Ward",
            revenue_no: "343245",
            owner_name: "Naidu",
            plinth_area: "123",
            total_property_tax_due: "Tax Due",
            reg_value: "123",
            market_value: "123",
            application_no: "123",
        },
        {
            assesment_Ptin_no: "2321",
            door_no: "45/B",
            property_address: "Property Address",
            locality_name: "Locality Name",
            revenue_ward: "Revenue Ward",
            revenue_no: "343245",
            owner_name: "Naidu",
            plinth_area: "123",
            total_property_tax_due: "Tax Due",
            reg_value: "123",
            market_value: "123",
            application_no: "123",
        },
        {
            assesment_Ptin_no: "2321",
            door_no: "45/B",
            property_address: "Property Address",
            locality_name: "Locality Name",
            revenue_ward: "Revenue Ward",
            revenue_no: "343245",
            owner_name: "Naidu",
            plinth_area: "123",
            total_property_tax_due: "Tax Due",
            reg_value: "123",
            market_value: "123",
            application_no: "123",
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
                <div className="wrapperInner">
                    <div className="acknowledgement">
                        <h4>View CDMA</h4>
                    </div>
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col lg={11} md={11} xs={12} className="pageTableSearch">
                                <div>
                                    <div>
                                        <input
                                            className={`form-control`}
                                            type="text"
                                            placeholder="PTIN Number"
                                        /></div>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <button className="bluebuttonclass">
                                        Check
                                    </button>
                                </div>
                            </Col>
                        </Row>
                        <hr className="mt-5" />
                    </Container>
                    <div className="documentsTable pageTableMain pageTableContainer">
                        <Table bordered className="tableData listData tableheadBg">
                            <thead>
                                <tr>
                                    <th rowSpan={2} className="text-center">
                                        Assessment/ PTIN No.
                                    </th>
                                    <th rowSpan={2} className="text-center">
                                        Door no.
                                    </th>
                                    <th rowSpan={2} className="extraFont text-center">
                                        Property Address
                                    </th>
                                    <th rowSpan={2} className="text-center">
                                        Locality Name
                                    </th>
                                    <th rowSpan={2} className="text-center">
                                        Revenue Ward
                                    </th>
                                    <th rowSpan={2} className="text-center">
                                        Revenue No.
                                    </th>
                                    <th rowSpan={2} className="text-center">
                                        Owner Name
                                    </th>
                                    <th colSpan={3} className="text-center">
                                        Owner Details
                                    </th>
                                    <th rowSpan={2} className="text-center">
                                        Market Value
                                    </th>
                                    <th rowSpan={2} className="text-center">
                                        Application No.
                                    </th>
                                </tr>
                                <tr>
                                    <th className="text-center smallFont">Plinth Area</th>
                                    <th className="text-center smallFont">Total Property Tax Due</th>
                                    <th className="text-center smallFont">Reg Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((item, index) => {
                                    return (
                                        <tr key={index} >
                                            <td className="text-center">{item.assesment_Ptin_no}</td>
                                            <td className="text-center">{item.door_no}</td>
                                            <td className="text-center">{item.property_address}</td>
                                            <td className="text-center">{item.locality_name}</td>
                                            <td className="text-center">{item.revenue_ward}</td>
                                            <td className="text-center">{item.revenue_no}</td>
                                            <td className="text-center">{item.owner_name}</td>
                                            <td className="text-center">{item.plinth_area}</td>
                                            <td className="text-center">{item.total_property_tax_due}</td>
                                            <td className="text-center">{item.reg_value}</td>
                                            <td className="text-center">{item.market_value}</td>
                                            <td className="text-center">{item.application_no}</td>
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
export default ViewCdma;
