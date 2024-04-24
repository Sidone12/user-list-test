import axios from "axios";
import { User } from "./types";

const getUsers = async () => {
  const url = "https://reqres.in/api/users";
  const response = await axios.get<{ data: User[] }>(url);
  console.log(response.data.data)
  return response.data.data;
};

export default getUsers;
