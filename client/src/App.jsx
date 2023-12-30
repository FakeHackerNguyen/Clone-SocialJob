import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SignUp from "./pages/auth/Signup";
import SignIn from "./pages/auth/SignIn";
import ForgetPassword from "./pages/auth/ForgetPassword";
import EmailVerification from "./pages/auth/EmailVerification";
import ConfirmPassword from "./pages/auth/ConfirmPassword";
import MainPage from "./pages/MainPage";
import AboutLocationSignUp from "./pages/auth/AboutLocation";
import IsEmployment from "./pages/auth/IsEmployment";
import IsStudent from "./pages/auth/IsStudent";
import Profile from "./pages/Profile";
import Connections from "./pages/Connections";
import MyNetwork from "./pages/MyNetwork";
import JobPosting from "./pages/JobPosting";
import JobDescription from "./pages/JobDescription";
import SearchPageForPeopleAndJobs from "./pages/SearchPageForPeopleAndJobs";
import MyItems from "./pages/MyItems";
import DetailPostPage from "./pages/DetailPostPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route
        path="/people"
        element={<SearchPageForPeopleAndJobs type="people" />}
      />
      <Route
        path="/jobs"
        element={<SearchPageForPeopleAndJobs type="jobs" />}
      />

      <Route path="/auth/sign-in" element={<SignIn />} />
      <Route path="/auth/sign-up" element={<SignUp />} />
      {/* <Route path="/auth/verification" element={<FakeEmailVerification />} /> */}
      <Route path="/auth/forget-password" element={<ForgetPassword />} />
      <Route path="/auth/reset-password" element={<ConfirmPassword />} />
      <Route path="/feed" element={<MainPage />} />
      <Route path="/my-items" element={<MyItems />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/my-network" element={<MyNetwork />} />
      <Route path="/detail-post" element={<DetailPostPage />} />
      <Route path="/connections" element={<Connections />} />
      <Route path="/job-posting" element={<JobPosting />} />
      <Route path="/job-posting/description" element={<JobDescription />} />
      <Route path="/auth/about-location" element={<AboutLocationSignUp />} />
      <Route path="/auth/is-employment" element={<IsEmployment />} />
      <Route path="/auth/is-student" element={<IsStudent />} />

      <Route path="/auth/verification" element={<EmailVerification />} />
    </Routes>
  );
}

export default App;
