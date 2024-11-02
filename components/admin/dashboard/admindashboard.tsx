"use client";
import React, { useState, useEffect } from "react";
import { AdminCard } from "./card";
import { AdminChart } from "./chart";
import {
  fetchSystemStatistics,
  FetchStatisticSystemResponse,
} from "@/lib/services/fetch";

function AdminDashboard() {
  const [stats, setStats] = useState<FetchStatisticSystemResponse | null>(null);

  useEffect(() => {
    async function loadStatistics() {
      const data = await fetchSystemStatistics();
      setStats(data);
    }
    loadStatistics();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-[25px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-[25px] flex-grow-0">
        <AdminCard
          title="Customers"
          numberStat={
            stats ? stats.value.totalCustomers.toString() : "Loading..."
          }
        />
        <AdminCard
          title="Business Owners"
          numberStat={
            stats ? stats.value.totalShopOwners.toString() : "Loading..."
          }
        />
        <AdminCard
          title="Total Revenue"
          numberStat={
            stats ? stats.value.totalRevenue.toString() : "Loading..."
          }
        />
        <AdminCard
          title="Commission Rate"
          numberStat={
            stats ? `${stats.value.commissionRate.toString()}%` : "Loading..."
          }
        />

        <AdminCard
          title="Actual Revenue"
          numberStat={stats ? stats.value.realRevenue.toString() : "Loading..."}
        />

        <AdminCard
          title="Total Transactions"
          numberStat={
            stats ? stats.value.totalCustomers.toString() : "Loading..."
          }
        />
      </div>
      <div className="flex-grow h-full lg:w-1/2 w-full mt-4 lg:mt-0">
        {stats && (
          <AdminChart monthlyRevenueGrowth={stats.value.monthlyRevenueGrowth} />
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;
