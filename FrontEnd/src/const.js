export let API_URL= "";
if (process.env.NODE_ENV === "prod") API_URL = "/api";

if (process.env.NODE_ENV === "dev") API_URL = "http://localhost:3001/api";
export const AXIOS_CONFIG = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};
