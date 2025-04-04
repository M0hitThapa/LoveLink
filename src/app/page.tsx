import { Button } from "@/components/ui/button";
import TopNav from "@/components/navbar/TopNav";
import { auth } from "@/auth";
import { signOut } from "@/auth";


export default async function  Home() {
  const session = await auth();
  return (
    <div>
      <TopNav />
      <h1 className="text-3xl">Hello App!</h1>
      <h3 className="text-2xl font-semibold">
        User Session Data
      </h3>
      {session ? (
        <div>
          <pre>
            {JSON.stringify(session, null, 2)}
          </pre>
          <form action={async () => {
            "use server";
            await signOut();
          }}>
            <Button 
            type="submit"
            color="primary"
            variant="outline"
           
            >
              SignOut
            </Button>
          </form>
        </div>
      ): (
        <div>
          Not Signed in
        </div>
      )}
    </div>
  );
}
