// alert meesage
alert("Welcome to my site");

//welcome + username
let Name = (prompt("enter your name:"));
document.write("<h1>Welcome, " + Name + "!</h1>");

// temperature terary operator
function checkTemp(temp) {
    temp >= 30 ? document.write("hot") : document.write("cold");
}
checkTemp(35);
document.write("<hr>")
checkTemp(15);

// contact info prompts
// valid user name
function getValidName() {
    let name;
    do {
        name = prompt("Please enter your name (letters only):");
    } while (!name || !/^[a-zA-Z\s]+$/.test(name));
    return name;
}

// valid birth year
function getValidBirthYear() {
    let birthYear;
    do {
        birthYear = prompt("Please enter your birth year (must be a number less than 2010):");
        birthYear = Number(birthYear);
    } while (birthYear >= 2010);
    return birthYear;
}

// calculate age
function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}

const userName = getValidName();
const userBirthYear = getValidBirthYear();
const userAge = calculateAge(userBirthYear);
// outputs
document.write(`<h2>User Information</h2>`);
document.write(`<p>Name: ${userName}</p>`);
document.write(`<p>Birth Year: ${userBirthYear}</p>`);
document.write(`<p>Age: ${userAge}</p>`);

// function h1 ---> h6
let output = ""; 
for (let i = 1; i <= 6; i++) {
    output += `<h${i}>Welcome to my page</h${i}>`; // Append each header to the output
}
document.write(output);