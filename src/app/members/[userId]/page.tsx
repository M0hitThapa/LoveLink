import { getMemberByUserId } from '@/app/actions/memberActions'
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
   {member.name}
   </>
  )
}

