import Image from "next/image";
import tableImage from "@/public/immersive-table.png";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import NavigationLink from "@/components/link/NavigationLink";

export default function Tables() {
  const tables = [
    {
      id: 1,
      name: "Table 1",
      url_image: tableImage,
    },
    {
      id: 2,
      name: "Table 2",
      url_image: tableImage,
    },
    {
      id: 3,
      name: "Table 2",
      url_image: tableImage,
    },
    {
      id: 4,
      name: "Table 2",
      url_image: tableImage,
    },
    {
      id: 5,
      name: "Table 2",
      url_image: tableImage,
    },
    {
      id: 6,
      name: "Table 2",
      url_image: tableImage,
    },
    {
      id: 7,
      name: "Table 2",
      url_image: tableImage,
    },
  ];
  return (
    <>
      <h1 className="p-4 text-center text-4xl">Roulette Tables</h1>
      <section className="grid place-items-center gap-8 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-3 2xl:grid-cols-6">
        {tables?.map((table) => (
          <NavigationLink className="w-full" href={{
            pathname: `/tables/[tableId]/dealers`,
            params: { tableId: table.id },
            }}>
          <Card
            className="flex w-full cursor-pointer flex-col p-2 hover:border-primary hover:opacity-80"
            key={table.id}
          >
            <CardHeader className="order-2 ">
              <CardTitle className="text-center text-2xl font-medium">
                {table.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 pb-0">
              <Image
                src={table.url_image}
                width={280}
                height={100}
                alt={table.name}
                className="order-1 aspect-video w-full border object-cover"
              />
            </CardContent>
          </Card>
          </NavigationLink>
        ))}
      </section>
    </>
  );
}
