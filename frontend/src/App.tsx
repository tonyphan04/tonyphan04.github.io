import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import { AppSidebar } from "@/components/app-sidebar";
import HomePage from "@/pages/homepage";
import { Contact } from "@/pages/contact";
//import { Navbar } from "@/components/navbar";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-background text-foreground">
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
