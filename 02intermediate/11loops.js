// let - a variable defined is only accessed inside current scope then it vanishes eg: let i =0 in a for loop

var myArray = [
    'Tamil Nadu',
    'Delhi',
    'Mumbai',
    true,
    2020,
    'red',
    'pink'
]

for (let i=0; i < myArray.length; i++){
    // console.log (`${i} th place of myArray is ${myArray[i]}`);   
    // print only string 
    // continue checks the condition if it passed continues the loop without executing the rest of the loop
    if (typeof myArray[i] !== 'string' ) continue;
    //console.log (`${i} th place of myArray is ${myArray[i]}`);
}

for (let i=0; i < myArray.length; i++){
    // break checks the condition if it passed continues the loop will terminate
    if (typeof myArray[i] !== 'string' ) break;
    //console.log (`${i} th place of myArray is ${myArray[i]}`);

}

let i=0;
while(i<5){
    // console.log (`${i} th place of myArray is ${myArray[i]}`);
    i++;
}


// do while runs atleast once even if condition fails
i =10;
do{
    console.log (`${i} th place of myArray is ${myArray[i]}`); 
    i++;
}
while(i<5)