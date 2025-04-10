import { Github, Linkedin, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-8">
          {/* Contact Message */}
          <div className="text-center max-w-2xl">
            <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
            <p className="text-gray-600">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="https://facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors"
            >
              <Facebook className="h-6 w-6" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Tony. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
