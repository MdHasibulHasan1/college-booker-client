
  import axios from 'axios';

export const saveUser = async (user) => {
  try {
    const response = await axios.post('https://college-booker.vercel.app/users', user);
  
  } catch (error) {
    console.error(error);
  }
};
