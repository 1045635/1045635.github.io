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
        } else {
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

function start(){
    print("Welcome to your journey to become the world's best assassin! Press any key to start");

    function processInput(input){
            locationA();
    }
    waitForInput(processInput);
}

