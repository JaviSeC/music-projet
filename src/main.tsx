import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import PageInitial from "./Views/PageInitial/PageInitial";
import PageLogin from "./Views/PageLogin/PageLogin";
import PageSingUp from "./Views/PageSingUp/PageSingUp";
// import BodyClassic from "./Components/ClassicBody/BodyClassic";
import PageBodyClassic from "./Views/Classic/ClassicView";
import PageAdmin from "./Views/PageAdmin/PageAdmin";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageInitial />} />
        <Route path="/PageLogin" element={<PageLogin />} />
        <Route path="/PageSingUp" element={<PageSingUp />} />
        <Route path="/PageAdmin" element={<PageAdmin />} />
        <Route path="/ClassicView" element={<PageBodyClassic />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  </>
);
