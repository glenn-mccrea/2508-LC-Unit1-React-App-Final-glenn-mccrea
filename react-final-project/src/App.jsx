import "./App.css";
import AboutPage from "./components/AboutPage/AboutPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import LogPage from "./components/LogPage/LogPage";
import ViewerPage from "./components/ViewerPage/ViewerPage";

function App() {
  return (
    <div id="app-main-container-div">
      <Header />
      {/*       <HomePage /> */}
      {/*  <AboutPage /> */}
      {/*   <LogPage /> */}
      <ViewerPage />
      <Footer />
    </div>
  );
}

export default App;
