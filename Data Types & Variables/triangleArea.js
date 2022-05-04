// A function that calculates a triangle’s area by its 3 sides.
// Area = √[s(s-a)(s-b)(s-c)]
// Here, "s" is the semi-perimeter of the triangle, i.e., s = (a + b + c)/2.

function triangleArea(side1, side2, side3){
    let semiPerimeter = (side1 + side2 + side3) / 2;
    let area = Math.sqrt(semiPerimeter * (semiPerimeter - side1) * (semiPerimeter - side2) * (semiPerimeter - side3));
    console.log(area);
}
