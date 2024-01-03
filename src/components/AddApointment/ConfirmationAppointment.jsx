import React from 'react';
import Styles from "./AddAppointment.module.css";

const ConfirmationAppointment = ({ prevStep, nextStep, values }) => {
  const Previous = e => {
    e.preventDefault();
    prevStep();
  };

  const Continue = e => {
    e.preventDefault();
    window.location.href = '/appointment'; // temp only
  };

  return (
    <main>
      <h3 className={Styles["h3___styling"]}>Confirmation</h3>
      <div>
        <div>
          <h3>Appointment Schedule</h3>
          <p>Patient Name: {values.patientName}</p>
          <p>Date: {values.apptDate}</p>
          <p>Time: {values.apptTime}</p>

          {values.apptRemark && <p>Remarks: {values.apptRemark}</p>}
        </div>
      </div>

      <div className={Styles["doneBtn__container"]}>
        <button onClick={Previous} className={Styles["prevBtn__style"]}>
          Prev
        </button>
        <button onClick={Continue} className={Styles["doneBtn__style"]}>
          Confirm
        </button>
      </div>
    </main>
  );
};

export default ConfirmationAppointment;