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

interface OperatingHours {
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
    const response = await axios.get<{ value: LaundryShop[] }>(
      `${baseUrl}?pageNo=${pageNo}&pageSize=${pageSize}`,
    );
    return response.data.value; // Extracting the array of LaundryShop
  } catch (error) {
    console.error("Error fetching laundry shops:", error);
    throw error; // Rethrow the error for further handling if needed
  }
};
