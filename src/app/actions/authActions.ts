'use server'


import { ActionResult } from '@/types/index';
import bcrypt from 'bcryptjs';
import { registerSchema, RegisterSchema } from "@/lib/schemas/RegisterSchema";
import { prisma } from '@/lib/prisma';
import { User } from 'next-auth';
import { LoginSchema } from '@/lib/schemas/LoginSchema';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { signOut } from '@/auth';


export async function SignInUser(data: LoginSchema): Promise<ActionResult<string>> {
    try {
       await signIn('credentials', {
        email: data.email,
        password:data.password,
        redirect:false
      }) ;
      return { status:'success', data:'LoggedIn'}
      
    } catch (error) {
        console.log(error);
        if(error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return { status: 'error',error:'Invalid credentials'}
                    default:
                        return { status: 'error', error:'Something went wrong'}
            }
        } else {
            return { status:'error', error:'Something else went wrong'}
        }
    }
}

export async function registerUser(data: RegisterSchema): Promise<ActionResult<User>> {
    try {
       const validated = registerSchema.safeParse(data);

       if(!validated.success) {
        return { status: 'error', error: validated.error.errors}
       }
       const {name,email,password} = validated.data;

       const hashedPassword = await bcrypt.hash(password,10);
       const existingUser = await prisma.user.findUnique({
        where:{ email }
       });

       if(existingUser) return { status:'error', error:'User already exists'};
       const user = await prisma.user.create({
        data: {
            name,
            email,
            passwordHash:hashedPassword
        }
       })
       return { status:'success', data:user}
    } catch (error) {
        console.log(error);
        return {status:'error', error:'something went wrong'}
    }
}

export async function signOutUser() {
    await signOut({ redirectTo: '/' });
}


export async function getUserByEmail(email:string) {
    return prisma.user.findUnique({ where: {email}});
}