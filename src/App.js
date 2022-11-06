import "./App.css";
import Banner from "./components/Banner/Banner";
import DoctorSchedule from "./components/DoctorSchedule/DoctorSchedule";
import SickKid from "./components/SickKid/SickKid";
import MedicalCare from "./components/MedicalCare/MedicalCare";
import Navbar from "./components/Navbar/Navbar";
import MedicalInfo from "./components/MedicalInfo/MedicalInfo";
// import Footer from "./components/Footer/Footer";
// import MedicalExpert from "./components/MedicalExpert/MedicalExpert";
// import PatientFeedback from "./components/PatientFeedback/PatientFeedback";
// import SubsCribe from "./components/SubsCribe/SubsCribe";
// import UpComingEvent from "./components/UpComingEvent/UpComingEvent";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <SickKid></SickKid>
      <DoctorSchedule></DoctorSchedule>
      <MedicalCare></MedicalCare>
      <MedicalInfo></MedicalInfo>
      {/* <MedicalExpert></MedicalExpert>
      <PatientFeedback></PatientFeedback>
      <UpComingEvent></UpComingEvent>
      <SubsCribe></SubsCribe>
      <Footer></Footer> */}
    </div>
  );
}

export default App;
