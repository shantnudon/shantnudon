"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import MyCard from "../../components/myCard";
import { useEffect, useState } from "react";

export default function Home() {
  const [dataDon, setDataDon] = useState([]);

  const fetchData = async () => {
    const response = await fetch(`http://localhost:3000/data.json`);
    const result = await response.json();
    console.log(result);
    setDataDon(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      this is the home page
      <div className="container">
      {dataDon.map((hanuman, index) => (
  <span key={index}>{hanuman.name}</span>
))}


        <MyCard name="don" url={`google.com`} img={`/bg.png`} />
      </div>
      <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
        Jokester began sneaking into the castle in the middle of the night and
        leaving jokes all over the place: under the king's pillow, in his soup,
        even in the royal toilet. The king was furious, but he couldn't seem to
        stop Jokester. And then, one day, the people of the kingdom discovered
        that the jokes left by Jokester were so funny that they couldn't help
        but laugh. And once they started laughing, they couldn't stop.
      </ScrollArea>
      <div className="container mx-auto">
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}
