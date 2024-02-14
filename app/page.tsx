"use client";

import LoginCard from "@/components/LoginCard";
import RegisterCard from "@/components/RegisterCard";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  const images = [
    { src: "/image1.jpg", alt: "" },
    { src: "/image2.jpg", alt: "" },
    { src: "/image3.jpg", alt: "" },
  ];

  return (
    <main className="grid lg:grid-cols-2 flex-1">
      <div className="hidden lg:flex">
        <div
          className="bg-cover bg-center object-fill size-full"
          style={{ backgroundImage: `url(/image1.jpg)` }}></div>
        {/* <Carousel className="size-full">
          <CarouselContent className="border-2 border-green-500 size-full">
            {images.map((image, index) => (
              <CarouselItem key={index} className="size-full">
                <div
                  className="bg-cover bg-center object-fill size-full"
                  style={{ backgroundImage: `url(${image.src})` }}></div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel> */}
      </div>
      <div className="p-4 flex sm:items-center relative">
        <div className="hidden absolute md:block top-8 right-8">
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
