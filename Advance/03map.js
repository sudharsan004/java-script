var myMap = new Map();

myMap.set(1,'one flower');
myMap.set(2,'two flower');
myMap.set(3,'three flower');
myMap.set(4,'four flower');

console.log(myMap);


// For each loop method of maps iterates through the values first and keys second.
myMap.forEach((value,key)=>console.log(`The value: ${value} and key: ${key}`));

// but the "for of" loop iterates through the keys first and then the value.
console.log('\n');

for (const [keys,values]  of myMap) {
    console.log(`the key: ${keys} and value: ${values}`);
}

myMap.delete(3);
console.log(myMap);

