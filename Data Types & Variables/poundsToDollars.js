// A function which converts pounds to dollars, if 1 British Pound = 1.31 Dollars

function poundsToDollars(pounds){
    let onePoundToDollar = 1.31;
    let convert = pounds * onePoundToDollar;
    console.log(convert.toFixed(3));
}
