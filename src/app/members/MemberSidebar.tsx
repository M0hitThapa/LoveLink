"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import MemberSidebar from "./MemberSidebar"; // Adjust path if needed
import { Member } from "@prisma/client";

type Props = {
  member: Member;
};

export default function SidebarWrapper({ member }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle button only on mobile */}
      <div className="md:hidden p-4">
        <Button variant="outline" size="icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Sidebar: always visible on md+, conditionally on mobile */}
      <div
        className={`
          fixed z-40 top-0 left-0 h-full w-64 bg-background shadow transition-transform duration-300 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:relative md:translate-x-0 md:block
        `}
      >
        <MemberSidebar member={member} />
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
