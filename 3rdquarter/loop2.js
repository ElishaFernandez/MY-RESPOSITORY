let output = document.getElementById('output');

function show(text){
   output.innerHTML += text + "<br>";
}

// IF–ELSE STATEMENT
let age = 16;

if (age <= 18) {
    console.log("You are a minor.");
} else {
    console.log("You are an adult.");
}


// FOR LOOP
for (let i = 1; i <= 5; i++) {
    console.log("Number: " + i);
}


// SWITCH STATEMENT
let grade = "B";

switch (grade) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Good");
        break;
    case "C":
        console.log("Fair");
        break;
    default:
        console.log("Needs Improvement");
}
