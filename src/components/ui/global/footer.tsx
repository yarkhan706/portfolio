"use client";

import Link from "next/link";
import { Mail, Linkedin, Instagram, Github } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-gray-100 py-10">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-5">
        {/* Social Icons */}
        <div className="flex space-x-6 text-gray-400">
          <Link href="mailto:asfandyarkhan.dev@gmail.com" className="hover:text-gray-900 hover:-translate-y-0.5" aria-label="Email">
            <Mail size={20} strokeWidth={1.5} />
          </Link>
          <Link href="https://www.linkedin.com/in/yarkhan706/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 hover:-translate-y-0.5" aria-label="LinkedIn">
            <Linkedin size={20} strokeWidth={1.5} />
          </Link>
          <Link href="https://www.instagram.com/yarkhan706/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 hover:-translate-y-0.5" aria-label="Instagram">
            <Instagram size={20} strokeWidth={1.5} />
          </Link>
          <Link href="https://github.com/yarkhan706" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 hover:-translate-y-0.5" aria-label="GitHub">
            <Github size={20} strokeWidth={1.5} />
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-[11px] tracking-wide text-gray-400">
          &copy; {year} Asfand Yar Khan
        </p>
      </div>
    </footer>
  );
}
