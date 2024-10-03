import React, { useEffect, useState } from "react";
import { useTable } from "@tanstack/react-table";
import { fetchLaundryShops, LaundryShop } from "@/lib/services/fetch";

const LaundryShopTable: React.FC = () => {
  const [laundryShops, setLaundryShops] = useState<LaundryShop[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [pageNo, setPageNo] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);

  useEffect(() => {
    const getLaundryShops = async () => {
      try {
        const shops = await fetchLaundryShops(pageNo, pageSize);
        setLaundryShops(shops);
      } catch (err) {
        setError("Failed to fetch laundry shops");
      } finally {
        setLoading(false);
      }
    };

    getLaundryShops();
  }, [pageNo, pageSize]);

  const columns = React.useMemo(
    () => [
      {
        accessorKey: "name", // Accessor is the "key" in the data
        header: "Name",
      },
      {
        accessorKey: "address",
        header: "Address",
      },
      {
        accessorKey: "phoneContact",
        header: "Phone Contact",
      },
      {
        accessorKey: "status",
        header: "Status",
      },
      {
        accessorKey: "totalMachines",
        header: "Total Machines",
      },
    ],
    [],
  );

  const table = useTable({ data: laundryShops, columns });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Laundry Shops</h1>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <th
                  key={column.id}
                  className="border border-gray-300 p-2 text-left"
                >
                  {column.header}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-gray-100">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border border-gray-300 p-2">
                  {cell.getValue()}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between my-4">
        <button
          onClick={() => setPageNo((prev) => Math.max(prev - 1, 1))}
          disabled={pageNo === 1}
        >
          Previous
        </button>
        <span> Page {pageNo} </span>
        <button onClick={() => setPageNo((prev) => prev + 1)}>Next</button>
      </div>
    </div>
  );
};

export default LaundryShopTable;
