// auth_services.ts
import axios from "axios";
import https from "https"; // Import https module

const baseUrl = "https://washwowbe.onrender.com";

interface LoginResponse {
  token: string;
  role: string;
  username: string;
}

export const login = async (
  email: string,
  password: string,
): Promise<string | null> => {
  try {
    // Create an HTTPS agent
    const agent = new https.Agent({
      rejectUnauthorized: false,
    });

    const response = await axios.post<LoginResponse>(
      `${baseUrl}/login`,
      {
        user: {
          email: email,
          password: password,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "69420",
        },
        httpsAgent: agent, // Use the HTTPS agent here
      },
    );

    if (response.status === 200) {
      const { token, role, username } = response.data;

      if (token && role) {
        localStorage.setItem("token", token);
        localStorage.setItem("fullName", username);
        localStorage.setItem("role", role);
        console.log("Login successful, token:", token, "fullName:", username);
        return role;
      } else {
        console.error(
          "Token or role is missing in the response:",
          response.data,
        );
        return null;
      }
    } else {
      console.error("Login failed:", response.data);
      throw new Error(`Login failed with status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error during login:", error);
    return null;
  }
};
