import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col, Form, Dropdown, Button } from "react-bootstrap";
import { useTable, usePagination } from "react-table";
function Table({ columns, data }) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
    }
        = useTable(
            {
                columns,
                data,
                initialState: { pageIndex: 0, pageSize: 5 },
            },
            usePagination
        );
    // Render the UI for your table
    return (
        <Row className="justify-content-md-center text-center">
            <Col lg={6} md={6} xs={12}>
                <div className="tableWithPagination table-responsive ">
                    <table
                        className="tableData listData tableheadBg table"
                        {...getTableProps()} >
                        <thead className="hiddenHead">
                            {headerGroups.map((headerGroup) => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map((column) => (
                                        <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <thead>
                            <tr>
                                <th rowSpan={2} className="text-center">
                                    Assigned SROs
                                </th>
                                <th rowSpan={2} className="text-center">
                                    e-Sign Date
                                </th>
                                <th rowSpan={2} className="text-center">
                                    To Date
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> Chandraja (Sr. Assistant) </td>
                                <td>18-01-2023</td>
                                <td className="text-center">
                                    <Image className="mr-4"
                                        width={80}
                                        height={30}
                                        src="/images/sign1.png" />&nbsp;
                                    <Image
                                        width={12}
                                        height={16}
                                        src="/images/delete.png" />
                                </td>
                            </tr>
                            <tr>
                                <td> Rahul Sharma (Jr. Assistant) </td>
                                <td>18-01-2023</td>
                                <td className="text-center">
                                    <Image className="mr-4"
                                        width={80}
                                        height={30}
                                        src="/images/sign2.png" />&nbsp;
                                    <Image
                                        width={12}
                                        height={16}
                                        src="/images/delete.png" />
                                </td>
                            </tr>
                            <tr>
                                <td> Raghu Kamlekar (Sr. Assistant) </td>
                                <td>18-01-2023</td>
                                <td className="text-center">
                                    <Image className="mr-4"
                                        width={80}
                                        height={30}
                                        src="/images/sign3.png" />&nbsp;
                                    <Image
                                        width={12}
                                        height={16}
                                        src="/images/delete.png" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Col>
        </Row>
    );
}
function SRO() {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
    const columns = React.useMemo(
        () => [
            {
                Header: "1",
                columns: [
                    {
                        Header: "Assigned SROs",
                        accessor: "AssignedSROs",
                    },
                    {
                        Header: "Edit",
                        accessor: "Edit",
                    },
                ],
            },
        ],
        []
    );
    const data = [
        {
            AssignedSROs: "Chandraja (Sr. Assistant)",
            Edit: "18-01-2023",
        },
        {
            AssignedSROs: "Rahul Sharma (Jr. Assistant)",
            Edit: "18-01-2023",
        },
        {
            AssignedSROs: "Raghu Kamlekar (Sr. Assistant)",
            Edit: "18-01-2023",
        },
    ];
    return (
        <>
            <div className="pageMainWrap innerpage">
                <Head>
                    <title>SRO E-Signature - CARD</title>
                    <meta name="description" content="login" />
                    <link rel="icon" href="/igrsfavicon.ico" />
                </Head>
                <div className="mainWrapper">
                    <div className="otherMenuwrapperInner1">
                        <div className="acknowledgement">
                            <h4>SRO E-Pad Signature</h4>
                        </div>
                        <Container className="align-items-center">
                            <Container>
                                <br></br>
                                <Row className="justify-content-center">
                                    <Col lg={3} md={4} xs={12} className="mb-3">
                                        <Form.Floating>
                                            <Form.Control
                                                id="floatingInputCustom"
                                                type="date"
                                                placeholder="Stamp Purchase Date" />
                                            <Form.Label htmlFor="floatingInputCustom">
                                                Signature Date
                                            </Form.Label>
                                        </Form.Floating>
                                    </Col>
                                    <Col lg={3} md={4} xs={12} className="mb-3">
                                        <Form.Floating>
                                            <Form.Select aria-label="Book No" id="floatingInputCustom" placeholder="Book No">
                                                <option value="0">Please Select</option>
                                                <option value="1" selected>Trinath Rao</option>
                                                <option value="2">Mahesh</option>
                                                <option value="3">Suresh</option>
                                            </Form.Select>
                                            <Form.Label htmlFor="floatingInputCustom">
                                                SRO
                                            </Form.Label>
                                        </Form.Floating>
                                    </Col>
                                </Row>
                                <Row className="justify-content-center mt-1">
                                    <Col lg={3} md={4} xs={12} className="mb-3">
                                        <div className="pageNextBtn1">
                                            <Dropdown>
                                                <Dropdown.Toggle variant="success" className="btn-color active" id="dropdown-basic">
                                                    Choose Signature
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1"> <Image className="mr-4"
                                                        width={100}
                                                        height={50}
                                                        src="/images/sign1.png" /></Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2"> <Image className="mr-4"
                                                        width={100}
                                                        height={50}
                                                        src="/images/sign2.png" /></Dropdown.Item>
                                                    {/* <Dropdown.Item href="#/action-3"> <Image className="mr-4"
                                                        width={100}
                                                        height={50}
                                                        src="/images/sign3.png" /></Dropdown.Item> */}
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            {/* <Form.Floating>
                                                <Form.Select aria-label="Book No" id="floatingInputCustom" placeholder="Book No" className="next">
                                                    <option value="1" selected>Trinath Rao</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                </Form.Select>
                                                <Form.Label htmlFor="floatingInputCustom" >
                                                    Choose Signature
                                                </Form.Label>
                                            </Form.Floating> */}
                                        </div>
                                    </Col>
                                    <Col lg={3} md={4} xs={12}>
                                        <div className="pageNextBtn1">
                                            <button className="next p-1">Assign SRO for the Day</button>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                            <br />
                            <div className='d-flex align-items-center flex-column mt-4'>
                                <div className="d-flex crop-image-text pb-3">
                                    <div>
                                    <Image className="mx-1"
                                            width={23}
                                            height={23}
                                            src="/images/Crop.svg"
                                            alt='picture'
                                        />  &nbsp;
                                    </div>
                                    <div>
                                    <u><strong>YOUR E-SIGNATURE</strong></u>
                                    </div>
                                </div>
                          {/* <Row className="justify-content-md-left">
                               <Col>
                                    <div className='my-5 crop-image-text mx-auto'>
                                        <Image className="mx-1 my-1"
                                            width={23}
                                            height={23}
                                            src="/images/Crop.svg"
                                            alt='picture'
                                        /> &nbsp;
                                        <u><strong >YOUR E-SIGNATURE</strong></u></div>
                                </Col>
                            </Row> */}
                            <Row>
                                <Col>
                                    <div className='sign'>
                                        <div className="my-3 py-2 px-1 mx-5">
                                            <Image
                                                src={"/images/sign.svg"}
                                                alt="Picture of the person"
                                                width={350}
                                                height={59}
                                            />
                                            </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className='pageNextBtn1 mt-4'>
                                        {/* <Button className="btn btn-light clear m-2">Retake</Button> */}
                                        <Button className='next btn btn-light'>Save</Button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                            <Container >
                                <Row className="justify-content-center  ">
                                    <Col lg={6} md={6} xs={12}  >
                                        <h5 className="pl-3"> History</h5>
                                    </Col>
                                </Row>
                            </Container>
                            <Row className="pb-1">
                                <Col>
                                    <div className="documentsTable pageTableMain pageTableContainer">
                                        <div className="pageTableTabs">
                                        </div>
                                        <Table columns={columns} data={data} />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        </>
    );
}
export default SRO;
