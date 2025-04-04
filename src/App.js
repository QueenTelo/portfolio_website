import { BrowserRouter } from "react-router-dom";
import Navbar from "./Pages/Navbar/nav-bar";
import About from "./Pages/About/about";
import "./style.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <About />
      </div>
    </BrowserRouter>
  );
}

export default App;
