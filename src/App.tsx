import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import { AppSidebar } from "@/components/app-sidebar";
import HomePage from "@/pages/homepage";
import { Contact2 } from "@/pages/contact-me";
//import { Navbar } from "@/components/navbar";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<Contact2 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
