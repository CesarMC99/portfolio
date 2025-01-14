import React from "react";
import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <header className="bg-red-700 h-screen">
      <div className="fixed w-screen top-0 left-0 grid place-items-center bg-slate-200/80">
        <Navigation></Navigation>
      </div>
    </header>
  );
};
