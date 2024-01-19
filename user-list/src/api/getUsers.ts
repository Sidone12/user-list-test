import axios from "axios";
import { User } from "./types";

const getUsers = async () => {
  const url = "https://reqres.in/api/users";
  const response = await axios.get<{ data: User[] }>(url);
  return response.data.data;
};

export default getUsers;
