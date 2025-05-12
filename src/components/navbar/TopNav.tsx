import Link from "next/link";
import { MessageSquareHeart } from "lucide-react";
import ToggleMenu from "./ToggleMenu";
import { Button } from "../ui/button";
import { auth } from "@/auth";
import { UserMenu } from "./UserMenu";


async function TopNav() {
  const session = await auth()
  return (
<>

    <header className="  sticky top-0 z-50 max-w-screen  shadow rounded-md lg:mt-2 lg:mx-20 md:mt-2 md:mx-7">
      <nav className="  flex justify-between   p-1.5 md:px-4">
        {/* Logo */}
        <h1 className="text-2xl font-black  flex gap-2  ">
          <Link className="bg-gradient-to-r from-black to-white/20 bg-clip-text text-transparent" href="/">
            LoveLink
          </Link>
          <MessageSquareHeart className="text-rose-600" />
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-14">
          <Link href="/members" className="text-rose-500 text-xl font-black hover:text-rose-800">
            Matches
          </Link>
          <Link href="/lists" className="text-rose-500  text-xl font-black hover:text-rose-800">
            Lists
          </Link>
          <Link href="/messages" className="text-rose-500  text-xl font-black hover:text-rose-800">
            Messages
          </Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4 ">
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
       

      <div className="lg:hidden">
         <ToggleMenu />
      </div>
          
      </nav>
        
         
  
     
      
      
    </header>

    </>
  );
}

export default TopNav;
