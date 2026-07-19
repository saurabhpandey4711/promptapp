import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./pages/Home";
import PromptDetails from "./pages/PromptDetails";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prompt/:id" element={<PromptDetails />} />
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