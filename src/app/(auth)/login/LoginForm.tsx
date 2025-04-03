"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form"
import { loginSchema, LoginSchema } from "@/lib/schemas/LoginSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { SignInUser } from "@/app/actions/authActions"
import { useRouter } from "next/navigation"


export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
    const { register, handleSubmit, formState: { errors} } = useForm<LoginSchema>({
        resolver:zodResolver(loginSchema),
    });
    const router = useRouter();
    const onSubmit =async (data:LoginSchema) => {
        const result = await SignInUser(data);
        if (result.status === "success") {
          router.push("/members");
        } else {
          console.error(result.error as string);
        }
    }
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props} onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com"  className="bg-white"  {...register("email", )}
        aria-invalid={errors.email ? "true" : "false"} />
            {errors.email?.message && <p className="text-red-500 text-sm" role="alert">{String(errors.email.message)}</p>}
         
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            
          </div>
          <Input id="password" type="password" className="bg-white" {...register("password",)}
           />
           {errors.password?.message && (
          <p className="text-red-500 text-sm">{String(errors.password.message)}</p>
        )}
           
        </div>
        <Button type="submit" className="w-full cursor-pointer">
          Login
        </Button>
       
        
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <a href="/register" className="underline underline-offset-4">
          Sign up
        </a>
      </div>
    </form>
  )
}
