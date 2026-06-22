import { Routes, Route} from "react-router-dom";

import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Requestform from "./Pages/Requestform";
import Confirmation from "./Pages/Confirmation";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/confirmation" element={<Confirmation />}
        />
        <Route
          path="/dashboard" element={<Dashboard />}
        />
        <Route
         path="/request" element={<Requestform />}
        />    
      </Routes>
    </>
  );
}

export default App;