
import { HeartHandshake } from "lucide-react"
import { LoginForm } from "./RegisterForm"
import Image from "next/image"


export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2   ">
      <div className="flex flex-col gap-4 p-6 md:p-10 bg-rose-50">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-bold  text-2xl bg-gradient-to-r from-amber-700 to-blue-900 bg-clip-text text-transparent">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <HeartHandshake className="size-4" />
            </div>
            LoveLink.
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <Image
          src="/first.png"
          alt="Image"
          width={400}
          height={400}
          priority
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}
