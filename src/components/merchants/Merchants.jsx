import "./Merchants.scss";
import translations from "../../translation";

const Merchants = ({merchants, checked, setChecked}) => {
    // Add/Remove checked item from list to define merchantIds filter
    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, Number(event.target.value)];
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
    };

    return (
        <div className="merchants__container">
            <div className="title">{translations.merchants}</div>
            <div className="checkList__container">
                <div className="list-container">
                    {merchants.map((item, index) => (
                        <div className="merchant__container" key={index}>
                            <input value={item.id} type="checkbox" onChange={handleCheck} className="checkbox"/>
                            <span className="merchant-name">{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Merchants;
