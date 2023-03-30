import React, { useEffect } from "react";
import Head from "next/head";
import { Form } from "react-bootstrap";
import { useTable, usePagination } from "react-table";
import { Key } from 'react-bootstrap-icons';
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
                className="tableData listData tableheadBg table headColSpacing"
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
                    {/* <tr>
                        <th rowSpan={2} className="text-center">
                            Sur. No. <br></br>వరుస సంఖ్య
                       </th>
                        <th rowSpan={2} className="text-center">
                            Total Extent<br></br>పూర్తి విస్తీర్ణం
                        </th>
                        <th rowSpan={2} className="text-center">
                            Land Nature<br></br>భూమి స్వభావం
                        </th>
                        <th rowSpan={2} className="text-center">
                            Tax
                        </th>
                        <th rowSpan={2} className="text-center">
                            Land Class<br></br>భూమి వివరణ
                        </th>
                        <th rowSpan={2} className="text-center">
                            Khata No.<br></br>ఖాతా నంబరు
                        </th>
                        <th rowSpan={2} className="text-center">
                            Pattadhar Name <br></br>పట్టాదారు పేరు<br></br>(తండ్రి/భర్త)
                        </th>
                        <th rowSpan={2} className="text-center">
                            Occupent Name<br></br>అనుభవదారు పేరు<br></br>(తండ్రి/భర్త)
                        </th>
                        <th rowSpan={2} className=" text-center">
                            Occ Ext <br></br>అనుభవ విస్తీర్ణం
                        </th>
                        <th rowSpan={2} className=" text-center">
                            Enjoyment Nature<br></br> అనుభవ స్వభావం
                        </th>
                        <th rowSpan={2} className=" text-center">
                            Occupent Father<br></br>అనుభవదారు పేరు<br></br>(తండ్రి/భర్త)
                        </th>
                        <th rowSpan={2} className=" text-center">
                            Pattadhar Father<br></br>పట్టాదారు పేరు<br></br>(తండ్రి/భర్త)
                        </th>
                        <th rowSpan={2} className=" text-center">
                            Village Name      <br></br>
                        </th>
                        <th rowSpan={2} className=" text-center">
                            Mut Date    <br></br>
                        </th>
                        <th rowSpan={2} className=" text-center">
                            Aadhar No.<br></br>ఆధార్
                        </th>
                    </tr> */}
                      <tr className="">
                        <th className="text-center">
                            Sur. No.
                            <span>వరుస సంఖ్య</span>
                        </th>
                        <th className="text-center">
                            Total Extent
                            <span>పూర్తి విస్తీర్ణం</span>
                        </th>
                        <th className="text-center">
                            Land Nature
                            <span>భూమి స్వభావం</span>
                        </th>
                        <th  className="text-center">
                            Tax<span>       </span><br></br>
                        </th>
                        <th className="text-center">
                            Land Class
                            <span>భూమి వివరణ</span>
                        </th>
                        <th className="text-center">
                            Khata No.
                            <span>ఖాతా నంబరు</span>
                        </th>
                        <th className="text-center">
                            Pattadhar Name
                            <span>పట్టాదారు పేరు(తండ్రి/భర్త)</span>
                        </th>
                        <th className="text-center">
                            Occupent Name
                            <span>అనుభవదారు పేరు (తండ్రి/భర్త)</span>
                        </th>
                        <th className=" text-center">
                            Occ Ext
                            <span>అనుభవ విస్తీర్ణం</span>
                        </th>
                        <th className=" text-center">
                            Enjoyment Nature
                                <span>అనుభవ స్వభావం</span>
                        </th>
                        <th className=" text-center">
                            Occupent Father
                            <span>అనుభవదారు పేరు (తండ్రి/భర్త)</span>
                        </th>
                        <th className=" text-center">
                            Pattadhar Father
                            <span>పట్టాదారు పేరు (తండ్రి/భర్త)</span>
                        </th>
                        <th rowSpan={2} className=" text-center">
                            Village Name   <span></span>  <br></br>
                        </th>
                        <th rowSpan={2} className=" text-center">
                            Mut Date <span></span><br></br>
                        </th>
                        <th rowSpan={2} className=" text-center">
                            Aadhar No.
                            <span>ఆధార్</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((val, key) => {
                        return (
                            <tr key={Key} className="text-center">
                                <td>{val.surNo}</td>
                                <td>{val.totalExtent}</td>
                                <td>{val.landNature}</td>
                                <td>{val.tax}</td>
                                <td>{val.landClass}</td>
                                <td>{val.khataNo}</td>
                                <td>{val.pattadharName}</td>
                                <td>{val.occupentName}</td>
                                <td>{val.occExt}</td>
                                <td>{val.EnjoymentNature}</td>
                                <td>{val.occupentFather}</td>
                                <td>{val.pattadharFather}</td>
                                <td>{val.villageName}</td>
                                <td>{val.mutDate}</td>
                                <td>{val.aadharno}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}
function otherMenu() {
    const [display, setdisplay] = useState(false)
    const handleClick = () => {
        setdisplay(true)
    }
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
            surNo: "1",
            totalExtent: "13/1",
            landNature: "0.2000",
            tax: "0.0000",
            landClass: "0.2000",
            khataNo: "పట్టా",
            pattadharName: "40.00",
            occupentName: "పుంజ",
            occExt: "బోరునీరు",
            EnjoymentNature: "0.2000",
            occupentFather: "1008",
            pattadharFather: "అన్నపురేడా శివప్రసాద్ రెడ్డి (స్వామి రెడ్డి)",
            villageName: "అన్నపురేడా శివప్రసాద్ రెడ్డి (స్వామి రెడ్డి)",
            mutDate: "0.0200",
            aadharno: "క్రయం",
        }, {
            surNo: "2",
            totalExtent: "",
            landNature: "",
            tax: "",
            landClass: "",
            khataNo: "",
            pattadharName: "",
            occupentName: "",
            occExt: "",
            EnjoymentNature: "",
            occupentFather: "1448",
            pattadharFather: "పొట్నూరి శ్రీమన్నారాయణ (అప్పల రాములు)",
            villageName: "పొట్నూరి శ్రీమన్నారాయణ (అప్పల రాములు)",
            mutDate: "0.1800",
            aadharno: "కొనుగోలు",
        }, {
            surNo: "3",
            totalExtent: "13/2",
            landNature: "1.1500",
            tax: "0.0000",
            landClass: "1.1500",
            khataNo: "పట్టా",
            pattadharName: "9.55",
            occupentName: "పుంజ",
            occExt: "బోరునీరు",
            EnjoymentNature: "1.1500",
            occupentFather: "464",
            pattadharFather: "భీమవరపు పార్వతి(గిరిరెడ్డి)",
            villageName: "భీమవరపు పార్వతి(గిరిరెడ్డి)",
            mutDate: "5400",
            aadharno: "ధాఖలు",
        },
    ];
    return (
        <>
            <div className="pageMainWrap innerpage">
                <Head>
                    <title>View Pahani - CARD</title>
                    <meta name="description" content="login" />
                    <link rel="icon" href="/igrsfavicon.ico" />
                </Head>
                <div className="mainWrapper">
                    <div className="otherMenuwrapperInner1">
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
                                        placeholder="Survey No." onClick={handleShow} />
                                    <Form.Label htmlFor="floatingInputCustom">
                                        Survey No.
                                    </Form.Label>
                                </Form.Floating></div>
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Telugu Survey No.</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body className="justify-content-center text-center ">
                                        <Form.Floating className="mb-3">
                                            <Form.Select aria-label="units" id="floatingInputCustom">
                                               <option value="0">please select</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                            <Form.Label htmlFor="floatingInputCustom">
                                                units
                                            </Form.Label>
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
                                <div className="col-auto d-flex align-items-center pageNextBtn mx-2 mt-2">
                                    <Button className="next mb-4 ">Verify</Button>
                                </div>
                                <div className="col-auto d-flex align-items-center pageNextBtn pageNextBtn1 mt-2">
                                    <Button className="clear mb-4 ">Clear</Button>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="row mt-5 ">
                                <div className="col ">
                                    <h4 className="crop-image-text">Pattadhar Details</h4>
                                </div>
                                <div className="col" >
                                    {/* {!display && } */}
                                </div>
                                <div className="col">
                                    <input type="text" className="justify-content-end float-end search-click" style={{  borderRadius: "5px", borderColor: "#5692B4", height: "40px" }} name="" placeholder="search here..." />
                                    {display && ("")
                                    }
                                </div>
                            </div>
                            <Table columns={columns} data={data} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default otherMenu;
