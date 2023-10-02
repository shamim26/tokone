import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-3 ${
        isScrolling ? "bg-white py-3 shadow-sm" : "bg-transparent py-5"
      }`}
    >
      <img
        className="w-[11.5rem]"
        src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/tekone_logo_home.png"
        alt=""
      />
      <div
        className={`md:static top-20 left-0 w-full md:w-auto bg-primary md:bg-transparent text-white md:text-primary flex flex-col md:flex-row md:items-center justify-between gap-5 md:gap-10 font-medium p-10 md:p-0 ${
          isOpen ? "absolute " : "hidden md:flex"
        }`}
      >
        <a
          className="hover:bg-secondary hover:bg-opacity-25 hover:text-secondary px-4 py-2 rounded-md"
          href="/"
        >
          Home
        </a>
        <a
          className="hover:bg-secondary hover:bg-opacity-25 hover:text-secondary px-4 py-2 rounded-md"
          href="/"
        >
          About
        </a>
        <a
          className="hover:bg-secondary hover:bg-opacity-25 hover:text-secondary px-4 py-2 rounded-md"
          href="/"
        >
          Services
        </a>
        <a
          className="hover:bg-secondary hover:bg-opacity-25 hover:text-secondary px-4 py-2 rounded-md"
          href="/"
        >
          Pages
        </a>
        <a
          className="hover:bg-secondary hover:bg-opacity-25 hover:text-secondary px-4 py-2 rounded-md"
          href="/"
        >
          Blog
        </a>
        <a
          className="hover:bg-secondary hover:bg-opacity-25 hover:text-secondary px-4 py-2 rounded-md"
          href="/"
        >
          Contact
        </a>
        <div className=" items-center gap-10 ml-5 hidden md:flex">
          <button>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              height="1.5em"
              width="1.5em"
            >
              <path d="M19 11 A8 8 0 0 1 11 19 A8 8 0 0 1 3 11 A8 8 0 0 1 19 11 z" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </button>
          <button className="flex items-center gap-2 text-white font-medium bg-primary px-6 py-4 rounded-md hover:bg-[#5742E8] transition-all duration-200 ease-linear">
            Get a Quote{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="#fff"
            >
              <path d="M12 13H4V11H12V4L20 12L12 20V13Z"></path>
            </svg>
          </button>
        </div>
      </div>
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-x"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </span>
        ) : (
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M3 4h18v2H3V4zm0 7h12v2H3v-2zm0 7h18v2H3v-2z"></path>
            </svg>
          </span>
        )}
      </button>
    </div>
  );
};

export default Navbar;
