"use client";

import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [navScrollActive, setNavScrollActive] = useState(false);

  useEffect(() => {
    function listenNavScrollEvent() {
      console.log(window.scrollY);
      setNavScrollActive(window.scrollY > 10);
    }
    window.addEventListener("scroll", listenNavScrollEvent);
    return () => window.removeEventListener("scroll", listenNavScrollEvent);
  }, []);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 w-full bg-white",
        navScrollActive && "bg-white/75 shadow-lg backdrop-blur-lg"
      )}
    >
      <div className="max-w-screen-md px-4 mx-auto md:px-6">
        <div
          className={clsx(
            "flex h-navbar items-center justify-center transition-all duration-500",
            navScrollActive && "h-navbar-scroll"
          )}
        >
          <ul className="flex items-center gap-6 sm:gap-8">
            <li>
              <Link href={"/"}>Blog</Link>
            </li>
            <li>
              <Link href={"/about"}>About me</Link>
            </li>
            <li>
              <Link href={"/feed"}>RSS</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
