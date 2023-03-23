import router from "next/router";
import { useEffect, useState } from "react";
const Stepper = (props) => {
  const { showReason } = props;
  useEffect(() => {
    if (window.location.pathname === "/Verification" || window.location.pathname === "/propertyDetails" || window.location.pathname === "/partyDetails" || window.location.pathname === "/CashReceipt") {
      setSelected(true);
      setSelected1(true);
    }
    if (window.location.pathname === "/admissionofExecution") {
      setSelected(true);
      setSelected3(true);
    }
    if (window.location.pathname === "/SubmitForSRO") {
      setSelected2(true);
      setSelected1(true);
      setSelected(true);
    }
    if (window.location.pathname === "/AssigningVerification" || window.location.pathname === "/Endorsement" || window.location.pathname === "/assigning") {
      setSelected4(true);
      setSelected3(true);
    }
    if (window.location.pathname === "/ScanningUpload" || window.location.pathname === "/scanning" || window.location.pathname === "/DigitalSign" || window.location.pathname === "/Bundling") {
      setSelected5(true);
      setSelected4(true);
      setSelected3(true);
    }
    if (window.location.pathname === "/documentHandover") {
      setSelected6(true);
      setSelected5(true);
      setSelected4(true);
      setSelected3(true);
    }
  }, []);
  const { showReason1 } = props;
  const { showReason2 } = props;
  const [selected, setSelected] = useState(false);
  const [selected1, setSelected1] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const [selected3, setSelected3] = useState(false);
  const [selected4, setSelected4] = useState(false);
  const [selected5, setSelected5] = useState(false);
  const [selected6, setSelected6] = useState(false);
  const handleClick1 = () => {
    setSelected1(true);
    router.push('/Verification')
  }
  const handleClick = () => {
    setSelected(true);
    router.push('/admissionofExecution')
  }
  const handleClick2 = () => {
    setSelected2(true);
    router.push('/SubmitForSRO')
  }
  const handleClick3 = () => {
    setSelected3(true);
    router.push('/admissionofExecution')
  }
  const handleClick4 = () => {
    setSelected4(true);
    router.push('/AssigningVerification')
  }
  const handleClick5 = () => {
    setSelected5(true);
    router.push('/ScanningUpload')
  }
  const handleClick6 = () => {
    setSelected6(true);
    router.push('/documentHandover')
  }
  return (
    <>
      {showReason1 &&
        (
          <div className="progressbar-section ">
            <ul className="progressbar">
              <li className="completed" onClick={handleClick3}><div className="progress_step_text">Admission Of Execution</div></li>
              <li className={selected4 ? "completed" : "inactive"} onClick={handleClick4}><div className="progress_step_text">Assigning</div></li>
              <li className={selected5 ? "completed" : "inactive"} onClick={handleClick5}><div className="progress_step_text">BUNDLING</div></li>
              <li className={selected6 ? "completed" : "inactive"} onClick={handleClick6}><div className="progress_step_text">Document Handover</div></li>
            </ul>
          </div>)}
      {showReason2 &&
        (
          <div className="progressbar-section align-items-center mx-center">
            <ul className="progressbar">
              <li className="completed" onClick={handleClick}><div className="progress_step_text">Admission Of Execution</div></li>
              <li className={selected1 ? "completed" : "inactive"} onClick={handleClick1}><div className="progress_step_text">Verification</div></li>
              <li className={selected2 ? "completed" : "inactive"} onClick={handleClick2}><div className="progress_step_text">SRO review</div></li>
            </ul>
          </div>
        )}
      {showReason && (
        <div className="red-strip text-center p-1">
          REASON: Change Nature of Document | COMMENTS: Comments appear here
        </div>
      )}
    </>
  );
};
export default Stepper;
