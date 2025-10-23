import axios from "axios";

const BASE_URL = "http://localhost:8086";

// CATEGORY APIs
export const getCategories = async () => {
  const res = await axios.get(`${BASE_URL}/category`);
  return res.data;
};

// PRODUCT APIs
export const getProducts = async () => {
  const res = await axios.get(`${BASE_URL}/products`);
  return res.data;
};

export const addProduct = async (productData) => {
  const res = await axios.post(`${BASE_URL}/products`, productData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};
