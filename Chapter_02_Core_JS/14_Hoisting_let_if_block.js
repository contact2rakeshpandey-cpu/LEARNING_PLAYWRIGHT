let a = "Rakesh";
if (true){
    console.log(a); // Rakesh
    let a = "Hi! how are you?"; // This 'a' is different from the 'a' declared outside the block. It is block-scoped.
}