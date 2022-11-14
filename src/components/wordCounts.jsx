import React from 'react';
import './styles/wordCount.css';

function main() {

    let paragraphText = `There was something beautiful in his hate. It wasn't the hate itself as it was a disgusting display of racism and intolerance. It was what propelled the hate and the fact that although he had this hate, he didn't understand where it came from. It was at that moment that she realized that there was hope in changing him.
    Life isn't always beautiful. That was a lesson that Dan was learning. He also realized that life wasn't easy. This had come as a shock since he had lived a charmed life. He hated that this was the truth and he struggled to be happy knowing that his assumptions weren't correct. He wouldn't realize until much later in life that the difficult obstacles he was facing that were taking away the beauty in his life at this moment would ultimately make his life much more beautiful. All he knew was that at this moment was that life isn't always beautiful.`;
    //final outcome will be stored here
    let answerArray = [];
    //minimum length of words being used
    const letterCount = 3;
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