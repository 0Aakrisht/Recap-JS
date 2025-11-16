// Array Explorer
// Loop through an array using all 3 types: for, for...of, for...in.

//for-loop
let array = [0,1,2,3,4,5,6,7,8,9];

for(i = 0 ; i < array.length ; i++)
{
    console.log(array);
}

//for...of-loop
for(let value of array)
{
    console.log(value);  
}

//for...in-Loop
for(let value in array)
{
    console.log(array[value]);
    
}