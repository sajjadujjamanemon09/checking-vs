const lyrics = 'tumi bondhu kala PAKhi ami jeno ki. bosonto kale tomay bolte pari ni';

const searchString = 'pakHi'
// const doesExist = lyrics.includes('pakhi');//
// const doesExist = lyrics.includes('pakHI');//
// const doesExist = lyrics.includes(searchString);//

const lyricsLowerCase = lyrics.toLowerCase();
// const doesExist = lyricsLowerCase.includes(searchString);//
const searchStringLower = searchString.toLowerCase();

const doesExist = lyricsLowerCase.includes(searchStringLower);
// console.log(doesExist);

const doesExistOneLine = lyrics.toLowerCase().includes(searchStringLower.toLowerCase());
// console.log(doesExistOneLine)

// ----------------------------------------------------------------------------------------------------


//  Index OF
console.log(lyrics.indexOf('kailla'))
console.log(lyrics.indexOf('tumi'))
//

if (lyrics.indexOf('kala') !== -1){
    console.log('exists inside the string');   
}
else{
    console.log('can not find it');
}


// startsWith
console.log(lyrics.startsWith('tumi'))

// endsWith
const fileName = 'mybiodata.pdf';
const otherFile = 'mypic.png';
console.log(fileName.endsWith('pdf'));
