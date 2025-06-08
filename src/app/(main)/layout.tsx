import React from "react";

import Navbar from "@/app/(main)/_components/navbar";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-light-100 dark:bg-dark-900 ">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default AppLayout;
