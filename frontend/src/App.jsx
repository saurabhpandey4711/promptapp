import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./pages/Home";
import PromptDetails from "./pages/PromptDetails";

import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AddPrompt from "./pages/AddPrompt";
import EditPrompt from "./pages/EditPrompt";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prompt/:id" element={<PromptDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} /><Route path="/add-prompt" element={<AddPrompt />} />
        <Route path="/edit-prompt/:id" element={<EditPrompt />} />
        
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="dark"
      />
    </BrowserRouter>
  );
}

export default App;