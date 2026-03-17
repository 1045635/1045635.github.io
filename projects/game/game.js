let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

let rank=17369
stanHealth=50
leaderHealth=100

//If you need, add any "helper" functions here


//Make one function for each location
function locationA() {
    clear();
    print("\nYou are on Chicken Island!");
    print("\nYour current assassin rank is:" + rank);
    print("\nJourney to one of the following islands to defeat opponents and make your way up the ranks! Say one of these choices:" +
        "\n\tXuanwu" + "\n \tStan Country");
    
    function processInput(input){
        if (input.toLowerCase() === "xuanwu") {
            locationB();
}else if(input.toLowerCase() === "stan country"){
locationC();
}else if(input.toLowerCase() === "daibo help!"){
print("Chicken Island: You own a barbershop on this small island with your friends Dai Bo and Xiaofei. You've only lived here for a few years, but you can't remember anything from before. Type one of the areas above to travel and find out more about your origins.");
        }else {
            stayHere();
            waitThenCall(locationA);
        }
if(rank === 0){
print("Congrats on becoming the number one assassin!");
print("Game Over.") 
   }
    waitForInput(processInput);
}

function locationB() {
    clear();
    print("\nWelcome to Xuanwu..");
    print("\nThis area feels familiar, for reasons unknown");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tChicken Island" + "\n\tcenter" + "\n\tAssassin Headquarters");
    
    function processInput(input){
        if (input.toLowerCase() === "chicken island") {
            locationA();
}else if(input.toLowerCase() === "center"){
print("You enjoy the scenery and have some snacks with Dai bo and Xiaofei.");
waitThenCall(locationB);
}else if(input.toLowerCase()=== "assassin headquarters"){
print("Upon arrival, you see the leader of Xuanwu. In his hand he holds a strange token with the number '7' engraved." + "\nhe reveals your identity; the number one assassin in Xuanwu." + "\nHowever, in the past you've betrayed the country, so you're currently deemed an enemy.")
print("He lunges at you with ferocious speed! Quick, get ready for battle!");

        } else {
            stayHere();
            waitThenCall(locationB);
        }
    }
    waitForInput(processInput);
}

function fightLeader(input){
while(leaderHealth > 0){
print("\nChoose One of the following attacks: " +" \nstab" + "\nslash")
if(input.toLowerCase() === "stab"){
leaderHealth=leaderHealth-40;
print("Enemy's Current Health: " + str(leaderHealth) + ")");
fightLeader(input);
}else if(input.toLowerCase() ==="slash"){
leaderHealth=leaderHealth-30;
print("Enemy's Current Health: " + str(leaderHealth) + ")");
fightLeader(input);
} else{
stayHere();
waitThenCall(fightLeader);
}
}
if(leaderHealth <= 0){
rank = rank - 9999
print("Congrats! You beeat the Prince of Stan, your rank has been boosted.");
print("Current rank: " + str(rank) + ")");
}
if(rank === 0){
print("Return to Chicken Island");
}
}
waitForInput(processInput);
}

function locationC(){
clear();
print("\nYou are in Stan Country");
print("\nYou're greeted by a strange man in a robe and underwear, pointing a weapon at you.. Judging from his expression he recognizes you.");
print("\nWhat do you do next?:" + "\n\tFight Him" + "\n\tTalk to him");

function fightStan(input){
while(stanHealth > 0);
print("\nChoose one of the following attacks: " + "\nstab" + "\nslash")
if(input.toLowerCase() ==="stab"){
stanHealth= stanHealth-30;
print("Enemy's Current Health: " + str(stanHealth) + ")");
fightStan(input);
}else if(input.toLowerCase()==="slash"){
stanHealth=stanHealth-20;
print("Enemy's Current Health: " + str(stanHealth) + ")");
fightStan(input);
} else{
stayHere();
waitThenCall(fightStan);
}
}
if(stanHealth<= 0){
rank= rank-7369
print("Congrats! You beat the Prince of Stan, your rank has been boosted.");
print("Current rank: " + str(rank) + ")");
}
if(rank === 0){
print("Return to Chicken Island");
}
waitForInput(processInput);
}

function processInput(input){
if (input.toLowerCase() === "fight him"){
fightStan(input);
}else if(input.toLowerCase() === "daibo help!"){
print("Stan Country: Home to the most technologically advanced nation who rely on AI, robots, and energy weapons; ruled by Prince Stan. Their lifestyle is significantly different from the residents of Xuanwu, making them enemies.");
} else if(input.toLowerCase() === "talk to him"){
print("\nBefore you can say anything, he fires at you! You have no choice but to fight now.");
print("Choose one of the options: " + "\ncontinue to fight" +  "\nflee")
} else if(input.toLowerCase() === "continue to fight"){
fightStan(input);
}else if(input.toLowerCase()==="flee"){
locationA();
} else {
stayHere();
waitThenCall(locationC);
}
waitForInput(processInput);
}

function start(){
    print("Welcome to your journey to become the world's best assassin! Press any key to start");
print("TIP: type 'Daibo Help!' for more information about an area!");
    function processInput(input){
            locationA();
    }
    waitForInput(processInput);
}
