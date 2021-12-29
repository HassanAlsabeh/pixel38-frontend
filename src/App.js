import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import AddShipment from "./pages/Home/AddShipment";
import Register from "./pages/Register/Register";
import ProtectedRoute from "./pages/Login/ProtectedRoute";
import UpdateShipment from "./pages/Home/Update";
import "./App.css";

function App() {
  

  return (
   <Router>
     
      <Routes> <Route path="/login" exact element={<Login />} />
        <Route path="/" exact element={ <ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/add-shipment" exact element={<ProtectedRoute><AddShipment /></ProtectedRoute>} />
        <Route path="/update-shipment/:id" exact element={<ProtectedRoute><UpdateShipment /></ProtectedRoute>} />

      </Routes>
        </Router>

  );
}
export default App;
