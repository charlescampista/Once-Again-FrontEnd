import api from "./api";

export const getAllCards = async () => {
  const result = await api.get(`/cards`);
  return result;
};

export const getSingleCard = async (id) => {
  const result = await api.get(`/cards/id/${id}`);
  return result;
};
