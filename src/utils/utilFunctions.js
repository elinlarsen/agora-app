export default function filterBy(search, list, by) {
  let res;
  let searchLC = search.toLowerCase();
  search !== null
    ? (res = list.filter(item =>
        item[by]
          .toLowerCase()
          .split(" ")
          .join("")
          .includes(searchLC)
      ))
    : (res = list);
  return res;
}

function getPropertiesFromArrayOfObjects(array, property) {
  return array.map(item => item[`${property}`]);
}

function capitalize(s) {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function changeDateFormat(dateMongo) {
  let date = new Date(dateMongo);
  let day = date.getDate() < 10 ? [0, date.getDate()].join("") : date.getDate();
  let month = date.getMonth() + 1;
  month = month < 10 ? [0, month].join("") : month;
  let year = date.getFullYear();
  return `${year}-${month}-${day}`;
}

export {
  filterBy,
  getPropertiesFromArrayOfObjects,
  capitalize,
  changeDateFormat
};
