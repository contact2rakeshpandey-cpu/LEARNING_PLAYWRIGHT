var a = "This is global variable";
if (true){
    console.log(a);
    var a = "This is hoisting with if block";
    console.log(a);
}