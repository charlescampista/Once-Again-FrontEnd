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

export const deleteTag = async (id) => {
  const result = await api.delete(`/tags/delete/${id}`);
  return result;
};

export const editTag = async (tag) => {
  const result = await api.put(`/tags/edit/${tag.id}`, tag);
  return result;
};
