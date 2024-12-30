const ApiClient = (baseUrl: string) => ({
  async get(endpoint: string) {
    try {
      const response = await fetch(`${baseUrl}${endpoint}`);
      if (!response.ok) {
        return [null, `HTTP error! Status ${response.statusText}`];
      }
      const data = await response.json();
      return [data, null];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("API request failed", error);
      return [null, error.message];
    }
  },
});

const BASE_URL = "https://restcountries.com/v3.1";

const api = ApiClient(BASE_URL);

const countriesApi = {
  getAll: () =>
    api.get("/all?fields=cca3,name,capital,region,population,flags"),
};

export { countriesApi };
