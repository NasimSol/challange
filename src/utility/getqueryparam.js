const getQueryParam = () => {
    // Get the current URL query string
    const queryParams = new URLSearchParams(window.location.search);

    // Get the value of the "filter" parameter
    const filterValue = queryParams.get("filter");

    return filterValue;
};
export default getQueryParam;
