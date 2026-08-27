"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import logo from "../../app/assets/removed-bg-logo.png";
import lightlogo from "../../app/assets/logo.png";

const Header = () => {
  const pathname = usePathname();

  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 40) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: any) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <header
      className={`top-0 left-0 z-40 flex w-full items-center transition-all duration-300 ${
        sticky
          ? "fixed z-[9999] bg-white/90 dark:bg-[#090E34]/90 shadow-sticky backdrop-blur-md border-b border-gray-100 dark:border-white/10 py-3 lg:py-2"
          : "absolute bg-transparent py-6 lg:py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="w-52 max-w-full">
            <Link href="/" className="block w-full">
              <Image
                src={lightlogo}
                alt="Nagarjuna ICT Club Logo"
                width={85}
                className="dark:hidden object-contain transition-transform hover:scale-105"
                priority
              />
              <Image
                src={logo}
                alt="Nagarjuna ICT Club Logo"
                width={85}
                className="hidden dark:block object-contain transition-transform hover:scale-105"
                priority
              />
            </Link>
          </div>

          <div className="flex items-center justify-end gap-3 sm:gap-4 lg:gap-8">
            <nav
              id="navbarCollapse"
              className={`navbar absolute right-0 z-30 w-[250px] rounded-xl border border-gray-100 bg-white/95 p-6 shadow-xl backdrop-blur-lg duration-300 dark:border-white/10 dark:bg-[#131943]/95 lg:visible lg:static lg:w-auto lg:border-none lg:bg-transparent lg:p-0 lg:shadow-none lg:opacity-100 ${
                navbarOpen
                  ? "visibility top-full opacity-100"
                  : "invisible top-[120%] opacity-0"
              }`}
            >
              <ul className="block lg:flex lg:items-center lg:space-x-8">
                {menuData.map((menuItem, index) => {
                  const isActive = menuItem.path === pathname;
                  return (
                    <li key={menuItem.id} className="group relative">
                      {menuItem.path ? (
                        <Link
                          onClick={() => setNavbarOpen(false)}
                          href={menuItem.path}
                          className={`flex py-2.5 text-sm font-medium transition-colors duration-200 lg:py-2 ${
                            isActive
                              ? "text-primary dark:text-yellow font-semibold"
                              : "text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-yellow"
                          }`}
                        >
                          {menuItem.title}
                        </Link>
                      ) : (
                        <>
                          <a
                            onClick={() => handleSubmenu(index)}
                            className="flex cursor-pointer items-center justify-between py-2.5 text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-yellow lg:py-2"
                          >
                            {menuItem.title}
                            <span className="pl-2">
                              <svg width="14" height="14" viewBox="0 0 15 14">
                                <path
                                  d="M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </a>
                          <div
                            className={`submenu relative top-full left-0 rounded-lg bg-white p-3 shadow-lg duration-300 dark:bg-[#131943] lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[220px] lg:opacity-0 lg:group-hover:visible lg:group-hover:top-full ${
                              openIndex === index ? "block" : "hidden"
                            }`}
                          >
                            {menuItem.submenu?.map((submenuItem) => (
                              <Link
                                href={submenuItem.path}
                                key={submenuItem.id}
                                className="block rounded-md px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 hover:text-primary dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-yellow"
                              >
                                {submenuItem.title}
                              </Link>
                            ))}
                          </div>
                        </>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <ThemeToggler />

              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="relative block rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden cursor-pointer"
              >
                <span
                  className={`relative my-1.5 block h-0.5 w-[26px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? "top-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[26px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[26px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? "top-[-7px] -rotate-45" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
