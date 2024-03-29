import axios from "axios";

const deleteUser = async (id: number): Promise<void> => {
  const url: string = "https://reqres.in/api/users";
  try {
    await axios.delete(`${url}/${id}`);
    console.log(`Deleted post with ID ${id}`);
  } catch (error) {
    console.log(error);
  }
};

export default deleteUser;