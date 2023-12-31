import {api} from "./apiConfig";
// use for get merchants
export const getMerchants = async () => {
    const response = await api.get("/merchants");
    return response.data;
};
