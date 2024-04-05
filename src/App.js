import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import DataForm from "./pages/DataForm";
import Sample from "./Sample";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/form" element={<DataForm />} />
          <Route path="/sample" element={<Sample />} />
      </Routes>
    </Router>
  );
}

export default App;
