import { Home, User, Code, FolderKanban, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#3b2f2f] text-white shadow-lg">
      <ul className="flex flex-wrap justify-center gap-8 p-5 md:p-4 font-semibold text-lg">
        
        <li>
          <a href="#about" className="hover:text-yellow-300 flex items-center gap-2 transition-colors">
            <User size={20} /> About
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-yellow-300 flex items-center gap-2 transition-colors">
            <Code size={20} /> Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-yellow-300 flex items-center gap-2 transition-colors">
            <FolderKanban size={20} /> Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-yellow-300 flex items-center gap-2 transition-colors">
            <Mail size={20} /> Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}