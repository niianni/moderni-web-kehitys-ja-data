let voters = [
    {name: 'Bob' , age: 30, voted: true},
    {name: 'Jake' , age: 32, voted: true},
    {name: 'Kate' , age: 25, voted: false},
    {name: 'Sam' , age: 20, voted: false},
    {name: 'Phil' , age: 21, voted: true},
    {name: 'Ed' , age: 55, voted: true},
    {name: 'Tami' , age: 54, voted: true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
    let youngVote = 0;
    let midVote = 0;
    let oldVote = 0;
    let youngPeople = 0;
    let midPeople = 0;
    let oldPeople = 0;
    
    arr.reduce( (acc, cur) => {
        if ( cur.age >= 18 && cur.age <= 25 ) {
            youngPeople++;
            if ( cur.voted ) {
                youngVote++;
            }
        }
        if ( cur.age > 25 && cur.age <= 35 ) {
            midPeople++;
            if ( cur.voted ) {
                midVote++;
            }
        }
        if ( cur.age > 35 && cur.age <= 55 ) {
            oldPeople++;
            if ( cur.voted ) {
                oldVote++;
            }
        }
    } );
    return (`numYoungVotes: ${youngVote}
numYoungPeople: ${youngPeople},
numMidVotes: ${midVote},
numMidsPeople: ${midPeople},
numOldVotes: ${oldVote},
numOldsPeople: ${oldPeople} `);
}
    

console.log(voterResults(voters)); 
