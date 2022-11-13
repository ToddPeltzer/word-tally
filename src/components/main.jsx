import React from 'react';
import './styles/main.css';

function main() {

    // const test = "Todd todd todd ally ally todd! penny seta seta23 hi hey be a i todd todd Todd todd todd ally ally todd! penny seta seta23 hi hey be a i todd todd "
    const test2 = `They had no proof. He knew that they knew he had done it but they didn't have any proof. It was a huge distinction and it was the difference between him keeping his freedom or being locked away for decades. They continued to question him, probing him for information that they could use against him or find the proof they needed to put him away. He smiled and continued to block their every inquiry by feigning his innocence for a crime they all knew he committed.
    What were the chances? It would have to be a lot more than 100 to 1. It was likely even more than 1,000 to 1. The more he thought about it, the odds of it happening had to be more than 10,000 to 1 and even 100,000 to 1. People often threw around the chances of something happening as being 1,000,000 to 1 as an exaggeration of an unlikely event, but he could see that they may actually be accurate in this situation. Whatever the odds of it happening, he knew they were big. What he didn't know was whether this happening was lucky or unlucky.`

    //final outcome will be stored here
    let answerArray = [];
    //minimum length of words being used
    let letterCount = 2;
    //default font size in rem
    let minimumFontSize = 1;

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
            answerArray.push({word: key, count: value});
        }
    
        return answerArray
    
    }

    wordCount(test2)

    return (
        <div>
            <ul className='list-container'>
                {answerArray.map(object => {
                    let newFontSize = object.count+minimumFontSize;
                    let color = "";
                        function fontColor(count) {
                        if (count < 5) {
                            color = 'green';
                        } else if (count < 10) {
                            color = 'orange';
                        } else {
                            color = 'red';
                        }
                        }
                        fontColor(object.count);
                        const fontStyle = {
                        fontSize: `${newFontSize}rem`,
                        color: color
                        }
                    return (
                        <li className="word-container" style={fontStyle}>
                            {object.word}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default main;