// Write a program that classifies a triangle based on its side lengths.
//  Given three input values representing the lengths of the sides,
//   determine if the triangle is equilateral (all sides are equal),
//    isosceles (exactly two sides are equal), 
//    or scalene (no sides are equal).
//     Use an if-else statement to classify the triangle

let sideA = 10;
let sideB = 10;
let sideC = 20;
if (sideA===sideB && sideB===sideC){
    console.log("triangle is equilateral (all sides are equal)");
}
else if (sideA===sideB && sideB!==sideC){
    console.log("isosceles (exactly two sides are equal)")
}
else if (sideA !== sideB && sideA !== sideC && sideB!==sideC){
    console.log("scalene triangle (no sides are equal)")
}


// same program using OR operator


if (sideA === sideB && sideB === sideC) {
    console.log("Equilateral Triangle");
} else if (sideA === sideB || sideB === sideC || sideA === sideC) {
    console.log("Isosceles Triangle");
} else {
    console.log("Scalene Triangle");
}
