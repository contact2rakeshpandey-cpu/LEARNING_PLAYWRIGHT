// Write a program that calculates and displays the letter grade for a given numerical score (e.g., A, B, C, D, or F) based on the following grading scale:

// A: 90-100

// B: 80-89

// C: 70-79

// D: 60-69

// F: 0-59

let scores = 75;
function calculateGrades(){
    if (scores >=90 && scores <=100)
        {
            console.log("Your grade is A");
        }
            else if(scores>=80 && scores <=89){
                console.log("Your grade is B");
            }
            else if(scores>=70 && scores <=79){
                console.log("Your grade is C");
            }
            else if(scores>=60 && scores <=69){
                console.log("Your grade is D");
            }
            else{
                console.log("Your grade is F");
            }
        }
calculateGrades();