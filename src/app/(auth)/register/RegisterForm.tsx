"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form"
import { RegisterSchema,registerSchema } from "@/lib/schemas/RegisterSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerUser } from "@/app/actions/authActions"


export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
    const { register, handleSubmit,setError, formState: { errors, isValid, isSubmitting} } = useForm<RegisterSchema>({
       // resolver:zodResolver(registerSchema),
       mode:"onTouched"
    });
    const onSubmit =async (data:RegisterSchema) => {
        const result = await registerUser(data)

        if (result.status === 'success') {
          console.log("User registered successfully")
        } else {
          if(Array.isArray(result.error)) {
            result.error.forEach((e: any) => {
              console.log("e::: ", e);
              const fieldName = e.path.join(".") as 
              | "email"
              | "name"
              | "password";

              setError(fieldName, {
                message: e.message,
              })
            })
          } else {
            setError("root.serverError", {
              message: result.error,
            })
          }
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
<Label htmlFor="name">Name</Label>
<Input id="name" type="name" placeholder="Enter your name" className="bg-white"{...register("name")} aria-invalid={errors.name ? "true":"false"} />
{errors.name?.message && <p className="text-red-500 text-sm" role="alert">{String(errors.name.message)}</p>}
        </div>
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
        Already have an Account!{" "}
        <a href="/login" className="underline underline-offset-4">
          Login here
        </a>
      </div>
    </form>
  )
}
