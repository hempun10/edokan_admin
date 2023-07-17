import React from "react";
import { format } from "date-fns";
import BillboardClient from "./components/client";
import prismadb from "@/lib/prismadb";
import { BillBoardColumn } from "./components/columns";

const BillBoardPage = async ({ params }: { params: { storeId: string } }) => {
  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  const formatedBillboard: BillBoardColumn[] = billboards.map((item) => ({
    id: item.id,
    label: item.label,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));
  return (
    <div className=" flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardClient data={formatedBillboard} />
      </div>
    </div>
  );
};

export default BillBoardPage;
