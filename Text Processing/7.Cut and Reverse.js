// 7 Cut and Reverse
 
function cutAndReverse(str){
    let firstHalf = str.substring(0, str.length/2).split("").reverse().join("");
    let secondHalf = str.substring(str.length/2).split("").reverse().join("");
    console.log(firstHalf);
    console.log(secondHalf);
}
 
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
console.log("-----");
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');