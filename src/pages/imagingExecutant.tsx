import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Tab,
  Nav,
  Form,
  Button,
} from "react-bootstrap";
import Stepper from "../components/Stepper";
const imagingExecutant = () => {
  const router = useRouter();
  const [display, setdisplay] = useState(false);
  const [display1, setdisplay1] = useState(false);

  const [checked, setchecked] = useState(0);

  const handleClick2 = (event) => {
    event.currentTarget.disabled = true;
    console.log("button clicked");
  };

  const [show, setShow] = useState(true);
  // const handleClose = () => setShow(false);
  const handleShow = () => setShow(false);

  const [selected, setselected] = useState(false);
  const handleClick4 = () => {
    setselected(true);
  };

  const [data, setData] = useState(0);

  const handleClick = (sig, index) => {
    console.log("signature:", sig);
    console.log("key index:", index);
    setData(sig);
    setchecked(index);
  };

  const handleClick1 = (eval1) => {
    console.log("key index:", eval1);
    console.log("ev-", eval1.data);
    if (eval1.data === "signature") {
      router.push("/CropSign");
    } else {
      router.push("/CropImage");
    }
  };

  const [highlighted, setHighlighted] = useState(false);

  const handleImageClick = () => {
    setHighlighted(!highlighted);
  };

  const ExecutantData = [
    {
      imageSelection: "1",
      executantId: "Executant - 999-1",
      name: "Raghav Dayal",
      photo: "/images/untitled.png",
      thumbImpression: "",
      esignSignature: "/images/untitled.png",
      capture: "Capture",
    },
    {
      imageSelection: "2",
      executantId: "Executant - 999-1",
      name: "Raghav Dayal",
      photo: "/images/untitled.png",
      thumbImpression: "",
      esignSignature: "/images/untitled.png",
      capture: "Capture",
    },
    {
      imageSelection: "3",
      executantId: "Executant - 999-1",
      name: "Raghav Dayal",
      photo: "/images/executant-img.svg",
      thumbImpression: "/images/executant-thumb-impression.svg",
      esignSignature: "/images/executant-signature.svg",
      capture: "Re-capture",
    },
    {
      imageSelection: "4",
      executantId: "Executant - 999-2",
      name: "Chandra Shekhar",
      photo: "/images/executant-image-2.svg",
      thumbImpression: "/images/executant-thumb-impression.svg",
      esignSignature: "/images/executant-signature-2.svg",
      capture: "Re-capture",
    },
    {
      imageSelection: "5",
      executantId: "Executant - 999-3",
      name: "Shekhar Varma",
      photo: "/images/executant-image-1.svg",
      thumbImpression: "/images/executant-thumb-impression.svg",
      esignSignature: "/images/executant-signature.svg",
      capture: "Re-capture",
    },
    {
      imageSelection: "6",
      executantId: "Executant - 999-4",
      name: "Deepika Basu",
      photo: "/images/executant-image-3.svg",
      thumbImpression: "/images/executant-thumb-impression.svg",
      esignSignature: "/images/executant-signature-2.svg",
      capture: "Re-capture",
    },
    {
      imageSelection: "7",
      executantId: "Executant - 999-5",
      name: "Srinivasulu",
      photo: "/images/executant-image-4.svg",
      thumbImpression: "/images/executant-thumb-impression.svg",
      esignSignature: "/images/executant-signature1.svg",
      capture: "Re-capture",
    },
  ];
  const ClaimantData = [
    {
      executantId: "Executant - 999-1",
      name: "Raghav Dayal",
      photo: "/images/executant-img.svg",
      thumbImpression: "/images/executant-thumb-impression.svg",
      esignSignature: "/images/executant-signature.svg",
      capture: "Re-capture",
    },
    {
      executantId: "Executant - 999-2",
      name: "Chandra Shekhar",
      photo: "/images/executant-image-2.svg",
      thumbImpression: "/images/executant-thumb-impression.svg",
      esignSignature: "/images/executant-signature-2.svg",
      capture: "Re-capture",
    },
  ];
  const WitnessData = [
    {
      executantId: "Witness-1",
      name: "Krishna",
      photo: "",
      thumbImpression: "",
      esignSignature: "",
      capture: "Re-capture",
    },
    {
      executantId: "Witness-2",
      name: "Maanas",
      photo: "",
      thumbImpression: "",
      esignSignature: "",
      capture: "Re-capture",
    },
  ];
  return (
    <>
      <div>
        <Stepper showReason1={true} />
      </div>
      <Stepper showReason={false} />
      <div className="pageMainWrap innerpage">
        <Head>
          <title>Imaging Executant - CARD</title>
          <meta name="description" content="login" />
          <link rel="icon" href="/igrsfavicon.ico" />
        </Head>
        <div className="mainWrapper">
          <div className="wrapperInner">
            <div className="acknowledgement">
              <button className="partyDetails">Party Details</button>
              <button className="active imaging">Imaging</button>
            </div>
            <Container>
              <div className="executanttantTable pageTableMain pageTableContainer mt-4">
                <Tab.Container defaultActiveKey="first">
                  <div className="tabsList tabsList-imaging">
                    <Nav variant="pills">
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          <span>2</span>Executant List
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          <span>12</span>Claimant List
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          <span>2</span>Witness
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                  <br />
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row className="justify-content-md-end mb-5">
                        <br />
                        <Col lg={6} md={6} xs={12} className="pageTableSearch">
                          <form className="md-form">
                            <div
                              className={`input-group md-form form-sm form-1 pl-0`}
                            >
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
                                    width={23}
                                    height={23}
                                    src="/images/Search-icon.svg"
                                  />
                                </button>
                              </div>
                            </div>
                          </form>
                        </Col>
                      </Row>
                      <div className="table-responsive">
                      <Table
                        bordered
                        className="tableData listData tableheadBg "
                      >
                        <thead className="text-center">
                          <tr className="text-center ">
                            <th className="text-center p-3">Name</th>
                            <th className="text-center">Photo</th>
                            <th className="text-center">Thumb impression</th>
                            <th className="text-center">E Sign Signature</th>
                            <th className="text-center">Capture</th>
                          </tr>
                        </thead>
                        <tbody>
                          {ExecutantData.map((item, index) => {
                            return (
                              <tr key={index}>
                                <td className="text-center">
                                  {item.executantId}
                                  <h6>{item.name}</h6>
                                </td>
                                <td className="text-center">
                                  {/* <div className="form-check-checkbox text-center" > */}
                                  {/* <Form.Check
                                  type={"checkbox"}
                                  name="photo"  className="checkbox-check"
                                  onClick={sig => handleClick('photo', index)} key={index} /> */}
                                  {/* </div> */}

                                  <div
                                    style={{
                                      border: selected
                                        ? "2px solid red"
                                        : "",
                                    }}
                                    className={
                                      selected ? "emptyBox1" : ""
                                    }
                                    onClick={handleClick4}
                                    id="imageSelection"
                                  >
                                    <input
                                      type="checkbox"
                                      id="imageSelection"
                                      onClick={(sig) =>
                                        handleClick("photo", index)
                                      }
                                      key={index}
                                      hidden
                                    />
                                    <label for="myCheckbox1">
                                      <div>
                                        <img
                                          src={item.photo}


                                          // className="image-border"
                                        ></img>
                                      </div>
                                    </label>
                                  </div>
                                </td>
                                <td className="text-center">
                                  {/* <div className="form-check-checkbox">
                                <Form.Check
                                  type={"checkbox"}
                                  name="thumbImpression" className="checkbox-check" />
                              </div> */}
                                  <div className="emptyBox1">
                                    <img src={item.thumbImpression} />
                                  </div>
                                </td>
                                <td className="text-center">
                                  <div className="form-check-checkbox">
                                    {/* <Form.Check
                                  type={"checkbox"}
                                  name="esignSignature" className="checkbox-check"
                                  onClick={sig => handleClick('signature', index)} key={index} /> */}
                                  </div>
                                  <div className="emptyBox1">
                                    {/* <img src={item.esignSignature} /> */}

                                    <input
                                      type="checkbox"
                                      id="myCheckbox2"
                                      onClick={(sig) =>
                                        handleClick("signature", index)
                                      }
                                      key={index}
                                      hidden
                                    />
                                    <label for="myCheckbox2">
                                      <img
                                        src={item.esignSignature}
                                        // className="image-border"
                                      ></img>
                                    </label>
                                  </div>
                                </td>
                                <td>
                                  {item.capture === "Re-capture" ? (
                                    <button
                                      className={
                                        checked >= 2
                                          ? "capture"
                                          : "digital-sign-btn"
                                      }
                                    >
                                      {item.capture}
                                    </button>
                                  ) : (
                                    <button
                                      className="capture"
                                      onClick={() => handleClick1({ data })}
                                    >
                                      {item.capture}
                                    </button>
                                  )}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </Table>
                      </div>
                      <div className="pageNextBtn">
                        <button className="next">Next</button>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row className="justify-content-md-end">
                        <br />
                        <Col
                          lg={6}
                          md={6}
                          xs={12}
                          className="pageTableSearch mb-5"
                        >
                          <form className="md-form">
                            <div
                              className={`input-group md-form form-sm form-1 pl-0`}
                            >
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
                                    width={23}
                                    height={23}
                                    src="/images/Search-icon.svg"
                                  />
                                </button>
                              </div>
                            </div>
                          </form>
                        </Col>
                      </Row>
                      <div className="table-responsive">
                      <Table
                        bordered
                        className="tableData listData tableheadBg"
                      >
                        <thead className="text-center">
                          <tr>
                            <th className="text-center p-3">Name</th>
                            <th className="text-center">Photo</th>
                            <th className="text-center">Thumb impression</th>
                            <th className="text-center">E Sign Signature</th>
                            <th>Capture</th>
                          </tr>
                        </thead>
                        <tbody>
                          {ClaimantData.map((item, index) => {
                            return (
                              <tr key={index}>
                                <td className="text-center">
                                  {item.executantId}
                                  <h6>{item.name}</h6>
                                </td>
                                <td className="text-center">
                                  {/* <div className="form-check-checkbox">
                                <Form.Check type={"checkbox"} name="photo" className="checkbox-check" />
                              </div> */}
                                  <div className="emptyBox1">
                                    <img src={item.photo} />
                                  </div>
                                </td>
                                <td className="text-center">
                                  {/* <div className="form-check-checkbox">
                                <Form.Check
                                  type={"checkbox"} className="checkbox-check"
                                  name="thumbImpression" />
                              </div> */}
                                  <div className="emptyBox1">
                                    <img src={item.thumbImpression} />
                                  </div>
                                </td>
                                <td className="text-center">
                                  {/* <div className="form-check-checkbox">
                                <Form.Check
                                  type={"checkbox"} className="checkbox-check"
                                  name="esignSignature" />
                              </div> */}
                                  <div className="emptyBox1">
                                    <img src={item.esignSignature} />
                                  </div>
                                </td>
                                <td>
                                  <button className="capture">
                                    {item.capture}
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </Table>
                      </div>
                      <div className="pageNextBtn">
                        <button className="next">Next</button>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      {show ? (
                        <div>
                          <div className="witnessList witness1">
                            <h5 className="mt-5">Witness 1</h5>

                            <Row>
                              <Col lg={10} md={10} xs={12} className="mb-3">
                                <Row>
                                  <Col lg={6} md={6} xs={12} className="mb-3 ">
                                    <Form.Floating>
                                      <Form.Select aria-label="units">
                                        <option>ID Proof</option>

                                        <option value="1">Aadhar Card</option>

                                        <option value="2">Pan Card</option>

                                        <option value="3">Voter Id</option>
                                      </Form.Select>
                                    </Form.Floating>
                                  </Col>

                                  <Col lg={6} md={6} xs={12} className="mb-3">
                                    <Form.Floating>
                                      <Form.Control
                                        id="floatingInputCustom"
                                        type="text"
                                        placeholder="ID Number"
                                      />

                                      <Form.Label htmlFor="floatingInputCustom">
                                        ID Number
                                      </Form.Label>
                                    </Form.Floating>
                                  </Col>
                                </Row>

                                <Row>
                                  <Col lg={6} md={6} xs={12} className="mb-3">
                                    <Form.Floating>
                                      <Form.Control
                                        id="floatingInputCustom"
                                        type="text"
                                        placeholder="Name"
                                      />

                                      <Form.Label htmlFor="floatingInputCustom">
                                        Name
                                      </Form.Label>
                                    </Form.Floating>
                                  </Col>

                                  <Col lg={6} md={6} xs={12} className="mb-3">
                                    <Form.Floating>
                                      <Form.Control
                                        id="floatingInputCustom"
                                        type="text"
                                        placeholder="Age"
                                      />

                                      <Form.Label htmlFor="floatingInputCustom">
                                        Age
                                      </Form.Label>
                                    </Form.Floating>
                                  </Col>
                                </Row>

                                <Row>
                                  <Col lg={12} md={12} xs={12}>
                                    <Form.Floating>
                                      <Form.Control
                                        id="floatingInputCustom"
                                        type="text"
                                        placeholder="Name"
                                      />

                                      <Form.Label htmlFor="floatingInputCustom">
                                        Address
                                      </Form.Label>
                                    </Form.Floating>
                                  </Col>
                                </Row>
                              </Col>

                              <Col lg={1} md={1} xs={12} className="mb-3 ">
                                <div className="emptyBox"></div>
                              </Col>
                            </Row>
                          </div>

                          <div className="witnessList witness2">
                            <h5 className="mb-4">Witness 2</h5>

                            <Row>
                              <Col lg={10} md={10} xs={12} className="mb-3">
                                <Row>
                                  <Col lg={6} md={6} xs={12} className="mb-3 ">
                                    <Form.Floating>
                                      <Form.Select aria-label="units">
                                        <option>ID Proof</option>

                                        <option value="1">Aadhar Card</option>

                                        <option value="2">Pan Card</option>

                                        <option value="3">Voter Id</option>
                                      </Form.Select>
                                    </Form.Floating>
                                  </Col>

                                  <Col lg={6} md={6} xs={12} className="mb-3">
                                    <Form.Floating>
                                      <Form.Control
                                        id="floatingInputCustom"
                                        type="text"
                                        placeholder="ID Number"
                                      />

                                      <Form.Label htmlFor="floatingInputCustom">
                                        ID Number
                                      </Form.Label>
                                    </Form.Floating>
                                  </Col>
                                </Row>

                                <Row>
                                  <Col lg={6} md={6} xs={12} className="mb-3">
                                    <Form.Floating>
                                      <Form.Control
                                        id="floatingInputCustom"
                                        type="text"
                                        placeholder="Name"
                                      />

                                      <Form.Label htmlFor="floatingInputCustom">
                                        Name
                                      </Form.Label>
                                    </Form.Floating>
                                  </Col>

                                  <Col lg={6} md={6} xs={12} className="mb-3">
                                    <Form.Floating>
                                      <Form.Control
                                        id="floatingInputCustom"
                                        type="text"
                                        placeholder="Age"
                                      />

                                      <Form.Label htmlFor="floatingInputCustom">
                                        Age
                                      </Form.Label>
                                    </Form.Floating>
                                  </Col>
                                </Row>

                                <Row>
                                  <Col lg={12} md={12} xs={12}>
                                    <Form.Floating>
                                      <Form.Control
                                        id="floatingInputCustom"
                                        type="text"
                                        placeholder="Name"
                                      />

                                      <Form.Label htmlFor="floatingInputCustom">
                                        Address
                                      </Form.Label>
                                    </Form.Floating>
                                  </Col>
                                </Row>
                              </Col>

                              <Col lg={1} md={1} xs={12} className="mb-3">
                                <div className="emptyBox"></div>
                              </Col>
                            </Row>
                          </div>

                          <Row>
                            <Col lg={8} md={8} xs={9}></Col>

                            <Col lg={4} md={4} xs={4}>
                              <div className="pageNextBtn ">
                                <button className="clear mb-2">Clear</button>

                                <button className="next " onClick={handleShow}>
                                  Next
                                </button>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      ) : (
                        <div>
                          <div className="table-responsive">
                            <Table
                              bordered
                              className="tableData listData tableheadBg table table-bordered  mt-5 "
                            >
                              <thead className="text-center">
                                <tr className="text-center">
                                  <th className="text-center p-3">Name</th>

                                  <th className="text-center">Photo</th>

                                  <th className="text-center">
                                    Thumb impression
                                  </th>

                                  <th className="text-center">
                                    E Sign Signature
                                  </th>

                                  <th className="text-center">Capture</th>
                                </tr>
                              </thead>

                              <tbody className="text-center">
                                {WitnessData.map((item, index) => {
                                  return (
                                    <tr key={index}>
                                      <td className="text-center">
                                        {item.executantId}

                                        <h6>{item.name}</h6>
                                      </td>

                                      <td className="text-center">
                                        {/* <div className="form-check-checkbox">

    <Form.Check type={"checkbox"} name="photo" className="checkbox-check" />

   </div> */}

                                        <div className="emptyBox1">
                                          {/* <img src={item.photo} height={200} width={159}/> */}
                                        </div>
                                      </td>

                                      <td className="text-center">
                                        {/* <div className="form-check-checkbox">

    <Form.Check

     type={"checkbox"} className="checkbox-check"

     name="thumbImpression" />

   </div> */}

                                        <div className="emptyBox1">
                                          {/* <img src={item.thumbImpression} /> */}
                                        </div>
                                      </td>

                                      <td className="text-center">
                                        {/* <div className="form-check-checkbox">

    <Form.Check

     type={"checkbox"} className="checkbox-check"

     name="esignSignature" />

   </div> */}

                                        <div className="emptyBox1">
                                          {/* <img src={item.esignSignature} /> */}
                                        </div>
                                      </td>

                                      <td className="text-center">
                                        <button className="capture">
                                          {item.capture}
                                        </button>
                                      </td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </Table>
                          </div>

                          <div className="pageNextBtn">
                            <button className="next">Save</button>
                          </div>
                        </div>
                      )}
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};
export default imagingExecutant;
