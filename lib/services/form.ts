import axios from "axios";

const baseUrl = "https://localhost:7276";

interface UpdateStatusResponse {
  success: boolean;
  message?: string;
}

export const updateFormStatus = async (
  formID: string,
  status: "APPROVED" | "REJECTED",
): Promise<UpdateStatusResponse | null> => {
  const statusString = status === "APPROVED" ? "1" : "2";

  try {
    const response = await axios.patch(`${baseUrl}/forms/${formID}/status`, {
      formID: formID,
      status: statusString,
    });

    return response.data;
  } catch (error) {
    console.error("Error updating form status:", error);
    return null;
  }
};

export const updateUserRole = async (
  userID: string,
  role: "CUSTOMER" | "SHOP_OWNER",
): Promise<UpdateStatusResponse | null> => {
  const roleString = role === "CUSTOMER" ? "1" : "2";

  try {
    const response = await axios.put(`${baseUrl}/users/${userID}/role`, {
      userID: userID,
      role: roleString,
    });

    return response.data;
  } catch (error) {
    console.error("Error updating user's role status:", error);
    return null;
  }
};
