import React from 'react';

function main() {

    const test = "Todd todd todd ally ally todd! penny seta seta23 hi hey be a i"
    
    //final outcome will be stored here
    let newArray = [];
    //minimum length of words being used
    let letterCount = 2;

    function wordCount(e) {
        //finds anything that is not a letter and gets rid of them
        let noSymbols = e.toLowerCase().replace(/[^a-z ]/g, "").split(" ");
        let approvedWords = [];
    
        // filter words to get anything meeting letterCount requirement
        approvedWords = noSymbols.filter(word => word.length >= letterCount);
        
        // creating an object to store the word and count into
        let wordLookup = {};
    
        
        for (let i = 0; i < approvedWords.length; i++) {
            // if word is not in the object
            if (!wordLookup[approvedWords[i]]) {
                // adding the word as the key and then 1 as the initial value
                wordLookup[approvedWords[i]] = 1;
                continue    
            }
            //if word is existing then add a value
            wordLookup[approvedWords[i]]++
        }
        
        // destructure and add to answer array
        for (const [key, value] of Object.entries(wordLookup)) {
            newArray.push({word: key, count: value});
        }
    
        return newArray
    
    }

    wordCount(test)

    return (
        <div>
            <ul>
                {newArray.map(object => {
                    let newFontSize = object.count+14;
                    const fontStyle = {
                        fontSize: `${newFontSize}px`
                     }
                    return (
                        <li style={fontStyle}>
                            {object.word} - {object.count}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default main;