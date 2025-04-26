import { getMemberByUserId } from '@/app/actions/memberActions'
import { CardContent } from '@/components/ui/card'
import { CardHeader, Divider } from '@heroui/react'
import { notFound } from 'next/navigation'
import React from 'react'

 export default async function MembersDetailsPage({
    params,
 }: {
    params:{ userId: string}
 }) {
   const member = await getMemberByUserId(
      params.userId
   )

   if(!member) return notFound();
  return (
   <>
   
 <CardHeader className='text-2xl font-semibold text-secondary'>
   Profile
 </CardHeader>
 <Divider />
 <CardContent>
   {member.description}
 </CardContent>
 </>
  )
}

