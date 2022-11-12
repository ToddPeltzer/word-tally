import React from 'react';

function main(props) {

    const test = "Todd todd todd ally ally todd! penny seta seta23 hi hey be a i"

    let newArray = [];

    function wordCount(e) {

        let noSymbols = e.toLowerCase().replace(/[^a-z ]/g, "").split(" ");
        let approvedWords = [];
        let letterCount = 2;
    
        // filter words to get anything with 2 or more letters
        approvedWords = noSymbols.filter(word => word.length >= letterCount);
    
        let wordLookup = {};
    
        for (let i = 0; i < approvedWords.length; i++) {
            if (!wordLookup[approvedWords[i]]) {
                wordLookup[approvedWords[i]] = 1;
                continue    
            }
            wordLookup[approvedWords[i]]++
        }
        
        for (const [key, value] of Object.entries(wordLookup)) {
            newArray.push({word: key, count: value});
        }
    
        return newArray
    
    }

    wordCount(test)

    return (
        <div>
            {newArray[0].word}
        </div>
    );
}

export default main;