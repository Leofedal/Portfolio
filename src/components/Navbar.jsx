import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 roudes.lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">LF</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black-500"
          }
        >
          A propos de moi
        </NavLink>

        <NavLink
          to="projects"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black-500"
          }
        >
          Mes projets
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
