import { BillBoardColumn } from "@/app/(dashboard)/[storeId]/(routes)/billboards/components/columns";
import { ColorColumn } from "@/app/(dashboard)/[storeId]/(routes)/colors/components/columns";
import { OrderColumn } from "@/app/(dashboard)/[storeId]/(routes)/orders/components/columns";
import { ProductColoumn } from "@/app/(dashboard)/[storeId]/(routes)/products/components/columns";
import { SizeColumn } from "@/app/(dashboard)/[storeId]/(routes)/sizes/components/columns";
import { PopoverTrigger } from "@/components/ui/popover";
import {
  Billboard,
  Category,
  Color,
  Image,
  Product,
  Size,
  Store,
} from "@prisma/client";
import React from "react";

export interface AuthLayoutTypes {
  children: React.ReactNode;
}
export interface ModalPropsTypes {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export interface useStoreModalTypes {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export interface DashboardLayoutTypes {
  children: React.ReactNode;
  params: { storeId: string };
}

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;
export interface StoreSwitcherTyes extends PopoverTriggerProps {
  items: Store[];
}
export interface SettingPagetype {
  params: {
    storeId: string;
  };
}

export interface SettingFormType {
  initialData: Store;
}
export interface BillBoardFormType {
  initialData: Billboard | null;
}
export interface CategoryFormType {
  initialData: Category | null;
  billboards: Billboard[];
}
export interface SizeFormType {
  initialData: Size | null;
}
export interface ColorFormType {
  initialData: Color | null;
}
export interface ProductFormType {
  initialData:
    | (Product & {
        images: Image[];
      })
    | null;
  categories: Category[];
  colors: Color[];
  sizes: Size[];
}

export interface HeadingPropType {
  title: string;
  description: string;
}

export interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}
export interface ApiAlertTypes {
  title: string;
  description: string;
  varient: "public" | "admin";
}

export interface ImageUploadTypes {
  disabled?: boolean;
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
  value: string[];
}

export interface BillBoardClientTypes {
  data: BillBoardColumn[];
}
export interface SizesClientTypes {
  data: SizeColumn[];
}
export interface ColorClientTypes {
  data: ColorColumn[];
}
export interface ProductClientTypes {
  data: ProductColoumn[];
}
export interface OrderCilentTypes {
  data: OrderColumn[];
}

export interface ApiListTypes {
  entityName: string;
  entityIdName: string;
}
