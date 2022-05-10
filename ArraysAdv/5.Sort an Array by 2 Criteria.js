//5.	 Sort an Array by 2 Criteria
// A function that orders an array of strings, by their length in ascending order as primary criteria, 
// and by alphabetical value in ascending order as second criteria. 

function sortArrayByCriteries(arr){
    let sortByAlfabeta = arr.sort();
    // console.log(sortByAlfabeta);
    let sortByLength = sortByAlfabeta.sort((a,b)=> a.length - b.length);
    console.log(sortByLength.join(`\n`));
}

sortArrayByCriteries(['alpha', 'beta', 'gamma']);
sortArrayByCriteries(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
