import { Route, Routes, Navigate } from "react-router";
import "./App.css";
import AboutPage from "./components/AboutPage/AboutPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import LoadingPage from "./components/LoadingPage/LoadingPage";
import LogPage from "./components/LogPage/LogPage";
import ViewerPage from "./components/ViewerPage/ViewerPage";

function App() {
  return (
    <div id="app-main-container-div">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/log" element={<LogPage />} />
        <Route path="/viewer" element={<ViewerPage />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
