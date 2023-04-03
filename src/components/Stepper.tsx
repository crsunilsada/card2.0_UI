import router from "next/router";
import { useEffect, useState } from "react";
const Stepper = (props) => {
  const { showReason } = props;
  useEffect(() => {
    if (window.location.pathname === "/verification" || window.location.pathname === "/propertyDetails" || window.location.pathname === "/partyDetails" || window.location.pathname === "/cashReceipt") {
      setSelected(true);
      setSelected1(true);
    }
    if (window.location.pathname === "/admissionofExecution") {
      setSelected(true);
      setSelected3(true);
      setSelected4(true);
      setSelected5(true);
      setSelected6(true);
    }
    if (window.location.pathname === "/submitForSRO") {
      setSelected2(true);
      setSelected1(true);
      setSelected(true);
    }
    if (window.location.pathname === "/assigningVerification" || window.location.pathname === "/assigning") {
      setSelected4(true);
      setSelected3(true);
    }
    if (window.location.pathname === "/endorsementLanding" || window.location.pathname === "/endorsement") {
      setSelected4(true);
      setSelected3(true);
      setSelected5(true);
    }
    if (window.location.pathname === "/scanningUpload" || window.location.pathname === "/scanning" || window.location.pathname === "/digitalSign" || window.location.pathname === "/bundling") {
      setSelected5(true);
      setSelected4(true);
      setSelected3(true);
      setSelected7(true);
      setSelected6(true);
    }
    if (window.location.pathname === "/documentHandover") {
      setSelected6(true);
      setSelected5(true);
      setSelected4(true);
      setSelected3(true);
      setSelected8(true);
      setSelected7(true);
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
  const [selected7, setSelected7] = useState(false);
  const [selected8, setSelected8] = useState(false);

  const handleClick1 = () => {
    setSelected1(true);
    router.push('/verification')
  }
  const handleClick = () => {
    setSelected(true);
    router.push('/admissionofExecution2')
  }
  const handleClick2 = () => {
    setSelected2(true);
    router.push('/submitForSRO')
  }
  const handleClick3 = () => {
    setSelected3(true);
    router.push('/pdeScrutinyList')
  }
  const handleClick4 = () => {
    setSelected4(true);
    router.push('/assigningVerification')
  }
  const handleClick5 = () => {
    setSelected5(true);
    router.push('/endorsementLanding')
  }
  const handleClick6 = () => {
    setSelected6(true);
    router.push('/admissionofExecution')
  }
  const handleClick7 = () => {
    setSelected7(true);
    router.push('/scanningUpload')
  }
  const handleClick8 = () => {
    setSelected8(true);
    router.push('/documentHandover')
  }
  return (
    <>
      {showReason1 &&
        (
          <div className="progressbar-section">
            <ul className="progressbar progressbar1">
              <li className="completed" onClick={handleClick3}><div className="progress_step_text">CARD pde</div></li>
              <li className={selected4 ? "completed" : "inactive"} onClick={handleClick4}><div className="progress_step_text">Assigning</div></li>
              <li className={selected5 ? "completed" : "inactive"} onClick={handleClick5}><div className="progress_step_text">endorsement & BUNDLING</div></li>
              <li className={selected6 ? "completed" : "inactive"} onClick={handleClick6}><div className="progress_step_text">e-sign</div></li>
              <li className={selected7 ? "completed" : "inactive"} onClick={handleClick7}><div className="progress_step_text">digital sign</div></li>
              <li className={selected8 ? "completed" : "inactive"} onClick={handleClick8}><div className="progress_step_text">Document Handover</div></li>
            </ul>
          </div>)}
      {showReason2 &&
        (
          <div className="progressbar-section1 align-items-center mx-center">
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
