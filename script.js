var age=prompt("Youre age","Please enter your age");
if(age>18){
console.log("user can enter");
var eatMeat=prompt("Do you eat meat?","enter yes/no");
if(eatMeat.toLowerCase().trim()=="yes"){
    var hungry=prompt("Are you hungry","ener yes/no");
    if (hungry.toLocaleLowerCase().trim()=="yes")
    {
        console.log("שניצל ואורז");
    }
    else{
        console.log("שניצל");
    }
}
else{
    console.log("סלט ופסטה");
}
}
else{
    console.log("user can't enter");
}


var myAge=prompt("My age is:","23");
var myBFFage=prompt("my friend age is:", "please enter youre friend age");
var sum=parseInt(myAge)+parseInt(myBFFage);
if(sum<=100)
{
    console.log("Welcom to the party!");
}
else{
    ("sorry!, mayby is not yours palce");
}