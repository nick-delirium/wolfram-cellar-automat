run 
```node wolframCellar.js <n>``` 
where <n> is any number between 0 and 255.

### Elementary cellular automata
The simplest nontrivial cellular automaton would be one-dimensional, with two possible states per cell, and a cell's neighbors defined as the adjacent cells on either side of it. A cell and its two neighbors form a neighborhood of 3 cells, so there are 23 = 8 possible patterns for a neighborhood. A rule consists of deciding, for each pattern, whether the cell will be a 1 or a 0 in the next generation. There are then 28 = 256 possible rules.

These 256 cellular automata are generally referred to by their Wolfram code, a standard naming convention invented by Wolfram that gives each rule a number from 0 to 255. A number of papers have analyzed and compared these 256 cellular automata. The rule 30 and rule 110 cellular automata are particularly interesting. The images below show the history of each when the starting configuration consists of a 1 (at the top of each image) surrounded by 0s. Each row of pixels represents a generation in the history of the automaton, with t=0 being the top row. Each pixel is colored white for 0 and black for 1.