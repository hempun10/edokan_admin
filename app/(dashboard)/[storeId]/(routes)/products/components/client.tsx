"use client";

import Heading from "@/components/ui/Heading";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Separator } from "@/components/ui/separator";
import { ProductClientTypes } from "@/types/type";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { columns } from "./columns";
import ApiList from "@/components/ui/api-list";

const ProductClient = ({ data }: ProductClientTypes) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className=" flex items-center justify-between ">
        <Heading
          title={`Products (${data.length})`}
          description="Manage products for your store"
        />
        <Button onClick={() => router.push(`/${params.storeId}/products/new`)}>
          <Plus className=" mr-2 w-4 h-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey="name" />
      <Heading title="API" description="API calls for products" />
      <Separator />
      <ApiList entityIdName="productId" entityName="products" />
    </>
  );
};

export default ProductClient;
