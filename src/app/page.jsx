"use client";
import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "../components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import MyCard from "../../components/myCard";
import { useEffect, useState } from "react";

export default function Home() {
  const [dataDon, setDataDon] = useState([]);

  const fetchData = async () => {
    const response = await fetch(`http://localhost:3000/api/bookmarks`);
    const result = await response.json();
    setDataDon(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className=" mx-7 grid grid-cols-4">
        <div className="col-span-3">
          <div className="flex">
            {dataDon.map((hanuman, index) => (
              <MyCard
                name={hanuman.name}
                url={hanuman.url}
                img={hanuman.imgage}
              />
            ))}
          </div>
        </div>
        <div>
          <ScrollArea className="h-96 rounded-md border p-4">
            <Card>
              <CardContent className="flex">
                <img src="/bg.png" alt="" className="aspect-square"/>
                <span className="">This is me the don</span>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex">
                <img src="/bg.png" alt="" className="aspect-square"/>
                <span className="">This is me the don</span>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex">
                <img src="/bg.png" alt="" className="aspect-square"/>
                <span className="">This is me the don</span>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex">
                <img src="/bg.png" alt="" className="aspect-square"/>
                <span className="">This is me the don</span>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex">
                <img src="/bg.png" alt="" className="aspect-square"/>
                <span className="">This is me the don</span>
              </CardContent>
            </Card>
          </ScrollArea>
        </div>
      </div>
    </>
  );
}
