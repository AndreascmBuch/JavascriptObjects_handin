// 1 - What to wear
// Create a function (that you have to name) that has temperature as parameter.
// Based on the temperature it should return a string with what the user should wear.
function clothesToWear(temperature) {
    if (temperature > 20) {
        console.log("Jacket off")
    } else if (temperature > 15) {
        console.log("Jacket on")
    } else if (temperature >= 0) {
        console.log("I travel to spain")
    }
}

// Here you can change the temperatur:
console.log(clothesToWear(0));

// 2 - Dice game
// Write a function that simulates a dice roll.
function rollTheDice3Times(times) {
    // I let the jackpot have a start value on zero
    let jackpot = 0;
    // Here are the loop that have start value on 0, and continues to reach the quantity of times:
    for (let i = 0; i < times; i++) {
        // I let roll be the dice
        let roll = Math.floor((Math.random() * 6) + 1)
        // The conditions for when the dice hits 6 it will log "You just hits 6"
        // and jackpot will be increased by 1
        if (roll === 6) {
            console.log("You just hit 6")
            jackpot++;
        }
    }
    // An extra condition if jackpot = times it will log Jackpot
    if (jackpot === times) {
        console.log("Jackpot");
    }
}

// Here you change the times of rolls
rollTheDice3Times(3);

// 3 - Build a sentiment analyzer
// Create a function that takes a string as a parameter. Calling the function will return an object with score, positiveWords and negativeWords.

function analyzeSentiment(sentence) {
    // Firstly I define how positive and negative words in an array
    const positiveWords = ["happy", "Good", "awesome", "beautiful", "amazing"];
    const negativeWords = ["bad", "awful", "boring", "dishonest", "cold-hearted"];
    // Afterward I give the parameter two conditions on the input:
    // 1. If the sentence have used uppercase on some words, then it will make them lowercase. "toLowercase()"
    // 2. The sentence will be split by space. "split(/\s+/)"
    const words = sentence.toLowerCase().split(/\s+/);
// Let score to be zero, and create two variable for positive-and negative words
    let score = 0;
    const foundPositiveWords = [];
    const foundNegativeWords = [];
    // Here will the code increase or decrease score by positiv or negativ
    // Positiv or negativ words will be inserted to either foundPositivWord or foundNegativWord
    words.forEach(words => {
        if (positiveWords.includes(words)) {
            score++;
            foundPositiveWords.push(words);
        } else if (negativeWords.includes(words)) {
            score--;
            foundNegativeWords.push(words);
        }
    });
// create an array that contains the scorer, positiv words and negativ words
    const result = {
        score: score,
        positiveWords: foundPositiveWords,
        negativeWords: foundNegativeWords
    };
// return the output
    return result;
}

console.log(analyzeSentiment("I have a bad day"))