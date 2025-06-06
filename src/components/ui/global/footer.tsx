"use client";

import Link from "next/link";
import { Mail, Linkedin, Instagram, Github } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className=" py-6">
      <div className="container mx-auto flex flex-col hover:cursor-pointer hover:text-gray-500 items-center justify-center my-3 space-y-4">
        {/* Social Icons */}
        <div className="flex space-x-4 m-4">
          <Link href="mailto:asfandyarkhan.dev@gmail.com" className="hover:text-black" aria-label="Email">
            <Mail size={24} />
          </Link>
          <Link href="https://www.linkedin.com/in/yarkhan706/" className="hover:text-black" aria-label="LinkedIn">
            <Linkedin size={24} />
          </Link>
          <Link href="https://www.instagram.com/yarkhan706/" className="hover:text-black" aria-label="Instagram">
            <Instagram size={24} />
          </Link>
          <Link href="https://github.com/yarkhan706" className="hover:text-black" aria-label="GitHub">
            <Github size={24} />
          </Link>
        </div>

        {/* Copyright */}
        <div>
          <p className="text-xs text-gray-500">
            &copy; {year} Asfand Yar Khan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
