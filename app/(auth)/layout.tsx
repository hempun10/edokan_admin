import { AuthLayoutTypes } from "@/types/type";

const AuthLayout = ({ children }: AuthLayoutTypes) => {
  return (
    <div className=" flex items-center justify-center h-full">{children}</div>
  );
};

export default AuthLayout;
