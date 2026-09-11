import axios from 'axios';

// Khởi tạo instance axios kết nối tới backend WedTech
const api = axios.create({
  baseURL: 'https://api.wedtech.vn/api',
});

export const getSupplierCompanies = async (customParams = {}) => {
  const response = await api.get('/companies', {
    params: {
      page: 1,
      limit: 4,
      type: 'SUPPLIER',
      sortBy: 'rating',
      ...customParams,
    },
  });

  return response.data?.data?.data || [];
};

export const getProjects = async (customParams = {}) => {
  const response = await api.get('/projects', {
    params: {
      page: 1,
      limit: 4,
      type: 'SUPPLIER',
      sortBy: 'rating',
      isFeatured: true,
      distinctCompany: true,
      ...customParams,
    },
  });

  return response.data?.data?.data || [];
};

export const getProducts = async (customParams = {}) => {
  const response = await api.get('/products', {
    params: {
      page: 1,
      limit: 4,
      sortBy: 'rating',
      isFeatured: true,
      distinctCompany: true,
      ...customParams,
    },
  });

  return response.data?.data?.data || [];
};

export const getCategories  =  async() => {
  const response = await api.get('/categories');
  return response.data?.data || [];
}

export default api;
