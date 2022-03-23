import axios from 'axios';
import { headers } from '../constants';

export const getUserInfo = async nickname => {
  try {
    const response = await axios({
      method: 'GET',
      url: `/api/users/nickname/${nickname}`,
      headers,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
