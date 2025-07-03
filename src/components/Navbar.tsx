import { Link } from "react-router";
import logo from "../assets/logo.png";
const Navbar = () => {
  const navLinks = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/all-books",
      title: "All Books",
    },
    {
      path: "/borrows",
      title: "Borrowed",
    },
  ];

  return (
    <>
      <nav className="flex items-center justify-around font-oswald bg-[#181C14] text-white py-5">
        <Link to={"/"}>
          <div className="logo flex items-center justify-center gap-x-2 cursor-pointer">
            <img
              className="h-15 w-15 object-cover rounded-xl"
              src={logo}
              alt=""
            />
            <p>Pathok Ghor</p>
          </div>
        </Link>
        <div className="nav-links">
          <ul className="hidden md:flex items-center justify-center gap-x-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="button-div">
          <button className="px-6 py-4 bg-blue-600 text-white rounded-md border-2 outline-none">
            Login Now
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
