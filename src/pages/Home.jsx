import React from "react";
import { ReCalendar } from "../organisms/ReCalendar";

export const Home = () => {
  return (
    <div className="grid grid-cols-4 gap-4 bg-amber-600">
      <div className="col-span-4 col-start-2 place-self-center">
        <h2>Home</h2>
      </div>
      {/* <ReCalendar /> */}
      <div>Today's List</div>
    </div>
  );
};
