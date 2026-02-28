import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = "https://api.thenewsapi.com/v1/news";

export const fetchTopNews = async ({ search = "", category = "", page = 1 }) => {
  try {
    const response = await axios.get(`${BASE_URL}/top`, {
      params: {
        api_token: API_KEY,
        search,
        categories: category,
        language: "en",
        page,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Something went wrong" };
  }
};
