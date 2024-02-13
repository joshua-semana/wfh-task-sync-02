import LoginCard from "@/components/LoginCard";
import RegisterCard from "@/components/RegisterCard";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <main className="grid lg:grid-cols-2 h-screen">
      <div className="hidden lg:block bg-muted border-r"></div>
      <div className="p-8 flex items-center  relative">
        <div className="absolute top-8 right-8">
          <ThemeToggle />
        </div>
        <div className="mx-auto w-full max-w-sm">
          <Tabs defaultValue="Login">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="Login">Login</TabsTrigger>
              <TabsTrigger value="Register">Register</TabsTrigger>
            </TabsList>
            <TabsContent value="Login">
              <LoginCard />
            </TabsContent>
            <TabsContent value="Register">
              <RegisterCard />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  );
}
