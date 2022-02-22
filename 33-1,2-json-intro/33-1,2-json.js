//33.1-search about api from google.

//33.2javaScript object notation()
//in short: JSON.
//========================================================
//notation:how to write a note

//an object
const user = {id: 11, name: "Gorib Amir", job: "actor"};
//stringify convert ja value(array/object) to a JSON file
const stringified = JSON.stringify(user);
// console.log(stringified);
// console.log(user);

//complex object
const shop = {
    name: "Alina Store",
    address: "Ranbir Road",
    profit: 1500,
    products:["loptop","moabile", "pepsi"],
    isExpensive: false
}

//converting object to stringify
const shopStringiFied = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringiFied);

//converting stringify to object
const converted = JSON.parse(shopStringiFied);
console.log(converted);

////when call a data, it comes as a json file.
//from back-end, file are come as stringify, the data have to access by JSON.parse.

