import React from "react";
import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <header className="bg-red-700 h-screen w-screen">
      <div className="fixed w-screen top-0 left-0">
        <Navigation></Navigation>
      </div>
    </header>
  );
};
