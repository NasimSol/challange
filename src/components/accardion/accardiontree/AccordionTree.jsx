import React from "react";
import TreeNode from "../treenode/TreeNode";
import "./AccordionTree.scss";
import convertToTree from "../../../utility/convertToTree";


const AccordionTree = ({
                           flatData,
                           filter,
                           setFilter,
                           handleSetQueryParam,
                       }) => {
    return (
        <div className="accordion-tree">
            {convertToTree(flatData).map((rootNode) => (
                <TreeNode
                    key={rootNode.id}
                    node={rootNode}
                    setFilter={setFilter}
                    filter={filter}
                    handleSetQueryParam={handleSetQueryParam}
                />
            ))}
            <hr/>
        </div>
    );
};

export default AccordionTree;
