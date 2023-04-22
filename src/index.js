import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs.js";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import './css/style.css'



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="service" element={<Blogs />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);