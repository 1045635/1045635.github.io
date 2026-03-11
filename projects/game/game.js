let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

let rank=17369

//If you need, add any "helper" functions here


//Make one function for each location
function locationA() {
    clear();
    print("\nYou are on Chicken Island!");
    print("\nYour current rank is:" + rank);
    print("\nJourney to one of the following islands to defeat opponents and make your way up the ranks! Say one of these choices:" +
        "\n\tXuanwu" + "\n \tStan Country");
    
    function processInput(input){
        if (input.toLowerCase() === "xuanwu") {
            locationB();
}else if(input.toLowerCase() === "stan country"){
locationC();
        }else {
            stayHere();
            waitThenCall(locationA);
        }
    }
    waitForInput(processInput);
}

function locationB() {
    clear();
    print("\nWelcome to Xuanwu..");
    print("\nThis area feels familiar, for reasons unknown");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tChicken Island");
    
    function processInput(input){
        if (input.toLowerCase() === "chicken island") {
            locationA();
        } else {
            stayHere();
            waitThenCall(locationB);
        }
    }
    waitForInput(processInput);
}

function locationC(){
clear();
print("\nYou are in Stan Country");
print("\nYou're greeted by a strange man in a robe and underwear, pointing a weapon at you !!");
print("\nWhat do you do next?:" + "\n\tFight Him" + "\n\tTalk it out");

function processInput(input){
if (input.toLowerCase() === "fight him"){
print("\nsdksdf");
} else if(input.toLowerCase() === "talk it out"){
print("\nBefore you can say anything, he fires at you! You have no choice but to fight now.");
print("TIP: Check your inventory by typing 'inventory'!")
if (input.toLowerCase() === "inventory"){
print("Inventory:" + "\nScissors" + "\nThousand Demon Dagger")
}
} else {
stayHere();
waitThenCall(locationC);
}
}
waitForInput(processInput);
}

function start(){
    print("Welcome to your journey to become the world's best assassin! Press any key to start");
print("TIP: type 'Daibo Help!' for more information about an area!");
start();
    function processInput(input){
            locationA();
    }
    waitForInput(processInput);
}
