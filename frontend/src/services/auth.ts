const tokenKey = "@User";
const admKey = "@adm";

export const isAuthenticated = () => localStorage.getItem(tokenKey) != null;
export const getToken = () => localStorage.getItem(tokenKey);
export const login = (token: string) => localStorage.setItem(tokenKey, token);
export const logout = () => localStorage.removeItem(tokenKey);

export const isAdmin = () => localStorage.getItem(admKey) != null;
export const getAdm = () => localStorage.getItem(admKey);
export const setAdm = (admin: boolean) => localStorage.setItem(admKey, JSON.stringify(admin));
export const removeAdm = () => localStorage.removeItem(admKey);