"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "datatables.net-dt";

const Page = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:3000/api/listData");

      setData(res.data.data);
      setIsLoading(false);
    };

    const timer = setTimeout(() => {
      getData();
    }, 1000);

    return () => clearTimeout(timer);
    s;
  }, []);

  useEffect(() => {
    if (!isLoading && data.length > 0) {
      new DataTable("#myTable", {
        responsive: true,
        ordering: true,
        paging: true,
        searching: true,
        info: true,
      });
    }
  }, [data, isLoading]);

  return (
    <div>
      {isLoading ? (
        <div className="text-center m-6">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 text-white mx-auto"></div>
          <h2 className="mt-4">Loading...</h2>
          <p className="">You are gonna be thrilled soon!</p>
        </div>
      ) : (
        <div className="container mx-auto my-6 p-4 glass1">
          <table id="myTable" className="display text-white">
            <thead>
              <tr>
                <th className="border bg-border-grey-100 uppercase">id</th>
                <th className="border bg-border-grey-100 uppercase">name</th>
                <th className="border bg-border-grey-100 uppercase">type</th>
                <th className="border bg-border-grey-100 uppercase">status</th>
                <th className="border bg-border-grey-100 uppercase">imdb</th>
                <th className="border bg-border-grey-100 uppercase">review</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="border bg-border-grey-100 text-center">{index + 1}</td>
                  <td className="border bg-border-grey-100 text-center">{item.name}</td>
                  <td className="border bg-border-grey-100 text-center">{item.type}</td>
                  <td className="border bg-border-grey-100 text-center">{item.status}</td>
                  <td className="border bg-border-grey-100 text-center">{item.imdb}</td>
                  <td className="border bg-border-grey-100 text-center">{item.review}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Page;
