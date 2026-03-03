import { Mail, Github } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-slate-900 text-white py-6 px-10 flex justify-between items-center sticky top-0 z-50 shadow-md">
      {/* Brand/Name Section */}
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold tracking-tight uppercase">
          Kyle <span className="text-blue-400">|</span> Student Developer
        </h1>
      </div>

      {/* Social/Contact Links */}
      <div className="flex gap-6 items-center">
        <a
          href="mailto:Kyleverto@gmail.com"
          className="flex items-center gap-2 hover:text-blue-400 transition-colors"
          aria-label="Email Kyle"
        >
          <Mail size={20} />
          <span className="hidden md:inline text-sm font-medium">
            Kyleverto@gmail.com
          </span>
        </a>

        <a
          href="https://github.com/kyleverto"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-400 transition-colors"
          aria-label="GitHub Profile"
        >
          <Github size={20} />
          <span className="hidden md:inline text-sm font-medium">
            github.com/kyleverto
          </span>
        </a>
      </div>
    </header>
  );
};

export default Header;
