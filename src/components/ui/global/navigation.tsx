"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X} from "lucide-react";
import { redirect, usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 ">
        {/* Brand */}
        <div className="flex flex-col space-y-[-0.7rem] cursor-pointer" onClick={() => redirect("/")}>
          <span className="font-bold text-xl  tracking-tight md:text-2xl">ASFAND</span>
          <span className="font-bold text-xl tracking-tight md:text-2xl">YAR</span>
          <span className="font-bold text-xl  tracking-tight md:text-2xl">KHAN</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center text-gray-400 gap-4  text-sm tracking-tight">
          <Link href="/aboutme" className={`${pathname === "/aboutme" ? "text-gray-900" : "hover:text-gray-900 active:text-gray-900"}`}>about</Link>
          <Link href="/work" className={`${pathname === "/work" ? "text-gray-900" : "hover:text-gray-900 active:text-gray-900"}`}>work</Link>
          <Link href="https://www.instagram.com/yarkhan706/" className={`${pathname === "/instagram" ? "text-gray-900" : "hover:text-gray-900 active:text-gray-900"}`}>instagram</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(true)}
          aria-label="Open Menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Full-Screen Menu */}
      {menuOpen && (
        <div className=
        "fixed inset-0 z-50 mx-auto p-4 container bg-white flex flex-col"
        >
          {/* Top Section */}
          <div className="flex items-center justify-between p-4 px-10">
            <div className="flex flex-col space-y-[-0.7rem] cursor-pointer " onClick={() => redirect("/")}
            >
              <span className="font-bold text-xl  tracking-tight md:text-2xl">ASFAND</span>
              <span className="font-bold text-xl  tracking-tight md:text-2xl">YAR</span>
              <span className="font-bold text-xl  tracking-tight md:text-2xl">KHAN</span>
            </div>
            <button
              className="p-2"
              onClick={() => setMenuOpen(false)}
              aria-label="Close Menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Centered Navigation Links */}
          <nav className="flex-1 flex flex-col items-center justify-center gap-4">
            <Link
              href="/aboutme"
              className="text-sm font-semibold tracking-tight"
              onClick={() => setMenuOpen(false)}
            >
              about
            </Link>
            <Link
              href="/work"
              className="text-sm font-semibold tracking-tight"
              onClick={() => setMenuOpen(false)}
            >
              work
            </Link>
            <Link
              href="https://www.instagram.com/yarkhan706/"
              className="text-sm font-semibold tracking-tight"
              onClick={() => setMenuOpen(false)}
            >
              instagram
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
