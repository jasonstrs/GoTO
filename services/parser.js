export const parseArray = (array, method) => array.map(obj => method(obj));

export const parseSeance = ({ _id, ...other }) => ({ id: _id, ...other });
