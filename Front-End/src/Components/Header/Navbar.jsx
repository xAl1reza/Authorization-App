"use client";

import SwitchTheme from "../ThemeButtons/SwitchThemeBtn";
import SwitchThemeMobile from "../ThemeButtons/SwitchThemeBtnMobile";
import Link from "next/link";
import { useState, useContext } from "react";
import { usePathname } from "next/navigation";
import AuthContext from "../../Context/AuthContext";
import { logout } from "../../actions/auth";
import { useRouter } from "next/navigation";

function Navbar() {
  const { user , logoutContext } = useContext(AuthContext);
  const router = useRouter()
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="bg-zinc-950 border-gray-200 dark:bg-zinc-200 border-b">
        <div className="max-w-(--breakpoint-xl) flex flex-wrap items-center justify-between mx-auto p-4">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="/assets/Logo.png"
              className="size-12"
              alt="Alireza LOGO"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-50 dark:text-zinc-800">
              Alireza
            </span>
          </a>
          <button
            onClick={toggleMenu}
            className="text-gray-50 dark:text-zinc-800 inline-block md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
                <Link
                  href="/"
                  className={path === "/" ? "nav-link--active" : "nav-link"}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/posts"
                  className={
                    path === "/posts" ? "nav-link--active" : "nav-link"
                  }
                  aria-current="page"
                >
                  Posts
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden md:flex items-center gap-x-12">
            <div className="flex items-center gap-4">
              {user ? (
                <div className="flex items-center gap-3">
                  <p className="text-gray-200 dark:text-zinc-800 text-xl">
                    {user.name}
                  </p>
                  <button
                    onClick={async () => {
                      await logout(),
                      logoutContext(),
                      router.push("/")
                    }}
                    className="bg-red-600 rounded-md px-6 py-2 text-white hover:bg-red-500 hover:scale-95 transition-all cursor-pointer"
                  >
                    Log out
                  </button>
                </div>
              ) : (
                <>
                  <Link
                    className="px-6 py-2 rounded-md bg-gray-100 dark:bg-zinc-900 text-zinc-800 dark:text-white hover:scale-95 dark:hover:bg-zinc-800 hover:bg-gray-300 transition-all"
                    href={"/auth/register"}
                  >
                    Register
                  </Link>
                  <Link
                    className="px-6 py-2 rounded-md bg-gray-100 dark:bg-zinc-900 text-zinc-800 dark:text-white hover:scale-95 dark:hover:bg-zinc-800 hover:bg-gray-300 transition-all"
                    href={"/auth/login"}
                  >
                    Login
                  </Link>
                </>
              )}
            </div>
            <SwitchTheme />
          </div>
        </div>
      </nav>
      {/* Nav Mobile */}
      <nav
        className={`${
          isOpen ? "left-0" : "-left-[274px]"
        } z-30 md:hidden transition-all fixed top-0 h-screen w-[180px] bg-slate-950`}
      >
        <div
          onClick={closeNav}
          className="flex items-center justify-end mt-6 mr-3 cursor-pointer"
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-red-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="flex flex-col justify-center items-center mt-8">
          <img src="/assets/Logo.png" className="size-20" alt="Alireza Logo" />
        </div>
        <div className="flex flex-col items-center gap-6 mt-6">
          <div className="flex flex-col items-center gap-4">
            {user ? (
              <>
                <div className="flex flex-col items-center gap-3">
                  <p className="text-gray-200 text-xl">{user.name}</p>
                  <button
                    onClick={async () => {
                      await logout();
                      logoutContext(),
                      router.push("/")
                    }}
                    className="bg-red-600 rounded-md px-4 py-1 text-white hover:bg-red-500 hover:scale-95 transition-all cursor-pointer"
                  >
                    Log out
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link
                  className="px-4 py-1 rounded-md bg-gray-100 text-zinc-800"
                  href={"/auth/register"}
                >
                  Register
                </Link>
                <Link
                  className="px-4 py-1 rounded-md bg-gray-100 text-zinc-800"
                  href={"/auth/login"}
                >
                  Login
                </Link>
              </>
            )}
          </div>
          <SwitchThemeMobile />
        </div>
        <ul className="flex flex-col items-center mt-12 h-full text-xl">
          <li>
            <Link
              onClick={closeNav}
              href="/"
              className={path === "/" ? "nav-link--active" : "nav-link--mobile"}
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={closeNav}
              href="/posts"
              className={
                path === "/posts" ? "nav-link--active" : "nav-link--mobile"
              }
              aria-current="page"
            >
              Posts
            </Link>
          </li>
        </ul>
      </nav>
      <div
        onClick={closeNav}
        className={`${
          isOpen ? "block" : "hidden"
        } fixed top-0 left-0 bottom-0 right-0 bg-black/40 z-20`}
      ></div>
    </>
  );
}

export default Navbar;
