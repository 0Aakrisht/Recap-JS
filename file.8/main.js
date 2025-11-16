// 8. Check if a user is allowed access:

// age ≥ 18

// OR has parental permission

let age = number(prompt("Enter your age \n"));
let permission = prompt("Do you have permission").toLocaleLowerCase();

if(age >= 18 )
{
    console.log("You can");
}
else 
{
    if(permission == "yes")
    {
        console.log("you can");
        
    }
    else
    {
        console.log("You cant");
        
    }
}