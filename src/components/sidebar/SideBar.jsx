import "./SideBar.scss";
import {BiX} from "react-icons/bi";
import AccordionTree from "../accardion/accardiontree/AccordionTree";
import React, {useRef} from "react";
import Merchants from "../merchants/Merchants";
import translations from "../../translation";
//  use this component and split it two component which names are AccordionTree and  Merchants i send flat data to AccordionTree and i
// convert this data to tree model with multi level
const SideBar = ({
                     checked,
                     setChecked,
                     categoriesResults,
                     filter,
                     setFilter,
                     handleSetQueryParam,
                     merchantsResults,
                 }) => {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <>
            <div className="filter-container" ref={navRef}>
                <h3 className="filter-title">{translations.filters}</h3>

                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <BiX/>
                </button>

                <p className="filter-category">{translations.categories}</p>
                <AccordionTree
                    flatData={categoriesResults}
                    filter={filter}
                    setFilter={setFilter}
                    handleSetQueryParam={handleSetQueryParam}
                />

                <Merchants
                    merchants={merchantsResults}
                    checked={checked}
                    setChecked={setChecked}
                />
            </div>

            <div className="filter-container-mobile">
                <button className="filter-button-mobile" onClick={showNavbar}>
                    {translations.filters}
                </button>
            </div>
        </>
    );
};
export default SideBar;
