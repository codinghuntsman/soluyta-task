import "./App.css";
import Banner from "./components/Banner/Banner";
import DoctorSchedule from "./components/DoctorSchedule/DoctorSchedule";
import SickKid from "./components/SickKid/SickKid";
import MedicalCare from "./components/MedicalCare/MedicalCare";
import Navbar from "./components/Navbar/Navbar";
import MedicalInfo from "./components/MedicalInfo/MedicalInfo";
import MedicalExpert from "./components/MedicalExpert/MedicalExpert";
import PatientFeedback from "./components/PatientFeedback/PatientFeedback";
import UpComingEvent from "./components/UpComingEvent/UpComingEvent";
import SubsCribe from "./components/SubsCribe/SubsCribe";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="center">
      <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <SickKid></SickKid>
        <DoctorSchedule></DoctorSchedule>
        <MedicalCare></MedicalCare>
        <MedicalInfo></MedicalInfo>
        <MedicalExpert></MedicalExpert>
        <PatientFeedback></PatientFeedback>
        <UpComingEvent></UpComingEvent>
        <SubsCribe></SubsCribe>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
