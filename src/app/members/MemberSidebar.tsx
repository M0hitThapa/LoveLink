"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Member } from "@prisma/client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
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
    <Card className="w-full mt-5 h-[90vh] max-w-sm rounded-2xl border bg-background">
      <CardHeader className="flex flex-col items-center gap-2 p-6">
        <div className="relative h-32 w-32">
          <Image
            src={member.image || "/images/user.png"}
            alt="User profile image"
            fill
            className="rounded-full object-cover border border-muted"
          />
        </div>
        <div className="text-center mt-2">
          <h2 className="text-lg font-semibold">{member.name}</h2>
          <p className="text-sm text-muted-foreground">
            {member.city}, {member.country}
          </p>
        </div>
      </CardHeader>

      <Separator />

      <CardContent className="flex flex-col gap-2 p-6">
        <nav className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted/50 ${
                pathname === link.href
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </CardContent>

      <CardFooter className="mt-auto p-6">
        <Button
          asChild
          variant="outline"
          className="w-full"
        >
          <Link href="/members">Go back</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
