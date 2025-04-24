"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Image,
} from "@heroui/react";
import { Member } from "@prisma/client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  member: Member;
};

export default function MemberSidebar({ member }: Props) {
  const pathname = usePathname();
  const basePath = `/members/${member.userId}`;

  const navLinks = [
    { name: "Profile", href: `${basePath}` },
    { name: "Photos", href: `${basePath}/photos` },
    { name: "Chat", href: `${basePath}/chat` },
  ];

  return (
    <Card className="w-full mt-5 h-[90vh] max-w-sm rounded-2xl shadow-lg border border-pink-200 bg-pink-50">
      <div className="flex flex-col items-center mt-6">
        <Image
          height={200}
          width={200}
          src={member.image || "/images/user.png"}
          alt="User profile main image"
          className="rounded-full aspect-square object-cover border-4 border-pink-300 shadow-md transition duration-300 hover:scale-105"
        />
        <div className="mt-4 text-center">
          <h2 className="text-lg font-semibold text-pink-700">
            {member.name}
          </h2>
          <p className="text-sm text-pink-500">
            {member.city}, {member.country}
          </p>
        </div>
      </div>
      <CardBody className="mt-4 overflow-hidden">
        <Divider className="my-4 border-pink-200" />
        <nav className="flex flex-col px-4 text-xl gap-4">
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.name}
              className={`block rounded-lg px-3 py-2 transition duration-200 ${
                pathname === link.href
                  ? "bg-pink-200 text-pink-900 font-medium shadow-inner"
                  : "hover:bg-pink-100 text-pink-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </CardBody>
      <CardFooter className="mt-auto p-4">
        <Button
          as={Link}
          href="/members"
          fullWidth
          color="default"
          variant="bordered"
          className="border-pink-300 text-pink-600 hover:bg-pink-100 transition"
        >
          Go back
        </Button>
      </CardFooter>
    </Card>
  );
}
