import { Col, Row, Form } from "react-bootstrap"
import Head from "next/head";
import Image from "next/image";
import Stepper from '../components/Stepper'
import { useEffect, useState } from "react";
const documentHandover = () => {
    const [selectedOption, setSelectedOption] = useState("S/o");
    const [checked, setchecked] = useState(0);
    const handleOptionClick = (event) => { setSelectedOption(event.target.textContent); };
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
    const [clicked, setclicked] = useState(false);
    const handleClick = () => { setclicked(true); setborder("1px solid #989898 ") };
    const [border, setborder] = useState("0px solid #989898")
    return (
        <><div><Stepper showReason1={true} /></div>
        <Stepper showReason={false} />
        <div className="pageMainWrap innerpage">
            <Head>
                <title>Document Handover - CARD</title>
                <meta name="description" content="login" />
                <link rel="icon" href="/igrsfavicon.ico" />
            </Head>
            <div style={{ width: "100%" }}>
                <div className="mainWrapper">
                    <div className="wrapperInner pageTableMain">
                        <div>
                            <div className="acknowledgement">
                                <button className="active partyDetails">Document Handover</button>
                            </div>
                            <div>
                                <Row className="justify-content-center mt-3">
                                    <Col lg={2} md={2} xs={12} className="mb-3">
                                        <Form.Floating>
                                            <Form.Control
                                                id="floatingInputCustom"
                                                type="dropdown"
                                                placeholder="Date"
                                                value="16-03-2023" />
                                            <label htmlFor="floatingInputCustom">
                                                Date
                                            </label>
                                        </Form.Floating>
                                </Col>
                                    <Col lg={1} md={1} xs={12} className="mb-3 ">
                                        <Form.Floating>
                                            <Form.Select aria-label="Book No" id="floatingInputCustom" placeholder="Book No">
                                                <option value="1" selected>1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                            </Form.Select>
                                            <Form.Label htmlFor="floatingInputCustom">
                                                Book No
                                            </Form.Label>
                                        </Form.Floating>
                                    </Col>
                                    <Col lg={1} md={1} xs={12} className="mb-3 ">
                                        <Form.Floating>
                                            <Form.Select aria-label="Year" id="floatingInputCustom" placeholder="Year">
                                                <option value="1" selected>1999</option>
                                                <option value="2">2000</option>
                                                <option value="3">2001</option>
                                            </Form.Select>
                                            <Form.Label htmlFor="floatingInputCustom">
                                                Year
                                            </Form.Label>
                                        </Form.Floating>
                                    </Col>
                                    <Col lg={2} md={2} xs={12} className="mb-3 ">
                                        <Form.Floating>
                                            <Form.Control
                                                id="floatingInputCustom"
                                                type="dropdown"
                                                placeholder="Doc No" />
                                            <label htmlFor="floatingInputCustom">
                                                Doc No
                                            </label>
                                        </Form.Floating>
                                    </Col>
                                    <Col lg={1} md={2} xs={4} className="mb-3">
                                        <button className="bluebuttonclass">Verify</button>
                                    </Col>
                                    <Col lg={1} md={2} xs={4}>
                                        <button className="whitebuttonclass">Clear</button>
                                    </Col>
                                </Row>
                                <hr />
                                <Row className="justify-content-start">
                                    <Col lg={2} md={2} xs={2}></Col>
                                    <Col lg={6} md={6} xs={12} className="justify-content-start">
                                        <p className="text-color">
                                            Basic Details
                                        </p>
                                    </Col>
                                </Row>
                                <Row className="justify-content-center">
                                    <Col lg
                                        ={2} md={2} xs={12} className="mb-3">
                                        <Form.Floating>
                                            <Form.Control
                                                id="floatingInputCustom"
                                                type="text"
                                                placeholder="Ack No"
                                                value="1" />
                                            <label htmlFor="floatingInputCustom">
                                                Ack No
                                            </label>
                                        </Form.Floating>
                                    </Col>
                                    <Col lg={2} md={2} xs={12} className="mb-3">
                                        <Form.Floating>
                                            <Form.Control
                                                id="floatingInputCustom"
                                                type="text"
                                                placeholder="Ack Year"
                                                value="2726" />
                                            <label htmlFor="floatingInputCustom">
                                                Ack Year
                                            </label>
                                        </Form.Floating>
                                    </Col>
                                    <Col lg={2} md={2} xs={12} className="mb-3">
                                        <Form.Floating>
                                            <Form.Control
                                                id="floatingInputCustom"
                                                type="text"
                                                placeholder="CS No"
                                                value="2726" />
                                            <label htmlFor="floatingInputCustom">
                                                CS No
                                            </label>
                                        </Form.Floating>
                                    </Col>
                                    <Col lg={2} md={2} xs={12} className="mb-3">
                                        <Form.Floating>
                                            <Form.Control
                                                id="floatingInputCustom"
                                                type="text"
                                                placeholder="CS Year"
                                                value="2321" />
                                            <label htmlFor="floatingInputCustom">
                                                CS Year
                                            </label>
                                        </Form.Floating>
                                    </Col>

                                </Row>
                                <hr />
                                <Row>
                                    <Col lg={2} md={2} xs={12}></Col>
                                    <Col lg={3} md={3} xs={12} className="justify-content-center">
                                        <p className="text-color">
                                            Nominee Details
                                        </p>
                                    </Col>
                                </Row>
                                <Row >
                                    <Col lg={2} md={2} xs={1} className="mb-3"></Col>
                                    <Col lg={6} md={6} xs={12} className="mb-3">
                                        <Row>
                                            <Col lg={4} md={4} xs={12} className="mb-3">
                                                <Form.Floating>
                                                    <Form.Control
                                                        id="floatingInputCustom"
                                                        type="text"
                                                        placeholder="ID Type"
                                                        value="Aadhar"
                                                    />
                                                    <label htmlFor="floatingInputCustom">
                                                        ID Type
                                                    </label>
                                                </Form.Floating>
                                            </Col>
                                            <Col lg={4} md={4} xs={12} className="mb-3">
                                                <Form.Floating>
                                                    <Form.Control
                                                        id="floatingInputCustom"
                                                        type="text"
                                                        placeholder="ID Number"
                                                        value="xxxx xxxx 6543"
                                                    />
                                                    <label htmlFor="floatingInputCustom">
                                                        ID Number
                                                    </label>
                                                </Form.Floating>
                                            </Col>
                                            <Col lg={4} md={4} xs={12} className="mb-3">
                                                <Form.Floating>
                                                    <Form.Control
                                                        id="floatingInputCustom"
                                                        type="text"
                                                        placeholder="Name"
                                                        value="Name"
                                                    />
                                                    <label htmlFor="floatingInputCustom">
                                                        Name
                                                    </label>
                                                </Form.Floating>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col lg={4} md={4} xs={12} className="mb-3">
                                                <Form.Floating>
                                                    <Form.Control
                                                        id="floatingInputCustom"
                                                        type="text"
                                                        placeholder="Age"
                                                        value="23"
                                                    />
                                                    <label htmlFor="floatingInputCustom">
                                                        Age
                                                    </label>
                                                </Form.Floating>
                                            </Col>
                                            <Col lg={4} md={4} xs={12} className="mb-3">
                                                <div className="input-group">
                                                    <button
                                                        className="btn btn-outline-secondary dropdown-toggle "
                                                        type="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                        style={{ color: "#4D4D4D", borderRadius: "12px 0px 0px 12px", borderColor: "#6096BA", backgroundColor: "#F6F9FB" }}
                                                    >
                                                        {selectedOption}
                                                    </button>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="#" onClick={handleOptionClick}>S/o</a></li>
                                                        <li><a className="dropdown-item" href="#" onClick={handleOptionClick}>D/o</a></li>
                                                        <li><a className="dropdown-item" href="#" onClick={handleOptionClick}>W/o</a></li>
                                                    </ul>
                                                    <Form.Floating>
                                                        <Form.Control
                                                            id="floatingInputCustom"
                                                            type="text"
                                                            placeholder="Relation Name"
                                                            className="form-control"
                                                            value="Venkateshwar rao"
                                                        />
                                                        <label htmlFor="floatingInputCustom">
                                                            Relation Name
                                                        </label>
                                                    </Form.Floating>
                                                </div>
                                            </Col>
                                            <Col lg={4} md={4} xs={12} className="mb-3">
                                                <Form.Floating>
                                                    <Form.Control
                                                        id="floatingInputCustom"
                                                        type="text"
                                                        placeholder="Phone Number"
                                                        value="+91 78*******1"
                                                    />
                                                    <label htmlFor="floatingInputCustom">
                                                        Phone Number
                                                    </label>
                                                </Form.Floating>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg={12} md={12} xs={12}>
                                                <Form.Floating>
                                                    <Form.Control
                                                        id="floatingInputCustom"
                                                        type="text"
                                                        placeholder="Address"
                                                        value="Falt 120, Block C, Anjali Residency, KPHB, Rajahmundry"
                                                    />
                                                    <label htmlFor="floatingInputCustom">
                                                        Address
                                                    </label>
                                                </Form.Floating>
                                            </Col>
                                        </Row>
                                        <Row>
                                        </Row>
                                    </Col>
                                    <Col lg={3} md={2} xs={4} className="float-end">
                                        <div className="partydetails-image-box">
                                        </div>
                                    </Col>
                                </Row>
                                <hr />
                                <Row className="justify-content-start">
                                    <Col lg={2} md={2} xs={2} className="mb-3"></Col>
                                    <Col lg={3} md={3} xs={12} className="justify-content-start">
                                        <p className="text-color">Nominee Thumb Capture</p>
                                    </Col>
                                </Row>
                                <Row className="justify-content-start">
                                    <Col lg={2} md={2} xs={2}></Col>
                                    <Col lg={6} md={6} xs={12} className="mb-3">
                                        <div className="table-responsive">
                                            <table className="tableData listData tableheadBg table">
                                                <thead>
                                                    <tr>
                                                        <th className="text-center th-width">Name</th>
                                                        <th className="text-center th-width">Thumb impression</th>
                                                        <th className="text-center th-width">Capture</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="text-center">Sanjay</td>
                                                        <td className="text-center">
                                                            <button onClick={handleClick}>
                                                                <img height={160} width={120} src={"/images/executant-thumb-impression.svg"} />
                                                            </button>
                                                        </td>
                                                        <td className="text-center">
                                                            <button className={ clicked ? "capture": "capture-disable" } > Capture </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </Col>
                                    <Col lg={2} md={2} xs={6} className="mb-3">
                                        <div className="saveBtn ">
                                            <button className="bluebuttonclass">Save</button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};
export default documentHandover;
