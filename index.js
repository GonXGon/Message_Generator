console.log("hello wordls");
function random(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}
const greeting = [
    "Hello there!",
    "Hi!",
    "Greetings!",
    "Hey!",
    "Salutations!"
];
const quotes = [
    "You are capable of amazing things.",
    "Believe in yourself and all that you are.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Act as if what you do makes a difference. It does.",
    "Success is not how high you have climbed, but how you make a positive difference to the world."
];
const closing = [
    "Have a great day!",
    "Keep shining!",
    "Stay positive!",
    "You're doing great!",
    "Keep up the good work!"
];

function GenerateMessage(){
    const greetings = random(greeting);
    const quote = random(quotes);
    const closings = random(closing);
    return `${greetings}${quote}${closings}`;
}

console.log(GenerateMessage());