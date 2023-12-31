import React, {useState} from "react";
import Carts from "../components/carts/Carts";
import "./Main.scss";
import {useNavigate} from "react-router-dom";
import useFilters from "../hooks/useFilters";
import {getMerchants} from "../api/merchantsApi";
import {getCategories} from "../api/categoriesApi";
import SideBar from "../components/sidebar/SideBar";

const Main = () => {
    const navigate = useNavigate();
    const [pageNum, setPageNum] = useState(1);
    const [filter, setFilter] = useState(null);
    const [checked, setChecked] = useState([]);
    // get merchants and category with custom hook
    const {filterResults: categoriesResults} = useFilters(getCategories);
    const {filterResults: merchantsResults} = useFilters(getMerchants);

    // we use this function for setting filters in query param

    const handleSetQueryParam = (nodeId) => {
        // Update URL query string
        const queryParams = new URLSearchParams({filter: nodeId});
        navigate(`?${queryParams.toString()}`);
        // Update the filter state in the parent component
        setFilter(nodeId);
    };

    return (
        <div className="container">
            <SideBar
                checked={checked}
                setChecked={setChecked}
                categoriesResults={categoriesResults}
                filter={filter}
                setFilter={setFilter}
                handleSetQueryParam={handleSetQueryParam}
                Merchants
                merchantsResults={merchantsResults}
            />

            <div>
                <Carts
                    pageNum={pageNum}
                    setPageNum={setPageNum}
                    merchantIds={checked}
                    setMerchantsIds={setChecked}
                />
            </div>
        </div>
    );
};

export default Main;
