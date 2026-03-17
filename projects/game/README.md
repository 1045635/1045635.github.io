# Scissor Seven

## Setting
This game is based off of the Scissor Seven Universe. I incorporated the main islands used in the show: Chicken Island, Xuanwu, and Stan Country.

## Map

The map consists of Chicken Island, Xuanwu, and Stan Country. Chicken Island is the default for traversing between the islands. Xuanwu also has two seperate places that the player can enter: 'center' and 'Assassin headquarter'. Stan country, however, has a mandatory encounter where the player can flee back to Chicken Island if they wish.

```mermaid
graph TD;
Center <--> Xuanwu;
Assassin Headquarter <--> Xuanwu;
Xuanwu <--> Chicken Island;
Stan Country <--> Chicken Island;
```





## Story
You start as the main character seven who aspires to be the top assassin. In his journey, he starts at Chicken Island (his home) and ventures to the following islands: Stan Country and Xuanwu. During his encounters on the islands he fights various foes to raise his rank.


## Global Variables

The most important variables are the enemy's health since it tracks and essentially operates the fights. These are boolean variables that track whether or not the enemy's health is above 0. If not, it plays the fight sequence (while also displaying the updated health after each attack). When it reaches 0 for both opponents, your rank will drop to 0, ending the game. Another variable that is important is the rank variable which determines when the game ends. It also serves as a progress point for the player by indicating how many more places they need to go up to reach the position of top assassin.
