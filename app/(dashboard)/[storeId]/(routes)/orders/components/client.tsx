"use client";

import Heading from "@/components/ui/Heading";
import { DataTable } from "@/components/ui/data-table";
import { Separator } from "@/components/ui/separator";
import { OrderCilentTypes } from "@/types/type";
import { columns } from "./columns";

const OrderClient = ({ data }: OrderCilentTypes) => {
  return (
    <>
      <Heading
        title={`Orders (${data.length})`}
        description="Manage orders for your store"
      />
      <Separator />
      <DataTable columns={columns} data={data} searchKey="products" />
    </>
  );
};

export default OrderClient;
