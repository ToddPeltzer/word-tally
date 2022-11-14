import React from 'react';
import './styles/wordCount.css';

function main() {

    let paragraphText = "I inadvertently went to See's Candy last week (I was in the mall looking for phone repair), and as it turns out, See's Candy now charges a dollar -- a full dollar -- for even the simplest of their wee confection offerings. I bought two chocolate lollipops and two chocolate-caramel-almond things. The total cost was four-something. I mean, the candies were tasty and all, but let's be real: A Snickers bar is fifty cents. After this dollar-per-candy revelation, I may not find myself wandering dreamily back into a See's Candy any time soon.";
    //final outcome will be stored here
    let answerArray = [];
    //minimum length of words being used
    const letterCount = 2;
    //default font size in 'rem'
    const minimumFontSize = 1;
    const manyColor = 'red';
    const fewColor = 'orange';
    const littleColor = 'green';

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

    wordCount(paragraphText)

    // if (!paragraphText) {
    //     return null
    // } else 
    return (
        <div>
            <p>{paragraphText}</p>
            <ul className='list-container'>
                {answerArray.map(object => {
                    let newFontSize = object.count+minimumFontSize;
                    let color = "";
                        function fontColor(count) {
                        if (count < 5) {
                            color = littleColor;
                        } else if (count < 10) {
                            color = fewColor;
                        } else {
                            color = manyColor;
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