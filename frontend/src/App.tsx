import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "@/layouts/navbar";
import { Footer } from "@/layouts/footer";
import { FloatingActionButton } from "@/components/floating-action-button";
import HomePage from "@/pages/homepage";
import AboutPage from "@/pages/about";
import SkillsPage from "@/pages/skills";
import ProjectsPage from "@/pages/projects";
import ExperiencePage from "@/pages/experience";
import { Contact } from "@/pages/contact";
import BlogPage from "@/pages/blog";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingActionButton />
      </div>
    </Router>
  );
}

export default App;
