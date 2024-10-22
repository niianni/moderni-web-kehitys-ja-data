let str1 = " Lorem ipsum lfdigoeijokovoidjogijdoifoigjsdofj ";
let modString;
let str2 = "fugfiJdgooiejgej"

// modify the string
modString = str1.trim();
modString = modString.substring(0,20);
modString = modString[0].toLowerCase() + modString.substring(1);
console.log(`Original string was: ${str1}`);
console.log(`Modified string is: ${modString}`);

// only check the string
if (str2 !== str2.trim()) {
    console.log("Please remove the white spaces.");
} else if (str2.length > 20) {
    console.log("Your second string is too long. Maximum 20 characters is allowed.");
} else if (str2.charAt(0).toUpperCase() === str2.charAt(0)) {
    console.log("Your second string starts with capital letter.");
} else {
    console.log("Your second string is okay!");
}