// A function that receives a string of number n and print all triples of the first n small Latin letters, ordered alphabetically:

function tripleOfLatinLetters(num){
    let n = Number(num);
    for(let i = 0; i < n; i++){
        let l1 = String.fromCharCode(97 + i);
        for(let k = 0; k< n; k++){
            let l2 = String.fromCharCode(97 + k);
            for(let j = 0; j < n; j++){
                l3 = String.fromCharCode(97 + j);
                console.log(l1+l2+l3);
            }
        }
    }
}
