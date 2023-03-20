import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Container, Row, Col, Table, Tab, Nav, Form, Button } from "react-bootstrap";
import Stepper from '../components/Stepper'
const imagingExecutant = () => {
  const router = useRouter()
  const [display, setdisplay] = useState(false)
  const [display1, setdisplay1] = useState(false)


  const [buttonColor, setButtonColor] = useState('red');
  function handleClickBtn() {
    setButtonColor('green');
  }

  const handleImageSelect1 = (id) => {
    setImageSelected1(id);
  };
  const [selected, setSelected] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedSignature, setSelectedSignature] = useState(null);
  const [selectedItem2, setSelectedItem2] = useState(null);

  const [checked, setchecked] = useState(0);
  const [imageSelected1, setImageSelected1] = useState(null);

  const handleClick2 = event => {
    event.currentTarget.disabled = true;
    console.log('button clicked');
  };

  const [style, setStyle] = useState('#000000');


  const [show, setShow] = useState(true);
  const handleShow = () => setShow(false);
  const [enabled, setenabled] = useState('');
  const [disabled, setdisabled] = useState('');

  const [data, setData] = useState(0);
  const [image, setImage] = useState('');

  const handleClick = (type, index) => {
    if (type === "item") {
      if (selectedItem === index) {
        setSelectedItem(null);
      } else {
        setSelectedItem(index);
        setSelectedSignature(null);
        setSelectedItem2(null);
      }
    }
    // else if (type === "signature") {
    //   if (selectedSignature === index) {
    //     setSelectedSignature(null);
    //   } else {
    //     setSelectedSignature(index);
    //     setSelectedItem(null);
    //     setSelectedItem2(null);
    //   }
    // }
    else if (type === "item2") {
      if (selectedItem2 === index) {
        selectedItem2(null);
      } else {
        setSelectedItem2(index);
        setSelectedItem(null);
        setSelectedSignature(null);
      }
    }
  };

  const handleClick1 = () => {
    if (selectedSignature !== null) {
      router.push({
        pathname: '/CropSign',
      });
    }
    else if (selectedItem !== null) {
      router.push({
        pathname: '/CropImage',
      });
    }
  };

  const ExecutantData = [
    {
      id: 1,
      executantId: "Executant - 999-1",
      name: "Raghav Dayal",
      photo: "/images/untitled.png",
      thumbImpression: "/images/untitled.png",
      // esignSignature: "/images/untitled.png",
      capture: "Capture",
      ekyc: "e-KYC",
    },
    {
      id: 2,
      executantId: "Executant - 999-1",
      name: "Raghav Dayal",
      photo: "/images/untitled.png",
      thumbImpression: "/images/untitled.png",
      // esignSignature: "/images/untitled.png",
      capture: "Capture",
      ekyc: "e-KYC",
    },
    {
      id: 3,
      executantId: "Executant - 999-1",
      name: "Raghav Dayal",
      photo: "/images/executant-img.svg",
      thumbImpression: "/images/executant-thumb-impression.svg",
      // esignSignature: "/images/executant-signature.svg",
      capture: "Re-capture",
      ekyc: "e-KYC",
    },
    {
      id: 4,
      executantId: "Executant - 999-2",
      name: "Chandra Shekhar",
      photo: "/images/executant-image-2.svg",
      thumbImpression: "/images/executant-thumb-impression.svg",
      // esignSignature: "/images/executant-signature-2.svg",
      capture: "Re-capture",
      ekyc: "e-KYC",
    },
    {
      id: 5,
      executantId: "Executant - 999-3",
      name: "Shekhar Varma",
      photo: "/images/executant-image-1.svg",
      thumbImpression: "/images/executant-thumb-impression.svg",
      // esignSignature: "/images/executant-signature.svg",
      capture: "Re-capture",
      ekyc: "e-KYC",
    },



  ];
  const ClaimantData = [
    {
      id: 1,
      executantId: "Executant - 999-1",
      name: "Raghav Dayal",
      photo: "/images/untitled.png",
      thumbImpression: "/images/executant-thumb-impression.svg",
      // esignSignature: "/images/untitled.png",
      capture: "Capture",
      ekyc: "e-KYC",
    },
    {
      id: 2,
      executantId: "Executant - 999-1",
      name: "Raghav Dayal",
      photo: "/images/untitled.png",
      thumbImpression: "/images/executant-thumb-impression.svg",
      // esignSignature: "/images/untitled.png",
      capture: "Capture",
      ekyc: "e-KYC",
    },
    {
      id: 3,
      executantId: "Executant - 999-1",
      name: "Raghav Dayal",
      photo: "/images/executant-img.svg",
      thumbImpression: "/images/executant-thumb-impression.svg",
      // esignSignature: "/images/executant-signature.svg",
      capture: "Re-capture",
      ekyc: "e-KYC",
    },
    {
      id: 4,
      executantId: "Executant - 999-2",
      name: "Chandra Shekhar",
      photo: "/images/executant-image-2.svg",
      thumbImpression: "/images/executant-thumb-impression.svg",
      // esignSignature: "/images/executant-signature-2.svg",
      capture: "Re-capture",
      ekyc: "e-KYC",
    },
    {
      id: 5,
      executantId: "Executant - 999-3",
      name: "Shekhar Varma",
      photo: "/images/executant-image-1.svg",
      thumbImpression: "/images/executant-thumb-impression.svg",
      // esignSignature: "/images/executant-signature.svg",
      capture: "Re-capture",
      ekyc: "e-KYC",
    },



  ];
  const WitnessData = [
    {
      executantId: "Witness-1",
      name: "Krishna",
      photo: "",
      thumbImpression: "",
      // esignSignature: "",
      capture: "Re-capture",
      ekyc: "e-KYC",
    },
    {
      executantId: "Witness-2",
      name: "Maanas",
      photo: "",
      thumbImpression: "",
      // esignSignature: "",
      capture: "Re-capture",
      ekyc: "e-KYC",
    },
  ];
  return (
    <>
      <div><Stepper showReason1={true} /></div>
      {/* <Stepper showReason={false} /> */}
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

              <div className="executanttantTable pageTableMain pageTableContainer">

                <Tab.Container defaultActiveKey="first">
                  <div className="tabsList tabsList-imaging">
                    <Nav variant="pills">
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          <span>5</span>Executant List
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          <span>5</span>Claimant List
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
                      <Row className="justify-content-md-end mb-3"><br />
                        <Col lg={6} md={6} xs={12} className="pageTableSearch ">
                          <form className="md-form">
                            <div className={`input-group md-form form-sm form-1 pl-0`}>
                              <input
                                className={`form-control form-control-sm ml-3 w-75`}
                                type="text"
                                placeholder="Search Here.."
                                aria-label="Search" />
                              <div className={`input-group-prepend`}>
                                <button
                                  className={`btn btn-outline-success`}
                                  type="submit"
                                >
                                  <Image
                                    width={23}
                                    height={23}
                                    src="/images/Search-icon.svg" />
                                </button>
                              </div>
                            </div>
                          </form>
                        </Col>
                      </Row>
                      <Table bordered className="tableData listData tableheadBg">
                        <thead className="text-center">
                          <tr className="text-center">
                            <th>Name</th>
                            <th className="text-center">Photo</th>
                            <th className="text-center">Thumb impression</th>
                            {/* <th className="text-center">E Sign Signature</th> */}
                            <th className="text-center">Capture</th>
                          </tr>
                        </thead>
                        <tbody>
                          {ExecutantData.map((item, index) => {
                            const isSelectedItem = selectedItem === index;
                            // const isSelectedSignature = selectedSignature === index;
                            const isSelectedItem2 = selectedItem2 === index;
                            return (
                              <tr key={index}>
                                <td className="text-center">
                                  {item.executantId}
                                  <h6>{item.name}</h6>
                                </td>
                                <td className="text-center">
                                  <div className="form-check-checkbox">
                                  </div>
                                  <div>
                                    <input type="checkbox" id={`myCheckbox${index}`} onClick={() => handleClick("item", index)} key={index} hidden />
                                    <label htmlFor={`myCheckbox${index}`}>
                                      <div
                                        style={{
                                          border: isSelectedItem ? '5px solid red' : 'none',
                                        }}
                                        className="emptyBox1"
                                      >
                                        <img src={item.photo} onClick={() => handleImageSelect1(item.id)}
                                        ></img>
                                      </div>
                                    </label>
                                  </div>
                                </td>
                                <td className="text-center">
                                <div className="form-check-checkbox">
                                  </div>
                                  <input type="checkbox" id={`myCheckbox1${index}`} onClick={() => handleClick("item2", index)} key={index} hidden />
                                    <label htmlFor={`myCheckbox1${index}`}>
                                  <div className="emptyBox1" style={{
                                          border: isSelectedItem2 ? '5px solid red' : 'none',
                                        }}>
                                    <img src={item.thumbImpression} onClick={() => handleImageSelect1(item.id)}/>
                                  </div></label>
                                </td>
                                {/* <td className="text-center">
                                  <div className="form-check-checkbox">
                                  </div> */}
                                {/* <div >
                                    <input type="checkbox" id={`myCheckbox2${index}`} onClick={sig => handleClick('signature', index)} key={index} hidden />
                                    <label htmlFor={`myCheckbox2${index}`}>
                                      <div
                                        style={{
                                          border: isSelectedSignature ? '5px solid red' : 'none',
                                        }}
                                      className="emptyBox1"
                                      >
                                        <img src={item.esignSignature} onClick={()=>handleImageSelect1(item.id)} />
                                      </div>
                                    </label>
                                  </div> */}
                                {/* </td> */}
                                <td>

                                  {item.capture === 'Re-capture' ? (
                                    <div className="d-flex justify-content-center align-items-center flex-column">
                                      <button
                                        className={imageSelected1 === item.id ? "capture" : "digital-sign-btn"}
                                        disabled={!imageSelected1 !== item.id}
                                      >{item.capture}
                                      </button>
                                      <button className="capture my-2" style={{ backgroundColor: buttonColor }} onClick={handleClickBtn}>{item.ekyc}</button></div>
                                  ) : (
                                    <div className="d-flex justify-content-center align-items-center flex-column">
                                      <button className="capture"
                                        onClick={() => handleClick1({ data })}  >
                                        {item.capture}
                                      </button>
                                      <button className="capture my-2" style={{ backgroundColor: buttonColor }} onClick={handleClickBtn}>{item.ekyc}</button></div>
                                  )}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </Table>
                      <div className="paginationMain">
                        <ul className="pagination d-flex align-items-center justify-content-end">
                          <li className="PageItems">
                            Items per page:
                            <select
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
                            <a className="page-link">
                            </a>
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
                      <div className="pageNextBtn">
                        <button className="next">Next</button>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row className="justify-content-md-end"><br />
                        <Col lg={6} md={6} xs={12} className="pageTableSearch mb-3">
                          <form className="md-form">
                            <div className={`input-group md-form form-sm form-1 pl-0`}>
                              <input
                                className={`form-control form-control-sm ml-3 w-75`}
                                type="text"
                                placeholder="Search Here.."
                                aria-label="Search" />
                              <div className={`input-group-prepend`}>
                                <button
                                  className={`btn btn-outline-success`}
                                  type="submit"
                                >
                                  <Image
                                    width={23}
                                    height={23}
                                    src="/images/Search-icon.svg" />
                                </button>
                              </div>
                            </div>
                          </form>
                        </Col>
                      </Row>
                      <Table bordered className="tableData listData tableheadBg">
                        <thead className="text-center">
                          <tr>
                            <th>Name</th>
                            <th className="text-center">Photo</th>
                            <th className="text-center">Thumb impression</th>
                            {/* <th className="text-center">E Sign Signature</th> */}
                            <th>Capture</th>
                          </tr>
                        </thead>
                        <tbody>
                          {ClaimantData.map((item, index) => {
                            const isSelectedItem = selectedItem === index;
                            // const isSelectedSignature = selectedSignature === index;
                            const isSelectedItem2 = selectedItem2 === index;
                            return (
                              <tr key={index}>
                                <td className="text-center">
                                  {item.executantId}
                                  <h6>{item.name}</h6>
                                </td>
                                <td className="text-center">
                                  <div className="form-check-checkbox">
                                  </div>
                                  <div>
                                    <input type="checkbox" id={`myCheckbox${index}`} onClick={() => handleClick("item", index)} key={index} hidden />
                                    <label htmlFor={`myCheckbox${index}`}>
                                      <div
                                        style={{
                                          border: isSelectedItem ? '5px solid red' : 'none',
                                        }}
                                        className="emptyBox1"
                                      >
                                        <img src={item.photo} onClick={() => handleImageSelect1(item.id)}
                                        ></img>
                                      </div>
                                    </label>
                                  </div>
                                </td>
                                <td className="text-center">
                                <div className="form-check-checkbox">
                                  </div>
                                  <input type="checkbox" id={`myCheckbox1${index}`} onClick={() => handleClick("item2", index)} key={index} hidden />
                                    <label htmlFor={`myCheckbox1${index}`}>
                                  <div className="emptyBox1" style={{
                                          border: isSelectedItem2 ? '5px solid red' : 'none',
                                        }}>
                                    <img src={item.thumbImpression} onClick={() => handleImageSelect1(item.id)}/>
                                  </div></label>
                                </td>
                                {/* <td className="text-center">
                                  <div className="form-check-checkbox">
                                  </div> */}
                                {/* <div >
                                    <input type="checkbox" id={`myCheckbox2${index}`} onClick={sig => handleClick('signature', index)} key={index} hidden />
                                    <label htmlFor={`myCheckbox2${index}`}>
                                      <div
                                        style={{
                                          border: isSelectedSignature ? '5px solid red' : 'none',
                                        }}
                                      className="emptyBox1"
                                      >
                                        <img src={item.esignSignature} onClick={()=>handleImageSelect1(item.id)} />
                                      </div>
                                    </label>
                                  </div> */}
                                {/* </td> */}
                                <td>

                                  {item.capture === 'Re-capture' ? (
                                    <div className="d-flex justify-content-center align-items-center flex-column">
                                      <button
                                        className={imageSelected1 === item.id ? "capture" : "digital-sign-btn"}
                                        disabled={!imageSelected1 !== item.id}
                                      >{item.capture}
                                      </button>
                                      <button className="capture my-2" style={{ backgroundColor: buttonColor }} onClick={handleClickBtn}>{item.ekyc}</button></div>
                                  ) : (
                                    <div className="d-flex justify-content-center align-items-center flex-column">
                                      <button className="capture"
                                        onClick={() => handleClick1({ data })}  >
                                        {item.capture}
                                      </button>
                                      <button className="capture my-2" style={{ backgroundColor: buttonColor }} onClick={handleClickBtn}>{item.ekyc}</button></div>
                                  )}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </Table>
                      <div className="paginationMain">
                        <ul className="pagination d-flex align-items-center justify-content-end">
                          <li className="PageItems">
                            Items per page:
                            <select
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
                            <a className="page-link">
                            </a>
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
                      <div className="pageNextBtn">
                        <button className="next">Next</button>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      {/* <div className="witnessList witness1">
                    <h5 className="mb-4">Witness 1</h5>
                    <Row>
                      <Col lg={9} md={9} xs={12} className="mb-3">
                        <Row>
                          <Col lg={6} md={6} xs={12} className="mb-3">
                            <Form.Floating>
                              <Form.Select aria-label="units" >
                                <option>ID Proof</option>
                                <option value="1" selected>Aadhar Card</option>
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
                                placeholder="ID Number" defaultValue="XXXX XXXX 5454"/>
                              <Form.Label htmlFor="floatingInputCustom">
                                ID Number
                              </Form.Label>
                            </Form.Floating>
                          </Col>
                        </Row>
                        <Row className="mb-3">
                          <Col lg={6} md={6} xs={12}>
                            <Form.Floating>
                              <Form.Control
                                id="floatingInputCustom"
                                type="text"
                                placeholder="Name" defaultValue="krishna" />
                              <Form.Label htmlFor="floatingInputCustom">
                                Name
                              </Form.Label>
                            </Form.Floating>
                          </Col>
                          <Col lg={6} md={6} xs={12} >
                            <Form.Floating>
                              <Form.Control
                                id="floatingInputCustom"
                                type="text"
                                placeholder="Age" defaultValue="38"  />
                              <Form.Label htmlFor="floatingInputCustom">
                                Age
                              </Form.Label>
                            </Form.Floating>
                          </Col>
                        </Row>
                        <Row className="mb-3" >
                          <Col lg={12} md={12} xs={12} >
                            <Form.Floating>
                              <Form.Control
                                id="floatingInputCustom"
                                type="text"
                                placeholder="Address" defaultValue="Flat 120,Block C,Anjali Residency,KPHB,Rjahmundry" />
                              <Form.Label htmlFor="floatingInputCustom">
                                Address
                              </Form.Label>
                            </Form.Floating>
                          </Col>
                        </Row>
                      </Col>
                      <Col lg={3} md={3} xs={12} className="mb-3">
                        <div className="emptyBox">
                          <img src="./images/executant-person.svg" height={140} width={140} className="mt-1 mx-1"></img>
                        </div>
                        <div className="confirmbox">
                          <button>Confirm</button>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="witnessList witness2">
                    <h5 className="mb-4">Witness 2</h5>
                    <Row>
                      <Col lg={9} md={8} xs={12} className="mb-3">
                        <Row>
                          <Col lg={6} md={6} xs={12} className="mb-3">
                            <Form.Floating>
                              <Form.Select aria-label="units">
                                <option>ID Proof</option>
                                <option value="1" selected>Aadhar Card</option>
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
                                placeholder="ID Number" defaultValue="XXXX XXXX 4321" />
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
                                placeholder="Name" defaultValue="Maanas" />
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
                                placeholder="Age" defaultValue="42" />
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
                                placeholder="Name" defaultValue="Flat 10,kanakanjali Enclave,Vijayawada-102312" />
                              <Form.Label htmlFor="floatingInputCustom">
                                Address
                              </Form.Label>
                            </Form.Floating>
                          </Col>
                        </Row>
                      </Col>
                      <Col lg={3} md={4} xs={12} className="mb-3">
                        <div className="emptyBox ">
                          <img src="./images/executant-person-1.svg" height={130} width={130} className="mt-2 mx-2"></img>
                        </div>
                        <div className="confirmbox">
                          <button>Confirm</button>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="pageNextBtn">
                    <button className="clear">Clear</button>
                                       <Link href={"/Verification"}>
                        <button className="next">Next</button>
                      </Link>
                  </div> */}
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

                              <Col lg={2} md={2} xs={12} className="mb-3 ">

                                <div className="emptyBox float-end "></div>

                              </Col>

                              <Col lg={10}></Col>

                              <Col lg={2}>

                                <div className="pageNextBtn">

                                  <button className="next">Capture</button>

                                </div>

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

                              <Col lg={2} md={2} xs={12} className="mb-3 ">

                                <div className="emptyBox float-end "></div>

                              </Col>

                              <Col lg={10}></Col>

                              <Col lg={2}>

                                <div className="pageNextBtn">

                                  <button className="next">Capture</button>

                                </div>

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

                              className="tableData listData tableheadBg table table-bordered mt-5"

                            >

                              <thead className="text-center">

                                <tr>

                                  <th className="text-center">Name</th>

                                  <th className="text-center">Photo</th>

                                  <th className="text-center">

                                    Thumb impression

                                  </th>

                                  {/* <th className="text-center">

                                    E Sign Signature

                                  </th> */}

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

                                          <img src={item.thumbImpression} />

                                        </div>

                                      </td>

                                      {/* <td className="text-center"> */}

                                      {/* <div className="form-check-checkbox">

    <Form.Check

     type={"checkbox"} className="checkbox-check"

     name="esignSignature" />

   </div> */}

                                      {/* <div className="emptyBox1"> */}

                                      {/* <img src={item.esignSignature} /> */}

                                      {/* </div> */}

                                      {/* </td> */}

                                      <td className="text-center">
                                        <div className="d-flex justify-content-center align-items-center flex-column">
                                          <button className="capture">
                                            {item.capture}
                                          </button>
                                          <button className="capture my-2" style={{ backgroundColor: buttonColor }} onClick={handleClickBtn}>{item.ekyc}</button></div>
                                      </td>

                                    </tr>

                                  );

                                })}

                              </tbody>

                            </Table>

                          </div>

                          <div className="pageNextBtn">
                            <Link href="/AssigningVerification">
                              <button className="next">Save</button>
                            </Link>
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
      </div></>
  );
};
export default imagingExecutant;
