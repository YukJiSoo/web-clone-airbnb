export const getToken = () =>
    localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')).token : null;

export const setToken = ({ id, name, email, token }) => {
    localStorage.setItem('userInfo', JSON.stringify({ id, name, email, token }));
};
