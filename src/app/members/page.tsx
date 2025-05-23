import React from "react";
import { getMembers } from "../actions/memberActions";
import MemberCard from "./MemberCard";
import TopNav from "@/components/navbar/TopNav";

export default async function MembersPage() {
  const members = await getMembers();
  return (
    <>
    <TopNav />
       <div className=" mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6  gap-8 px-12">
      {members && 
members.map((member) => (
  <MemberCard member={member} key={member.id} />
))}
    </div>
    </>
 
  )
}