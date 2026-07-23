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
import Profile from "./pages/Profile";
import LikedPrompts from "./pages/LikedPrompts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prompt/:id" element={<PromptDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-prompt" element={<AddPrompt />} />
        <Route path="/edit-prompt/:id" element={<EditPrompt />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/liked"element={<LikedPrompts />}/>
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