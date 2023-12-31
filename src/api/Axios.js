import {api} from "./apiConfig";

// use this function with axios to fetch data when we have filter or not
export const getProductsPage = async (
    pageParam = 1,
    size = 10,
    merchantIds = [],
    filter = null
) => {
  //call this part when we have filter
    if (filter !== null) {
        const response = await api.post(
            `/products/${filter}?size=${size}&page=${pageParam}`,
            {
                merchantIds: merchantIds,
            }
        );
        return response.data;
    } else {
        const response = await api.post(
            `/products?size=${size}&page=${pageParam}`,
            {
                merchantIds: merchantIds,
            }
        );
        return response.data;
    }
};
