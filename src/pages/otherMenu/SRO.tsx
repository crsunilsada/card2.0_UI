import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col, Form } from "react-bootstrap";
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
                                    From Date
                                </th>
                                <th rowSpan={2} className="text-center">
                                    To Date
                                </th>
                                <th  rowSpan={2} className="text-center">
                                    Edit
                                </th>
                            </tr>
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {page.map((row, i) => {
                                prepareRow(row);
                                return (
                                    <tr {...row.getRowProps()} className="text-center">
                                        {row.cells.map((cell) => {
                                            return (
                                                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                            );
                                        })}
                                        <td className="text-center">
                                            <Image
                                                width={20}
                                                height={30}
                                                src="/images/Edit.svg" />
                                        </td>
                                    </tr>
                                );
                            })}
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
                        Header: "From Date",
                        accessor: "FromDate",
                    },
                    {
                        Header: "To Date",
                        accessor: "ToDate",
                    },
                ],
            },
        ],
        []
    );
    const data = [
        {
            AssignedSROs: "Chandu",
            FromDate: "18-01-2023",
            ToDate: "21-01-2023",
        },
        {
            AssignedSROs: "Bindu",
            FromDate: "18-01-2023",
            ToDate: "21-01-2023",
        },
        {
            AssignedSROs: "Sindu",
            FromDate: "18-01-2023",
            ToDate: "21-01-2023",
        },
        {
            AssignedSROs: "Nandu",
            FromDate: "18-01-2023",
            ToDate: "21-01-2023",
        },
    ];
    return (
        <>
            <div className="pageMainWrap innerpage">
                <Head>
                    <title>SRO For The Day - CARD</title>
                    <meta name="description" content="login" />
                    <link rel="icon" href="/igrsfavicon.ico" />
                </Head>
                <div className="mainWrapper">
                    <div className="otherMenuwrapperInner1">
                        <div className="acknowledgement">
                            <h4>SRO For The Day</h4>
                        </div>
                        <Container className="align-items-center">
                            <Container>
                                <Row className="justify-content-md-center">
                                    <Col lg={6} md={6} xs={12} className="pageTableSearch">
                                        <form className="md-form">
                                            <div className={`input-group md-form form-sm form-1 pl-0`}>
                                                <input
                                                    className={`form-control form-control-sm ml-3 w-75`}
                                                    type="text"
                                                    placeholder="Search"
                                                    aria-label="Search" />
                                                <div className={`input-group-prepend`}>
                                                    <button
                                                        className={`btn btn-outline-success`}
                                                        type="submit"><Image
                                                            width={23}
                                                            height={23}
                                                            src="/images/Search-icon.svg" />
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </Col>
                                </Row>
                            </Container>
                            <Container>
                                <br></br>
                                <Row className="justify-content-center">
                                    <Col lg={3} md={3} xs={12} className="mb-3">
                                        <Form.Floating>
                                            <Form.Control
                                                id="floatingInputCustom"
                                                type="date"
                                                placeholder="Stamp Purchase Date" />
                                            <Form.Label htmlFor="floatingInputCustom">
                                                From Date
                                            </Form.Label>
                                        </Form.Floating>
                                    </Col>
                                    <Col lg={3} md={3} xs={12} className="mb-3">
                                        <Form.Floating>
                                            <Form.Control
                                                id="floatingInputCustom"
                                                type="date"
                                                placeholder="Execution Date" />
                                            <Form.Label htmlFor="floatingInputCustom">
                                                To Date
                                            </Form.Label>
                                        </Form.Floating>
                                    </Col>
                                </Row><br />
                                <Row className="justify-content-center" >
                                    <Col lg={6} md={6} xs={12} >
                                        {/* <textarea rows={5} style={{ width: '100%', borderColor: '#AEAEAE', borderRadius: '3px' }}
                                            placeholder={'Comments/Optional'}
                                            name="Comments(Optional)">
                                        </textarea> */}
                                         <Form.Floating>
                                    <Form.Control
                                        id="floatingInputCustom"
                                        type="text"
                                        placeholder="Comments(Optional)" style={{height:"100px"}} />
                                    <Form.Label htmlFor="floatingInputCustom">
                                       Comments(Optional)
                                    </Form.Label>
                                </Form.Floating>
                                    </Col>
                                </Row>
                            </Container>
                            <Row className="justify-content-md-center ">
                                <Col lg={2} md={2} xs={12}>
                                    <div className="pageNextBtn">
                                        <button className="next" style={{width: '270px'}}>Assign SRO for the Day</button>
                                    </div>
                                </Col>
                            </Row><br />
                            <Container >
                                <Row className="justify-content-center  ">
                                    <Col lg={6} md={6} xs={12}  >
                                        <h5  className="pl-3"> History</h5>
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
