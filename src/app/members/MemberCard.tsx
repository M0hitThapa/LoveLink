"use client";

import { calculateAge } from "@/lib/utils";
import { Card,CardFooter,Image } from "@heroui/react";
import { Member } from "@prisma/client";
import Link from "next/link";
import React from "react";

type Props = {
  member: Member;
 
};

export default function MemberCard({
  member,

}: Props) {
  return (
    <Card
      fullWidth
      as={Link}
      href={`/members/${member.userId}`}
      isPressable
      className="bg-gradient-to-t from-black to-rose-700 pt-5 px-5 pb-13 rounded-2xl max-w-72 "
    >
      <Image
        isZoomed
        alt={member.name}
        width={250}
        src={member.image || "/images/user.png"}
        className="aspect-square rounded-2xl"
      />
     
      <CardFooter className="flex justify-start bg-black overflow-hidden absolute bottom-0 z-10 bg-dark-gradient">
        <div className="flex flex-col text-white">
          <span className="font-semibold">
            {member.name},{" "}
            {calculateAge(member.dateOfBirth)}
          </span>
          <span className="text-sm">
            {member.city}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}