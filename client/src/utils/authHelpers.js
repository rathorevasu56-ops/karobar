export const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};

export const getUserRole = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user?.role || null;
};

export const redirectBasedOnRole = (role) => {
  if (role === 'admin') return '/admin';
  if (role === 'seller') return '/seller';
  return '/';
};