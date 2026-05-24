import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);

  if (response.data) {
    localStorage.setItem('userInfo', JSON.stringify(response.data));
  }

  return response.data;
};

const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);

  return response.data;
};

const logout = () => {
  localStorage.removeItem('userInfo');
};

const authService = {
  login,
  register,
  logout,
};

export default authService;