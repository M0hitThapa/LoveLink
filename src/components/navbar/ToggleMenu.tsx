"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";

const ToggleMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative z-50">
      <button
        className="md:hidden text-rose-800"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {menuOpen && (
        <div className="absolute right-0  top-10 min-w-screen   bg-rose-50 shadow-xl rounded-xl p-4 flex flex-col gap-3 text-rose-500 font-bold z-50 ">
          <Link
            href="/members"
            className="text-xl font-bold h-8 px-2 rounded-sm hover:text-rose-800 "
            onClick={() => setMenuOpen(false)}
          >
            Matches
          </Link>
          <Link
            href="/lists"
            className="text-xl font-bold h-8 px-2 rounded-sm hover:text-rose-800"
            onClick={() => setMenuOpen(false)}
          >
            Lists
          </Link>
          <Link
            href="/messages"
            className="text-xl font-bold h-8 px-2 rounded-sm hover:text-rose-800"
            onClick={() => setMenuOpen(false)}
          >
            Messages
          </Link>
          <Button
            className="bg-rose-700 w-32 shadow-inner shadow-rose-600 transition hover:rotate-3 hover:bg-rose-800"
            onClick={() => setMenuOpen(false)}
          >
            <Link href="/login">Login</Link>
          </Button>
          <Button
            className="bg-rose-700 w-32 shadow-inner shadow-rose-600 transition hover:rotate-3 hover:bg-rose-800"
            onClick={() => setMenuOpen(false)}
          >
            <Link href="/register">Register</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default ToggleMenu;
