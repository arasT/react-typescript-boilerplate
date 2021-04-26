import axios, { AxiosResponse } from "axios";

export const getCurrentIP = (location: string): Promise<AxiosResponse<any>> => {
  console.log("!! params into API call", location);
  return new Promise((resolve, reject) =>
    axios
      .get(`https://api.ipify.org/?format=json`, { params: { location } })
      .then((res) => {
        if (res.data && res.data.ip) {
          resolve(res.data.ip);
        } else {
          resolve("127.0.0.1" as any); // Prevent bug if api.ipify.org doesn't work
        }
      })
      .catch((e) => {
        resolve("127.0.0.1" as any); // Prevent bug if api.ipify.org doesn't work
      })
  );
};
