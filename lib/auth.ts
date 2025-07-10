import { API_URL } from "@/hooks/use-fixtures";
import axios from "axios";

export const signup = async (data: {
  fullname: string;
  email: string;
  password: string;
}) => {
  const response = await axios.post(`${API_URL}/signup.php`, data);
  return response.data;
};

export const login = async (data: { email: string; password: string }) => {
  const response = await axios.post(`${API_URL}/login.php`, data);
  return response.data;
};
