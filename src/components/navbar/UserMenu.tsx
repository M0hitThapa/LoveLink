"use client"

import * as React from "react"


import {
  DropdownMenu,

  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarImage } from "../ui/avatar"
import { LogOut, UserPen } from "lucide-react"
import { signOutUser } from "@/app/actions/authActions"


export function UserMenu() {
  

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
       <Avatar>
       <AvatarImage src="/images/profilelink.jpg" alt="@shadcn" />
       </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 m-2 bg-rose-50">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="hover:bg-rose-100 cursor-pointer">
          <UserPen />
          <span>Edit Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:bg-rose-100 cursor-pointer" onClick={async () => signOutUser()}>
          <LogOut />
          Log out
        </DropdownMenuItem>
       
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
