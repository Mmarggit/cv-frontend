import { Route, Routes } from "react-router-dom";
import { MainLanding } from "./screens/landings/MainLanding";
import { Stack } from "react-bootstrap";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Resumes } from "./screens/landings/Resumes";
import { Edit_Resume } from "./screens/landings/Edit_Resume";


function App() {
  return<Stack style={{minHeight:'100vh'}}>
          <Header />
          <Routes>
          <Route path="/" element={<MainLanding/>} />
          <Route path="resumes" element={<Resumes/>} />
          <Route path="edit_resume" element={<Edit_Resume/>} />
          </Routes>
          <Footer/>
  </Stack>
}

export default App;
