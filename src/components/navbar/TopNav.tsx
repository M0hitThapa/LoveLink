"use client"

import React ,{useState} from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Menu, X, MessageSquareHeart } from "lucide-react"; // Icons for mobile menu

function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 max-w-screen bg-rose-50 shadow rounded-md lg:mt-2 lg:mx-10 md:mt-2 md:mx-7 ">
      <nav className="flex items-center justify-between p-2 md:px-4">
        {/* Logo */}
        <h1 className="text-2xl font-black font-sans flex gap-2">
          <Link className="bg-gradient-to-r from-amber-800 to-blue-900 bg-clip-text text-transparent" href="/">
            LoveLink
          </Link>
          <MessageSquareHeart className="text-rose-600" />
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-12">
          <Link href="/members" className="text-rose-500 font-mono text-xl font-bold  hover:text-rose-600 hover:rotate-2 ">Matches</Link>
          <Link href="/lists" className="text-rose-500 font-mono text-xl font-bold hover:text-rose-600 hover:rotate-2">Lists</Link>
          <Link href="/messages" className="text-rose-500 text-xl font-bold font-mono hover:text-rose-600 hover:rotate-2">Messages</Link>
        </div>

        {/* Buttons (Always Visible) */}
        <div className="hidden md:flex gap-4">
          <Button variant="outline" className="bg-rose-300 cursor-pointer hover:bg-rose-400 shadow-inner shadow-rose-400 transition duration-300 hover:rotate-3 ">

          <Link href="/login">Login</Link>
          </Button>
          <Button variant="outline" className="bg-rose-300 cursor-pointer hover:bg-rose-400 shadow-inner shadow-rose-400 hover:rotate-3">

          <Link href="/register">Register</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-rose-800 "
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 bg-rose-100  text-rose-500 font-bold  p-4 m-4 rounded-xl ">
          <Link href="/members" className="text-rose-500 font-mono text-xl font-bold  hover:text-rose-600 hover:rotate-2 " onClick={() => setMenuOpen(false)}>Matches</Link>
          <Link href="/lists" className="text-rose-500 font-mono text-xl font-bold  hover:text-rose-600 hover:rotate-2" onClick={() => setMenuOpen(false)}>Lists</Link>
          <Link href="/messages" className="text-rose-500 font-mono text-xl font-bold  hover:text-rose-600 hover:rotate-2" onClick={() => setMenuOpen(false)}>Messages</Link>
          <Button className="bg-rose-700 cursor-pointer hover:bg-rose-800 shadow-inner shadow-rose-600 transition duration-300 hover:rotate-3" onClick={() => setMenuOpen(false)}>

            <Link href="/login">Login</Link>
          </Button>
          <Button className="bg-rose-700 cursor-pointer hover:bg-rose-800 shadow-inner shadow-rose-600 transition duration-300 hover:rotate-3" onClick={() => setMenuOpen(false)}>
          <Link href="/register">Register</Link>
          </Button>
        </div>
      )}
    </header>
  );
}

export default TopNav;
