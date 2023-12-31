// some data that come from server do not have unique id and i add uniq id to that
const addUniqueId = (arr) => {
  return arr.map((obj, index) => ({
    ...obj,
    uniqid: index + 1, // Adding 1 to make IDs start from 1
  }));
};
export default addUniqueId;
