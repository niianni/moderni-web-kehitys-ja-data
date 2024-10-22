import axios from 'axios';

const getData = async function(searchWord) {
    let allData = await axios.get(`https://adventureworksforbuuttiedu.azurewebsites.net/${searchWord}`);
    return allData.data;
}

export let customers = await getData('customers');
export let products = await getData('products');
