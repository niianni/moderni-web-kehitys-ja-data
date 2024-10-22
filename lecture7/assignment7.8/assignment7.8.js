import axios from 'axios';

//Get all data
const getAllData = async function() {
    let allData = await axios.get('https://jsonplaceholder.typicode.com/todos/');
    return allData.data;
};
let allData = await getAllData();
//console.log(allData);

//Get all user data
const getAllUserData = async function() {
    let allUserData = await axios.get(`https://jsonplaceholder.typicode.com/users/`);
    return allUserData.data;
};
const allUserData = await getAllUserData();
//console.log(allUserData);

//task 4
allUserData.forEach((user) => {
    allData.map((post) => {
        if (post.userId === user.id) {
            post.user = user;
        }
    });
    allData.map((post) => {
        if (post.userId === user.id) {
            delete post.user.id;
            delete post.user.address;
            delete post.user.phone;
            delete post.user.website;
            delete post.user.company;
        }
    });
});

console.log(allData);

//fetch and console log one user
/*
const getUserData = async function(id) {
    let userData = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return userData.data;
};
const userData = await getUserData(userId);
console.log(userData);
*/