//i use this function with recursive property for converting flatdata to treedata in multilevel
const convertToTree = (arr, parent = null) =>
    arr.filter(item => item.parent === parent)
        .map(item => ({
            ...item, children: convertToTree(arr,
                item.id)
        }));

export default convertToTree;
