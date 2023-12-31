import {api} from "./apiConfig";
// use for get category
export const getCategories = async () => {
    const response = await api.get("/categories");
    return response.data;
};
