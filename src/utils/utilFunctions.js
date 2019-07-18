export default function filterBy (search, list, by){
    let res; 
    let searchLC=search.toLowerCase()
    search!==""      
    ? res=list.filter( item => item[by].toLowerCase().split(' ').join('').includes(searchLC))
    : res=list
    return res
}

 function getPropertiesFromArrayOfObjects (array, property)  {
    return array.map(item => item[`${property}`])
}

 function capitalize(s) {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

export {filterBy, getPropertiesFromArrayOfObjects, capitalize};

