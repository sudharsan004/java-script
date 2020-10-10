var iphone ={
    model : 'SE 2020',
    yearReleased : 2020,
    price : 40000,
    company : 'apple',
    version : 1,
    ram : '4gb'
}

console.log(iphone.model);

// this will give a wierd error bcz it should be passed as string 
// console.log(iphone[model]); 
console.log(iphone["model"]);

console.log(iphone.price);
iphone.price = 35000;
console.log(iphone.price);

console.table(iphone);