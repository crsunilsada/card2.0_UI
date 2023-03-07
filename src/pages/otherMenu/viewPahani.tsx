import React, { useEffect } from "react";
import Head from "next/head";
import { Form } from "react-bootstrap";
import { useTable, usePagination } from "react-table";
import { CheckLg } from 'react-bootstrap-icons';
import { Search } from 'react-bootstrap-icons';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
function Table({ columns, data }) {
    const {
        getTableProps,
        headerGroups,
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: 5 },
        },
        usePagination
    );
    return (
        <div className="tableWithPagination table-responsive">
            <table
                className="tableData listData tableheadBg table"
                {...getTableProps()}
            >
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
                            Sur. No.
                        </th>
                        <th rowSpan={2} className="text-center">
                            Total Extent
                        </th>
                        <th rowSpan={2} className="text-center">
                            Land Nature
                        </th>
                        <th rowSpan={2} className="text-center">
                            Tax
                        </th>
                        <th rowSpan={2}>Land Class</th>
                        <th rowSpan={2} className="text-center">
                            Khata No.<br />
                        </th>
                        <th rowSpan={2}>
                            Pattadhar Name
                        </th>
                        <th rowSpan={2} className="text-center">
                            Occupent Name
                        </th>
                        <th rowSpan={2} className="extraFont text-center">
                            Occ Ext
                        </th>
                        <th rowSpan={2} className="extraFont text-center">
                            Enjoyment Nature
                        </th>
                        <th rowSpan={2} className="extraFont text-center">
                            Occupent Father
                        </th>
                        <th rowSpan={2} className="extraFont text-center">
                            Pattadhar Father
                        </th>
                        <th rowSpan={2} className="extraFont text-center">
                            Village Name
                        </th>
                        <th rowSpan={2} className="extraFont text-center">
                            Mut Date
                        </th>
                        <th rowSpan={2} className="extraFont text-center">
                            Aadhar No.
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={15}>
                            <img src="/images/pahani1.svg" />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={15}>
                            <img src="/images/pahani2.svg" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
function otherMenu() {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
    const columns = React.useMemo(
        () => [
            {
                Header: "1",
                columns: [
                    {
                        Header: "Sur. No.",
                        accessor: "surNo",
                    },
                    {
                        Header: "Total Extent",
                        accessor: "totalExtent",
                    },
                    {
                        Header: "Land Nature",
                        accessor: "landNature",
                    },
                    {
                        Header: "Tax",
                        accessor: "tax",
                    },
                    {
                        Header: "Land Class",
                        accessor: "landClass",
                    },
                    {
                        Header: "Khata No",
                        accessor: "khataNo",
                    },
                    {
                        Header: "Pattadhar Name",
                        accessor: "pattadharName",
                    },
                    {
                        Header: "Occupent Name",
                        accessor: "occupentName",
                    },
                    {
                        Header: "Occ Ext",
                        accessor: "occExt",
                    },
                    {
                        Header: "Enjoyment Nature",
                        accessor: "enjoymentNature",
                    },
                    {
                        Header: "Occupent Father",
                        accessor: "occupentFather",
                    },
                    {
                        Header: "Pattadhar Father.",
                        accessor: "pattadharFather",
                    },
                    {
                        Header: "Village Name.",
                        accessor: "villageName",
                    },
                    {
                        Header: "Mut Date.",
                        accessor: "mutDate",
                    },
                    {
                        Header: "Aadhar No.",
                        accessor: "aadharno.",
                    },
                ],
            },
        ],
        []
    );
    const [show, setShow] = useState(false); const handleClose = () => setShow(false); const handleShow = () => setShow(true);
    const data = [
        {
            surNo: "",
            totalExtent: "",
            landNature: "",
            tax: "",
            landClass: "",
            khataNo: "",
            pattadharName: "",
            occupentName: "",
            occExt: "",
            EnjoymentNature: "",
            occupentFather: "",
            pattadharFather: "",
            villageName: "",
            mutDate: "",
            aadharno: "",
        }, {
            surNo: "",
            totalExtent: "",
            landNature: "",
            tax: "",
            landClass: "",
            khataNo: "",
            pattadharName: "",
            occupentName: "",
            occExt: "",
            EnjoymentNature: "",
            occupentFather: "",
            pattadharFather: "",
            villageName: "",
            mutDate: "",
            aadharno: "",
        }, {
            surNo: "",
            totalExtent: "",
            landNature: "",
            tax: "",
            landClass: "",
            khataNo: "",
            pattadharName: "",
            occupentName: "",
            occExt: "",
            EnjoymentNature: "",
            occupentFather: "",
            pattadharFather: "",
            villageName: "",
            mutDate: "",
            aadharno: "",
        },
    ];
    return (
        <>
            <div className="pageMainWrap innerpage">
                <Head>
                    <title>Document Presentation - CARD</title>
                    <meta name="description" content="login" />
                    <link rel="icon" href="/igrsfavicon.ico" />
                </Head>
                <div className="mainWrapper">
                    <div className="wrapperInner">
                        <div className="acknowledgement">
                            <h4>View Pahani</h4>
                        </div>
                        <div className="pageTableContainer pageTableMain">
                            <div className="row ">
                                <div className="col-md mt-4">
                                    <Form.Floating>
                                        <Form.Control
                                            id="floatingInputCustom"
                                            type="text"
                                            placeholder="Verify Survey No." />
                                        <Form.Label htmlFor="floatingInputCustom">
                                            Verify Survey No.
                                        </Form.Label>
                                    </Form.Floating>
                                </div>
                                <div className="col-md mt-4"><Form.Floating>
                                    <Form.Control
                                        id="floatingInputCustom"
                                        type="text"
                                        placeholder="Village" />
                                    <Form.Label htmlFor="floatingInputCustom">
                                        Village
                                    </Form.Label>
                                </Form.Floating></div>
                                <div className="col-md mt-4"><Form.Floating>
                                    <Form.Control
                                        id="floatingInputCustom"
                                        type="text"
                                        placeholder="Survey No." />
                                    <Form.Label htmlFor="floatingInputCustom">
                                        Survey No.
                                    </Form.Label>
                                </Form.Floating></div>
                                <div className="col-md mt-4"> <Form.Floating>
                                    <Form.Control
                                        id="floatingInputCustom"
                                        type="text"
                                        placeholder="Verify Survey No." />
                                    <Form.Label htmlFor="floatingInputCustom">
                                        Verify Survey No.
                                    </Form.Label>
                                </Form.Floating></div>
                                <div className="col"></div>
                                <div className="col-auto d-flex align-items-center pageNextBtn mx-4">
                                    <Button onClick={handleShow} className="next mb-4 "><CheckLg onClick={handleShow} /></Button>
                                </div>
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>TeluguSurvey No.</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body className="justify-content-center text-center ">
                                        <Form.Floating className="mb-3">
                                            <Form.Select aria-label="units">
                                                <option>SNO</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </Form.Floating>
                                        <Form.Floating >
                                            <Form.Control
                                                id="floatingInputCustom"
                                                type="text"
                                                placeholder="250-2" />
                                            <Form.Label htmlFor="floatingInputCustom">
                                                250-2
                                            </Form.Label>
                                        </Form.Floating>
                                    </Modal.Body>
                                </Modal>
                                <div className="col-auto d-flex align-items-center pageNextBtn">
                                    <Button className="clear mb-4 ">Clear</Button>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="row mb-3 mt-5">
                                <div className="col">
                                    <h4>Pattadhar Details</h4>
                                </div>
                                <div className="col-auto d-flex align-items-center">
                                    <button className="btn btn-outline-secondary" type="button">
                                        <Search />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="documentsTable pageTableMain pageTableContainer">
                            <Table columns={columns} data={data} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default otherMenu;
