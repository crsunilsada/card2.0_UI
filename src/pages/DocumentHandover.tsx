import { Container, Col, Row, Form, Button, Table } from "react-bootstrap"
import Head from "next/head";

const documentHandover = () => {
    return (
        <><div className="">
            <ul className="progressbar">
                <li className="completed"><div className="progress_step_text">Document Presentation</div></li>
                <li className="inactive"><div className="progress_step_text">Admission Of Execution</div></li>
                <li className="inactive"><div className="progress_step_text">Assigning</div></li>
                <li className="inactive"><div className="progress_step_text">Scanning And Upload</div></li>
                <li className="inactive"><div className="progress_step_text">Document Handover</div></li>
            </ul>
        </div><br></br><div className="pageMainWrap innerpage">
                <Head>
                    <title>Document Handover - CARD</title>
                    <meta name="description" content="login" />
                    <link rel="icon" href="/igrsfavicon.ico" />
                </Head>
                <div style={{ width: "100%" }}>
                    <div className="mainWrapper">
                        <div className="wrapperInner">
                        <div className="pageTableContainer">
                            <div className="acknowledgement">
                                <button className="active partyDetails">Document Handover</button>
                            </div>
                            <div>
                                <Row>
                                    <Col lg={1} md={1} xs={12} className="mb-3"></Col>
                                    <Col lg={6} md={6} xs={12}>
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
                                    <Col lg={1} md={1} xs={12} className="mb-3">
                                        <input className="checkbox-over" type="button" value="✓ " style={{ color: "white" }} />
                                    </Col>
                                    <Col>
                                        <input className="checkbox-over" type="button" value="Clear " style={{ color: "white" }} />
                                    </Col>
                                </Row>
                                <hr></hr>
                                <Row>
                                    <Col lg={1} md={1} xs={12} className="mb-3"></Col>
                                    <Col lg={2} md={2} xs={12} className="mb-3">
                                        <Form.Floating>
                                            <Form.Control
                                                id="floatingInputCustom"
                                                type="text"
                                                placeholder="Book No" />
                                            <label htmlFor="floatingInputCustom">
                                                Book No
                                            </label>
                                        </Form.Floating>
                                    </Col>
                                    <Col lg={2} md={2} xs={12} className="mb-3">
                                        <Form.Floating>
                                            <Form.Control
                                                id="floatingInputCustom"
                                                type="text"
                                                placeholder="CS No" />
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
                                                placeholder="Ack No." />
                                            <label htmlFor="floatingInputCustom">
                                                Ack No.
                                            </label>
                                        </Form.Floating>
                                    </Col>
                                    <Col lg={2} md={2} xs={12} className="mb-3">
                                        <Form.Floating>
                                            <Form.Control
                                                id="floatingInputCustom"
                                                type="text"
                                                placeholder="Nominee Name" />
                                            <label htmlFor="floatingInputCustom">
                                                Nominee Name
                                            </label>
                                        </Form.Floating>
                                    </Col>
                                    <Col lg={2} md={2} xs={12} className="mb-3">
                                        <Form.Floating>
                                            <Form.Control
                                                id="floatingInputCustom"
                                                type="text"
                                                placeholder="Regular No" />
                                            <label htmlFor="floatingInputCustom">
                                                Regular No
                                            </label>
                                        </Form.Floating>
                                    </Col>
                                </Row>
                                <hr></hr>
                                <Row><p className='Nonimeedetails-over'>Nonimeee Details</p></Row>
                                <Row>
                                    <Col lg={1} md={1} xs={12} className="mb-3"></Col>
                                    <Col lg={3} md={3} xs={12} className="mb-3">
                                        <Form.Floating>
                                            <Form.Control
                                                id="floatingInputCustom"
                                                type="text"
                                                placeholder="ID Type" />
                                            <label htmlFor="floatingInputCustom">
                                                ID Type
                                            </label>
                                        </Form.Floating>
                                    </Col>
                                    <Col lg={3} md={3} xs={12} className="mb-3">
                                        <Form.Floating>
                                            <Form.Control
                                                id="floatingInputCustom"
                                                type="text"
                                                placeholder="ID Number" />
                                            <label htmlFor="floatingInputCustom">
                                                ID Number
                                            </label>
                                        </Form.Floating>
                                    </Col>
                                    <Col lg={2} md={2} xs={12} className="mb-3">

                                    </Col>
                                    <Col lg={3} md={3} xs={12} className="mb-3">

                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={1} md={1} xs={12} className="mb-3"></Col>
                                    <Col lg={6} md={6} xs={12} className="mb-3">
                                        <Form.Floating>
                                            <Form.Control
                                                id="floatingInputCustom"
                                                type="text"
                                                placeholder="Name" />
                                            <label htmlFor="floatingInputCustom">
                                                Name
                                            </label>
                                        </Form.Floating>
                                    </Col>
                                    <Col lg={3} md={3} xs={12} className="mb-3">
                                        <Form.Floating>
                                            <Form.Control
                                                id="floatingInputCustom"
                                                type="text"
                                                placeholder="Age" />
                                            <label htmlFor="floatingInputCustom">
                                                Age
                                            </label>
                                        </Form.Floating>
                                    </Col>
                                    <Col lg={2} md={2} xs={12} className="mb-3">

                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={1} md={1} xs={12} className="mb-3"></Col>
                                    <Col lg={6} md={6} xs={12} className="mb-3">
                                        <Form.Group>
                                            <select className="" name="sunof">
                                                <option value="">S / o</option>
                                                <option value="">S/o</option>
                                                <option value="">D/o</option>
                                                <option value="">W/o</option>
                                            </select>
                                        </Form.Group>
                                        <Form.Floating>
                                            <Form.Control
                                                id="floatingInputCustom"
                                                type="text"
                                                placeholder="RelationName" />
                                            <label htmlFor="floatingInputCustom">
                                                Relation Name
                                            </label>
                                        </Form.Floating>
                                    </Col>
                                    <Col lg={3} md={3} xs={12} className="mb-3">
                                        <Form.Floating>
                                            <Form.Control
                                                id="floatingInputCustom"
                                                type="text"
                                                placeholder="Phone Number" />
                                            <label htmlFor="floatingInputCustom">
                                                Phone Number
                                            </label>
                                        </Form.Floating>
                                    </Col>
                                    <Col lg={3} md={3} xs={12} className="mb-3">

                                    </Col>
                                </Row>
                                <hr></hr>
                                <table className="tableData listData tableheadBg table">
                                    <thead>
                                        <tr>
                                            <th className="text-center">Name</th>
                                            <th className="text-center">Thumb impression</th>
                                            <th className="text-center">Capture</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                Sanjay
                                            </td>
                                            <td className="text-center">
                                            <div className="fcheckbox">
                                                <Form.Check
                                                type={"checkbox"}
                                                name="thumbImpression"
                                                />
                                            </div>
                                            <img src={"/images/executant-thumb-impression.svg"} />
                                            </td>
                                            <td>
                                                <button className="bluebuttonclass">Capture</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <Row>
                                    <Col lg={6} md={6} xs={12} className="mb-3">

                                    </Col>
                                    <Col lg={2} md={2} xs={12} className="mb-3">

                                    </Col>
                                    <Col lg={4} md={4} xs={4} className="mb-3">
                                        <div className="pageNextBtn">
                                            <button className="next">Save</button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div></>
    );
};
export default documentHandover;
