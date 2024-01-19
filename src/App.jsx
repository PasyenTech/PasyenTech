// App.jsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Signup from "./pages/Signup/Signup.jsx";
import LogIn from "./pages/Login/Login.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Patient from "./pages/Patient/Patient.jsx";
import PatientForm_Parent from "./pages/Patient/Patient_Form_Parent.jsx";
import Patient_View from "./pages/Patient/Patient_View.jsx";
import Prescription from "./pages/Prescription/Prescription.jsx";
import Prescription_Form_Parent from "./pages/Prescription/Prescription_Form_Parent.jsx";
import Prescription_View from "./pages/Prescription/Prescription_View.jsx";
import Prescription_Print from "./pages/Prescription/Prescription_Print.jsx";
import Appointment from "./pages/Appointment/Appointment.jsx";
import Appointment_Form_Parent from "./pages/Appointment/Appointment_Form_Parent.jsx";
import Appointment_View from "./pages/Appointment/Appointment_View.jsx";
import AccountDetails from "./pages/AccountDetails/AccountDetails.jsx";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<Signup />} />

          {/* PrivateRoute handles the authentication and renders Sidebar */}
          <Route
            path="/dashboard"
            element={<PrivateRoute>{<Dashboard/>}</PrivateRoute>}
          />

         {/*Patient-related routing*/}
          <Route path="/patient/*" element={<PrivateRoute><Patient /></PrivateRoute>}/>
          <Route path="/patient/add-patient-form" element={<PrivateRoute> <PatientForm_Parent/></PrivateRoute>}/>
          <Route path="/patient/view-patient/:id" element={ <PrivateRoute> <Patient_View/> </PrivateRoute>}/>
          
          {/*Prescription-related routing*/}
          <Route path="/prescription" element={<PrivateRoute><Prescription /></PrivateRoute>} />
          <Route path="/prescription/add-prescription-form" element={<PrivateRoute><Prescription_Form_Parent/></PrivateRoute>}/>
          <Route path="/prescription/view-prescription/:id" element={<PrivateRoute><Prescription_View/></PrivateRoute>}/>
          <Route path="/prescription/view-prescription/print/:id" element={<PrivateRoute><Prescription_Print/></PrivateRoute>}/>

          {/*Appointment-related routing*/}
          <Route path="/appointment" element={<PrivateRoute><Appointment /></PrivateRoute>} />
          <Route path="/appointment/add-appointment-form" element={<PrivateRoute><Appointment_Form_Parent/></PrivateRoute>}/>
          <Route path="/appointment/view-appointment/:id" element={<PrivateRoute><Appointment_View/></PrivateRoute>}/>

          {/*Account details-related routing*/}
          <Route path="/account-details" element={<PrivateRoute><AccountDetails /></PrivateRoute>} />

          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
