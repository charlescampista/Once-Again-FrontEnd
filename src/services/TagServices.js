import api from "./api";

export const getAllTags = async () => {
  const result = await api.get(`/tags`);
  return result;
};

export const getSingleTag = async (id) => {
  const result = await api.get(`/tags/id/${id}`);
  return result;
};

export const createTag = async (tag) => {
  const result = await api.post(`/tags/create`, tag);
  return result;
};
