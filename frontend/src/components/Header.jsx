import { Mail } from "lucide-react";
import GithubIcon from "../assets/github.svg?react";

const Header = () => {
  return (
    <header className="bg-slate-900 text-white py-6 px-10 flex justify-between items-center sticky top-0 z-50 shadow-md">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold tracking-tight uppercase">
          Kyle <span className="text-blue-400">|</span> Student Developer
        </h1>
      </div>
      <div className="flex gap-6 items-center">
        <a
          href="mailto:Kyleverto@gmail.com"
          className="flex items-center gap-2 hover:text-blue-400 transition-colors group"
          aria-label="Email Kyle"
        >
          <Mail size={20} className="transition-transform" />
          <span className="hidden md:inline text-sm font-medium">
            Kyleverto@gmail.com
          </span>
        </a>
        <a
          href="https://github.com/kyleverto"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-400 transition-colors group"
          aria-label="GitHub Profile"
        >
          <GithubIcon className="w-5 h-5 fill-current transition-transform" />
          <span className="hidden md:inline text-sm font-medium">
            Github.com/Kyleverto
          </span>
        </a>
      </div>
    </header>
  );
};

export default Header;
