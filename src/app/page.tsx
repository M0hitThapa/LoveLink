import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl">Hello</h1>
      <Button variant="outline">
        <Link href="/members">😉Hello</Link>
        </Button>
    </div>
  );
}
