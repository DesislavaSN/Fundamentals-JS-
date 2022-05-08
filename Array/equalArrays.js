// A function thet receives two string arrays, and prints on the console whether they are identical or NOT. 

function equalArrays(arr1, arr2) {
    let sumArr1 = 0;
    let sumArr2 = 0;
    let equal = true;
    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = Number(arr1[i]);
        sumArr1 += arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        arr2[i] = Number(arr2[i]);
        sumArr2 += arr2[i];
        if (arr1[i] !== arr2[i]) {
            equal = false;
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            break;
        }
        if (arr1[i] === arr2[i]) {
            if (sumArr1 == sumArr2) {
                console.log(`Arrays are identical. Sum: ${sumArr1}`);
                equal = true;
                break;
            }
        }
    }
}
