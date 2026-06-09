import { Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Requestform from "./pages/Requestform";
import Confirmation from "./pages/Confirmation";

function App() {
  return (
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
  );
}

export default App;