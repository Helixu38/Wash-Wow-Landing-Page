"use client";
import React, { useState, useEffect } from "react";
import { AdminCard } from "./card";
import { AdminChart } from "./chart";
import {
  fetchSystemStatistics,
  FetchStatisticSystemResponse,
} from "@/lib/services/fetch";

// Helper function for formatting numbers with commas
const formatNumber = (number: number): string =>
  new Intl.NumberFormat().format(number);

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
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:lg:grid-cols-2 lg:grid-cols-2 gap-6 flex-grow">
        <AdminCard
          title="Customers"
          numberStat={
            stats ? formatNumber(stats.value.totalCustomers) : "Loading..."
          }
        />
        <AdminCard
          title="Business Owners"
          numberStat={
            stats ? formatNumber(stats.value.totalShopOwners) : "Loading..."
          }
        />
        <AdminCard
          title="Total Revenue"
          numberStat={
            stats ? `${formatNumber(stats.value.totalRevenue)}` : "Loading..."
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
          numberStat={
            stats ? `${formatNumber(stats.value.realRevenue)}` : "Loading..."
          }
        />
        <AdminCard
          title="Total Transactions"
          numberStat={
            stats ? formatNumber(stats.value.totalTransactions) : "Loading..."
          }
        />
      </div>
      <div className="flex-grow h-full mt-4 lg:mt-0 lg:w-1/2">
        {stats && (
          <AdminChart monthlyRevenueGrowth={stats.value.monthlyRevenueGrowth} />
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;
