import Link from "next/link";
import { MessageSquareHeart } from "lucide-react";
import ToggleMenu from "./ToggleMenu";
import { Button } from "../ui/button";
import { auth } from "@/auth";
import { UserMenu } from "./UserMenu";


async function TopNav() {
  const session = await auth()
  return (
    <header className="sticky top-0 z-50 max-w-screen bg-rose-50/50 shadow rounded-md lg:mt-2 lg:mx-20 md:mt-2 md:mx-7">
      <nav className="flex items-center justify-between p-1.5 md:px-4">
        {/* Logo */}
        <h1 className="text-2xl font-black font-sans flex gap-2  ">
          <Link className="bg-gradient-to-r from-amber-800 to-blue-900 bg-clip-text text-transparent" href="/">
            LoveLink
          </Link>
          <MessageSquareHeart className="text-rose-600" />
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-12">
          <Link href="/members" className="text-rose-500/80 font-mono  text-xl font-bold h-8 px-2 rounded-sm hover:text-rose-600 hover:rotate-2 hover:bg-rose-100">
            Matches
          </Link>
          <Link href="/lists" className="text-rose-500/80 font-mono text-xl font-bold h-8 px-2 rounded-sm hover:text-rose-600 hover:rotate-2 hover:bg-rose-100">
            Lists
          </Link>
          <Link href="/messages" className="text-rose-500/80 text-xl font-bold font-mono h-8 px-2 rounded-sm hover:text-rose-600 hover:rotate-2 hover:bg-rose-100">
            Messages
          </Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">
          {session?.user ? (
            <UserMenu />
          ) : (
            <>
             <Button variant="outline" className="bg-rose-300 cursor-pointer hover:bg-rose-400 shadow-inner shadow-rose-400 transition duration-300 hover:rotate-3 ">

<Link href="/login">Login</Link>
</Button>
<Button variant="outline" className="bg-rose-300 cursor-pointer hover:bg-rose-400 shadow-inner shadow-rose-400 hover:rotate-3">

<Link href="/register">Register</Link>
</Button>
            </>
          )}
         
        </div>

        {/* Mobile Toggle Button and Menu (Client Component) */}
       
<ToggleMenu />
      
        
      </nav>
     
      
      
    </header>
  );
}

export default TopNav;
