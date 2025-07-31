import { API_DOMAIN } from "./serviceConstants";

export const api = async (config) => {
  const { endpoint } = config;
  const URL = API_DOMAIN + endpoint; // preparing the url
  try {
    const res = await fetch(URL); // network request

    if (res.status >= 200 && res.status < 300) {
      // checking success response
      const data = await res.json(); // get json format data
      if (data) {
        return data; // return api response
      }
      throw new Error(res.statusText);
    }
    throw res; // api fails
  } catch (e) {
    console.log(e);
    throw e; // throw error for api caller
  }
};
