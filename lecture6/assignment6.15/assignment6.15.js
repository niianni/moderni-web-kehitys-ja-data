
const year = new Date().getFullYear();

function generateCredentials(firstName, lastName) {
    let credentials = [];
    credentials.push(generateUsername(firstName, lastName));
    credentials.push(generatePassword(firstName, lastName));
    console.log(credentials);
    return credentials;
}

function generateUsername(firstName, lastName) {
    return `B${year.toString().slice(-2)}${lastName.slice(0,2).toLowerCase()}${firstName.slice(0,2).toLowerCase()}`;
}

function generatePassword(firstName, lastName) {
    return `${String.fromCharCode(randomInt(65, 90))}${firstName.slice(0,1).toLowerCase()}${lastName.slice(-1).toUpperCase()}${String.fromCharCode(randomInt(33, 47))}${year.toString().slice(-2)}`;
}

function randomInt(min, max) {
    return Math.random() * (max - min) + min;
}

generateCredentials("John", "Doe");
