const lyrics = 'tumi bondhu kala PAKhi ami jeno ki. bosonto kale tomay bolte pari ni. sada sada kala kala rong jomeche sada kala';

const parts = lyrics.split(' ')
// console.log(parts);

const sentence = lyrics.split('.')
// console.log(sentence);

const alphabet = lyrics.split('');
// console.log(alphabet);

// -----------------------------------------------------------------\
// slice

const partial = lyrics.slice(5, 8);
console.log(partial);

const partial2 = lyrics.substring(5, 8);
console.log(partial2);

// ---------------------------------------------------------------------
// join

const items = [
    'tumi bondhu kala PAKhi ami jeno ki', 
    'bosonto kale tomay bolte pari ni',
    'sada sada kala kala rong jomeche sada kala'
];

const newSong = items.join('+ ');
console.log(newSong);