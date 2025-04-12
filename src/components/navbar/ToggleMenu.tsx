"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";



const ToggleMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      
      <button
          className="md:hidden text-rose-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      

      {/* Mobile Menu */}
      {menuOpen && (

        <div className="md:hidden flex flex-col gap-3  bg-rose-50 text-rose-500 font-bold  p-4  rounded-xl ">
          <Link href="/members" className="text-rose-500 font-mono text-xl font-bold h-8 px-2 rounded-sm  hover:text-rose-600 hover:rotate-2 hover:bg-rose-100" onClick={() => setMenuOpen(false)}>Matches</Link>
          <Link href="/lists" className="text-rose-500 font-mono text-xl font-bold h-8 px-2 rounded-sm hover:text-rose-600 hover:rotate-2 hover:bg-rose-100" onClick={() => setMenuOpen(false)}>Lists</Link>
          <Link href="/messages" className="text-rose-500 font-mono text-xl font-bold h-8 px-2 rounded-sm   hover:text-rose-600 hover:rotate-2 hover:bg-rose-100" onClick={() => setMenuOpen(false)}>Messages</Link>
          <Button className="bg-rose-700 cursor-pointer hover:bg-rose-800 shadow-inner shadow-rose-600 transition duration-300 hover:rotate-3" onClick={() => setMenuOpen(false)}>

            <Link href="/login">Login</Link>
          </Button>
          <Button className="bg-rose-700 cursor-pointer hover:bg-rose-800 shadow-inner shadow-rose-600 transition duration-300 hover:rotate-3" onClick={() => setMenuOpen(false)}>
          <Link href="/register">Register</Link>
          </Button>
        </div>
      )}
    </>
  );
};

export default ToggleMenu;
