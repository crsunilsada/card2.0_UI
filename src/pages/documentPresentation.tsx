import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col, Table, Form } from "react-bootstrap";

const documentPresentation = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const tableData = [
    {
      appNo: "456787654",
      ackNo: "345",
      csNo: "212",
      ackYear: "2022",
      presenterName: "Chandra Sekhar",
      noofSchedule: "1",
      generateddatetime: "22/11/2022 @ 10: 45 AM",
      bookNumber: "1",
      maj: "01",
      min: "01",
    },
    {
      appNo: "456787654",
      ackNo: "345",
      csNo: "212",
      ackYear: "2022",
      presenterName: "Sekhar Varma",
      noofSchedule: "2",
      generateddatetime: "22/11/2022 @ 10: 45 AM",
      bookNumber: "2",
      maj: "02",
      min: "02",
    },
    {
      appNo: "456787654",
      ackNo: "345",
      csNo: "212",
      ackYear: "2022",
      presenterName: "Chandra Sekhar",
      noofSchedule: "1",
      generateddatetime: "22/11/2022 @ 10: 45 AM",
      bookNumber: "1",
      maj: "01",
      min: "01",
    },
    {
      appNo: "456787654",
      ackNo: "345",
      csNo: "212",
      ackYear: "2022",
      presenterName: "Sekhar Varma",
      noofSchedule: "2",
      generateddatetime: "22/11/2022 @ 10: 45 AM",
      bookNumber: "2",
      maj: "02",
      min: "02",
    },
  ];
  return (
    <div className="pageMainWrap">
      <Head>
        <title>Document Presentation - CARD</title>
        <meta name="description" content="login" />
        <link rel="icon" href="/igrsfavicon.ico" />
      </Head>

      <div className="mainWrapper">
        <div className="wrapperInner">
          <div className="acknowledgement">
            <h4>Acknowledgement Generation</h4>
          </div>

          <Container>
            <Row className="justify-content-md-center">
              <Col lg={7} md={8} xs={12} className="pageTableSearch">
                <form className="md-form">
                  <div className={`input-group md-form form-sm form-1 pl-0`}>
                    <input
                      className={`form-control form-control-sm ml-3 w-75`}
                      type="text"
                      placeholder="Search"
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

                <div className="searchFiler">
                  <button className="today">Today</button>
                  <button className="filter">
                    <small>Filters</small>
                    <Image width={20} height={20} src="/images/filter.svg" />
                  </button>
                </div>
              </Col>
            </Row>
          </Container>

          <div className="documentsTable pageTableMain pageTableContainer">
            <div className="pageTableTabs">
              <button className="accept active">Accept (30)</button>
              <button className="ammend">Ammend (5)</button>
            </div>
            <Table bordered className="tableData listData tableheadBg">
              <thead>
                <tr>
                  <th rowSpan={2} className="text-center">
                    App No.
                  </th>
                  <th rowSpan={2} className="text-center">
                    Ack. No.
                  </th>
                  <th rowSpan={2} className="text-center">
                    CS No.
                  </th>
                  <th rowSpan={2} className="text-center">
                    Ack. Year
                  </th>
                  <th rowSpan={2}>Presenter Name</th>
                  <th rowSpan={2} className="text-center">
                    No. of <br />
                    Schedule
                  </th>
                  <th rowSpan={2}>
                    CS No. & Ack No.
                    <br />
                    Generated Date & Time
                  </th>
                  <th rowSpan={2} className="text-center">
                    Book <br />
                    Number
                  </th>
                  <th colSpan={2} className="extraFont text-center">
                    Nature of Document
                  </th>
                  <th rowSpan={2} className="text-center">
                    Action
                  </th>
                </tr>
                <tr>
                  <th className="text-center smallFont">Maj</th>
                  <th className="text-center smallFont">Min</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="text-center">{item.appNo}</td>
                      <td className="text-center">{item.ackNo}</td>
                      <td className="text-center">{item.csNo}</td>
                      <td className="text-center">{item.ackYear}</td>
                      <td>{item.presenterName}</td>
                      <td className="text-center">{item.noofSchedule}</td>
                      <td>{item.generateddatetime}</td>
                      <td className="text-center">{item.bookNumber}</td>
                      <td className="text-center">{item.maj}</td>
                      <td className="text-center">{item.min}</td>
                      <td className="text-center">
                        <button
                          data-bs-toggle="modal"
                          data-bs-target="#viewBasicDetails"
                          className="basicDetails"
                        >
                          {" "}
                          <Image
                            width={20}
                            height={27}
                            src="/images/basic-details.jpg"
                          />
                          <small>View Basic Details</small>
                        </button>
                        <button className="print">
                          {" "}
                          <Image
                            width={25}
                            height={25}
                            src="/images/Print.svg"
                          />
                          <small>Print</small>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>

          <div
            className="modal fade modal-lg"
            id="viewBasicDetails"
            aria-labelledby="viewBasicDetails"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    View Basic Details
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <Image
                      width={20}
                      height={20}
                      src="/images/popup-close.svg"
                    />
                  </button>
                </div>

                <div className="modal-body">
                  <Row>
                    <Col lg={6} md={6} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="Presentant Name"
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          Presentant Name
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                    <Col lg={6} md={6} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="Nominee Name"
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          Nominee Name
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                  </Row>

                  <h5 className="mt-4 mb-3">Consider Presentant As</h5>

                  <div className="mb-4">
                    <Form.Check
                      value="Executant"
                      type="radio"
                      aria-label="Executant"
                      label="Executant"
                    />
                  </div>

                  <Row>
                    <Col lg={12} md={12} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="ID Proof"
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          ID Proof
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={3} md={6} xs={12} className="mb-3">
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
                    <Col lg={3} md={6} xs={12} className="mb-3">
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
                    <Col lg={2} md={4} xs={12} className="mb-3">
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
                    <Col lg={4} md={8} xs={12} className="mb-3">
                      <Form.Control
                        className="so"
                        id="floatingInputCustom"
                        type="text"
                        placeholder="S/o"
                      />
                      <Form.Floating className="relationName">
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="Relation Name"
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          Relation Name
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={5} md={5} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="Address"
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          Address
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                    <Col lg={3} md={3} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="date"
                          placeholder="Presentant Date"
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          Presentant Date
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                    <Col lg={4} md={4} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="date"
                          placeholder="Stamp Duty Borne by Document"
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          Stamp Duty Borne by Document
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={3} md={4} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="No of Sheets"
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          No of Sheets
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                    <Col lg={3} md={4} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="Registration Type"
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          Registration Type
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                    <Col lg={3} md={4} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="Book Type"
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          Book Type
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                  </Row>

                  <h5 className="mt-4 mb-3">Nature of Document</h5>

                  <Row>
                    <Col lg={3} md={4} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="Major"
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          Major
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                    <Col lg={3} md={4} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="Minor"
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          Minor
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                    <Col lg={3} md={4} xs={12} className="mb-3">
                      <Form.Floating>
                        <Form.Control
                          id="floatingInputCustom"
                          type="text"
                          placeholder="No of Schedules"
                        />
                        <Form.Label htmlFor="floatingInputCustom">
                          No of Schedules
                        </Form.Label>
                      </Form.Floating>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default documentPresentation;
