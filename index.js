const characters = [
    {
        title: 'Ninja',
        emoji: '🥷',
        powers: ['agility', 'stealth', 'aggression'],
    },
    {
        title: 'Sorcerer',
        emoji: '🧙',
        powers: ['magic', 'invisibility', 'necromancy'],
    },
    {
        title: 'Ogre',
        emoji: '👹',
        powers: ['power', 'stamina', 'shapeshifting'],
    },
    {
        title: 'Unicorn',
        emoji: '🦄',
        powers: [ 'flight', 'power', 'purity'],
    }
]



for ( let character of characters){
    console.log(character.title, "has powers : ", character.powers)
}


const numbers = [10, 15, 22, 33, 40, 7, 8];

let sum = 0;

// Your code here

for(number of numbers){
    if(number%2 === 0){
        sum += number
    }
    
}

console.log("Sum of even numbers:", sum);

// for in loop.

console.log("The for in Loop");

for(key in characters){
    console.log(characters[key]);
}

// for Each Method

// 1. Nest a forEach to log out each individual
//    power in each characters powers array.

const powers = characters.forEach(character => {
    character.powers.forEach(power => {
        console.log(power);
    })
})

characters.forEach((character,index) => {
    console.log(index, character.title)
})