import api from "./api";

export const getAllDecks = async () => {
  const result = await api.get(`/decks`);
  return result;
};

export const getSingleDecks = async (id) => {
  const result = await api.get(`/decks/id/${id}`);
  return result;
};
