import axios from "axios";

const baseUrl = "https://localhost:7276";

export interface FormFieldValue {
  fieldValue: string;
  formTemplateContentID: number;
  content: string;
}

export interface FormImage {
  url: string;
}

export interface Form {
  id: string;
  status: string;
  senderID: string;
  formTemplateID: number;
  title: string;
  fieldValues: FormFieldValue[];
  formImages: FormImage[];
}

export interface FetchFormResponse {
  value: Form[];
}

export async function fetchForm(): Promise<FetchFormResponse | null> {
  try {
    const response = await fetch(`${baseUrl}/forms`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data: FetchFormResponse = await response.json();
    return data; // Return the response data
  } catch (error) {
    console.error("Error fetching forms:", error);
    return null;
  }
}

export interface LaundryShop {
  id: string;
  address: string;
  name: string;
  phoneContact: string;
  totalMachines: number;
  wallet: number;
  status: string;
  openingHour: OperatingHours;
  closingHour: OperatingHours;
  ownerID: string;
}

export interface OperatingHours {
  ticks: number;
  days: number;
  hours: number;
  milliseconds: number;
  microseconds: number;
  nanoseconds: number;
  minutes: number;
  seconds: number;
  totalDays: number;
  totalHours: number;
  totalMilliseconds: number;
  totalMicroseconds: number;
  totalNanoseconds: number;
  totalMinutes: number;
  totalSeconds: number;
}

export const fetchLaundryShops = async (
  pageNo: number,
  pageSize: number,
): Promise<LaundryShop[]> => {
  try {
    const response = await axios.get<{
      value: { data: LaundryShop[] };
    }>(`${baseUrl}/LaundryShop?PageNo=${pageNo}&PageSize=${pageSize}`);

    return response.data.value.data; // Accessing `data` inside `value`
  } catch (error) {
    console.error("Error fetching laundry shops:", error);
    throw error; // Rethrow the error for further handling if needed
  }
};

export interface FetchStatisticSystemResponse {
  value: {
    totalBookings: number;
    pendingBookings: number;
    completedBookings: number;
    totalRevenue: number;
    commissionRate: number;
    realRevenue: number;
    bestSellingService: string;
    monthlyRevenueGrowth: Array<{
      month: string;
      revenue: number;
      growthPercentage: number;
    }>;
    totalCustomers: number;
    totalShopOwners: number;
    totalTransactions: number;
  };
}

export async function fetchSystemStatistics(): Promise<FetchStatisticSystemResponse | null> {
  try {
    const response = await fetch(`${baseUrl}/api/Statistics/system`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data: FetchStatisticSystemResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
