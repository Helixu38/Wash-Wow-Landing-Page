import React from "react";
import { AdminCard } from "./card";

function AdminDashboard() {
  return (
    <div className="flex flex-row gap-[25px]">
      <div className="flex-grow-0">
        <div className="grid grid-cols-2 gap-[25px] columns-2">
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
      </div>
      <div className="flex-grow h-full">
        <AdminCard
          title="Users"
          numberStat="1,568"
          growthStat="7.7%"
          growthBool={true}
        />
      </div>
    </div>
  );
}

export default AdminDashboard;
