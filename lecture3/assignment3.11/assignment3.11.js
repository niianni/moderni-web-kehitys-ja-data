let month = process.argv[2];

const thirtyOne = ["1", "3", "5", "7", "8", "10", "12"];
const thirty = ["4", "6", "8", "9", "11"];

if ( thirtyOne.includes(month)) {
  console.log("There is 31 days in given month.");
} else if (thirty.includes(month)) {
  console.log("There is 30 days in given month."); 
} else if ( month === "2" ) {
  console.log("There is 28 days in given month.");   
} else {
  console.log("Please give number representing month (1-12)");
}