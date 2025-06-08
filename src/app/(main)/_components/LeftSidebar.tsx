import React from "react";

import NavLinks from "./navbar/NavLinks";

const LeftSidebar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky top=0 left-0 h-screen flex flex-col justify-between border-r p-6 pt-36 max-md:hidden overflow-y-auto shadow-none">
      <div className="flex flex-1 flex-col gap-6">
        <NavLinks isMobileNav={false} />
      </div>
    </section>
  );
};

export default LeftSidebar;
