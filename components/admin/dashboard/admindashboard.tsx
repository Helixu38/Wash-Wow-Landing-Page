import React from "react";
import { AdminCard } from "./card";
import { AdminChart } from "./chart";

function AdminDashboard() {
  return (
    <div className="flex flex-col lg:flex-row gap-[25px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-[25px] flex-grow-0">
        <AdminCard
          title="Users"
          numberStat="1,568"
          growthStat="7.7%"
          growthBool={true}
        />
        <AdminCard
          title="Business Owners"
          numberStat="198"
          growthStat="7.7%"
          growthBool={false}
        />
        <AdminCard
          title="Revenue"
          numberStat="294.3 M"
          growthStat="7.7%"
          growthBool={true}
        />
        <AdminCard
          title="Growth"
          numberStat="50.57%"
          growthStat="7.7%"
          growthBool={true}
        />
      </div>
      <div className="flex-grow h-full lg:w-1/2 w-full mt-4 lg:mt-0">
        <AdminChart />
      </div>
    </div>
  );
}

export default AdminDashboard;
