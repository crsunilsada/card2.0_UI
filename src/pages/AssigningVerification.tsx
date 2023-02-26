import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col, Table } from "react-bootstrap";

const AssigningVerification = () => {
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
        <title>Assigning Verification - CARD</title>
        <meta name="description" content="login" />
        <link rel="icon" href="/igrsfavicon.ico" />
      </Head>

      <div className="mainWrapper">
        <div className="wrapperInner">
        <div className="acknowledgement">
              <button className="active partyDetails">Assigning</button>
              <button className=" imaging">Endorsement</button>
            </div>
          <Container>
            <Row className="justify-content-md-center">
              <Col lg={7} md={8} xs={12} className="pageTableSearch">
                <form className="md-form">
                  <div className={`input-group md-form form-sm form-1 pl-0`}>
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
                        <button className="basicDetails">
                          {" "}
                          <Image
                            width={20}
                            height={27}
                            src="/images/Assigning.svg"
                          />
                          <small>Assigning</small>
                        </button>
                        <button className="print">
                          {" "}
                          <Image
                            width={25}
                            height={25}
                            src="/images/Reverse-Endosemenrt.svg"
                          />
                          <small>Endorsement</small>
                        </button>
                      </td>
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
export default AssigningVerification;
