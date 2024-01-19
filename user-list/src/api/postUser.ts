import axios from "axios";

const postUser = async (first_name, email) => {
  const url = "https://reqres.in/api/users";
  try {
    const response = await axios.post(url, {
      first_name,
      email,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};


export default postUser;
