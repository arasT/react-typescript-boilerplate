const authService = {
  clearToken: () => localStorage.setItem("access_token", ""),
  setAccessToken: (token: string) =>
    localStorage.setItem("access_token", token),
  getAccessToken: (): string | null => localStorage.getItem("access_token"),
  isAuthenticated: (): boolean => !!localStorage.getItem("access_token"),
};

export default authService;
