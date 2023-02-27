import styles from "../styles/components/header.module.scss";
const Stepper = () => {
  return (
    <><div className="progressbar-section">
    <ul className="progressbar">
        <li className="completed"><div className="progress_step_text">Document Presentation</div></li>
        <li className="inactive"><div className="progress_step_text">Admission Of Execution</div></li>
        <li className="inactive"><div className="progress_step_text">Assigning</div></li>
        <li className="inactive"><div className="progress_step_text">Scanning And Upload</div></li>
        <li className="inactive"><div className="progress_step_text">Document Handover</div></li>
    </ul>
  </div>
  <div className="red-strip text-center p-1">REASON: Change Nature of Document  |  COMMENTS: Comments appear here</div>
    </>
  );
};

export default Stepper;
