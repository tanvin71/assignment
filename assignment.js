// Problem 1

function inchToFeet(inch){
    let feet = inch/ 12
    return feet
}
let resultFeet = inchToFeet(36)
console.log(resultFeet)


function feetToMile(number){
    var mile= number() / 5280;
    number()
    return mile
}
let resultMile = feetToMile(inchToFeet);
console.log(resultMile)



// Problem 2

function woodCalculator(chair, table, bed){
    let chairWood = chair * 1;
    let tableWood = table * 3;
    let bedWood = bed * 5;
    
    let totalWood = chairWood + tableWood + bedWood;
    return totalWood;

}

var totalWoodAmount = woodCalculator(5, 2, 1)
console.log(totalWoodAmount);

//problem 3
function brickCalculator(storied) {
    if (storied <= 10){
        var height = 15;
        const bricks= 1000;
        var totalBricks = storied * height * bricks;
        // return totalBricks;
        
    }
    
    else if (storied > 10 && storied <= 20){
        var height1 = 12;
        const bricks= 1000;
        var moreBricks = (storied * height1 * bricks) - totalBricks;
        var totalBricks1 = totalBricks + moreBricks;
        // return totalBricks1;

    }
    else if (storied > 22) {
        const bricks= 1000;
        var height2 = 10;
        var fewMoreBricks = (storied * height2 * bricks) - moreBricks;
        var totalBricks2 = totalBricks + totalBricks1 + fewMoreBricks;
        return totalBricks2;
    }
    
}

var bricks = brickCalculator(15);
console.log(bricks);


//Problem 4 

 


var  friendsName = ["Jahed", "Fahim", "Rahim", "Raju","Azad", "ami"];
var min = friendsName[1];
function tinyFriend(size) {
    for (var i = 1; i < size.length; i++) {
        var element = friendsName[i];
        if(element > min){
            min = element;
        }
    }
    return tinyFriend;
}
var result = tinyFriend(friendsName);

console.log("Tiny friend is :", min);



//Problem 5

let isGoingOffice = false;
let isMeat = false;

if(isGoingOffice == true){
    console.log('Take an umbrella to go office')
}
else {
    if(isMeat== true){
        console.log('Cook some meat')
    }
    else{
        console.log('Eat with egg fry')
    }
}