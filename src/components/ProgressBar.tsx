"use client";

import { useEffect, useRef, useState } from "react";

const ProgressBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  let percentScrolledRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    percentScrolledRef.current =
      (scrollPosition /
        (window.document.body.scrollHeight - window.innerHeight)) *
      100;
  }, [scrollPosition]);

  return (
    <div
      className="fixed left-0 top-[var(--navbar-scroll-height)] h-0.5 bg-red-400"
      style={{
        width: `${percentScrolledRef.current}%`,
      }}
    ></div>
  );
};

export default ProgressBar;
