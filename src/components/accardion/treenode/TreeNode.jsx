import React, {useState} from "react";
import "./TreeNode.scss";
import {BiChevronLeft, BiChevronDown} from "react-icons/bi";

const TreeNode = ({node, filter, setFilter, handleSetQueryParam}) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

// in this component we first show parent node and if this node has children show it with recursive methods
    return (
        <div className="tree-node">
            <div className={`node-header ${isOpen ? "open" : ""}`}>
                <div
                    className={`node-leader ${node.parent === null ? "bold" : "normal"}`}
                    onClick={() => handleSetQueryParam(node.id)}
                >
                    {node.name}
                </div>
                {node.children.length > 0 &&
                    (isOpen ? (
                        <BiChevronDown onClick={handleToggle}/>
                    ) : (
                        <BiChevronLeft onClick={handleToggle}/>
                    ))}
            </div>
            {isOpen && node.children && (
                <div className="node-children">
                    {node.children.map((child) => (
                        <TreeNode
                            key={child.id}
                            node={child}
                            filter={filter}
                            setFilter={setFilter}
                            handleSetQueryParam={handleSetQueryParam}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default TreeNode;
