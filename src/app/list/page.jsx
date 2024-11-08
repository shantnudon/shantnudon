// app/list/page.js

import prisma from "../../../lib/prisma"; // Import Prisma client

// This function will be used to generate static paths
export async function generateStaticParams() {
  // Fetch the list data
  const data = await prisma.List.findMany();

  // Generate paths based on the data
  return data.map((item) => ({
    params: data,
  }));
}

// Server Component (App Router)
const List = async ({ data }) => {
  // Fetch the data server-side for the page
  //   const data = await prisma.list.findMany();
  console.log(data);
  return (
    <div>
      <h1>List of Items</h1>
      <div>
        {data && data.length > 0 ? (
          data.map((item) => (
            <div key={item.id}>
              <span>{item.name}</span>
            </div>
          ))
        ) : (
          <p>No data found</p>
        )}
      </div>
    </div>
  );
};

export default List;
