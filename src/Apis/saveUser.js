
  import axios from 'axios';

export const saveUser = async (user) => {
  try {
    const response = await axios.post('http://localhost:5000/users', user);
  
  } catch (error) {
    console.error(error);
  }
};
