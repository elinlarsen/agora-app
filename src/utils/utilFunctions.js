export default function filterBy (search, list, by){
    let res; 
    let searchLC=search.toLowerCase()
    /*search!==""      
    ? res=list.filter( item => item[by].toLowerCase().split(' ').join('').includes(searchLC))
    : console.log("coucou") //res=list*/

    if(search!=="" ){
        res=list.filter( item => item[by].toLowerCase().split(' ').join('').includes(searchLC))
    }
    else{res=list}
    return res
}

function getPropertiesFromArrayOfObjects (array, property){
    return array.map(item => item[`${property}`])
}
