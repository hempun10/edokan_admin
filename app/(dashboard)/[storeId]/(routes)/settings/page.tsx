import prismadb from "@/lib/prismadb";
import { SettingPagetype } from "@/types/type";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";
import SettingForm from "./components/SettingForm";

const SettingPage = async ({ params }: SettingPagetype) => {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
      userId,
    },
  });
  if (!store) {
    redirect("/");
  }
  return (
    <div className=" flex-col ">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SettingForm initialData={store} />
      </div>
    </div>
  );
};

export default SettingPage;
