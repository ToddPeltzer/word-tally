import React from 'react';
import './styles/wordCount.css';
import { Route } from 'react-router-dom';
import Test from "./test"


function main() {

    let paragraphText1 = `At Scorpion, we have the technology to connect all of your marketing and show you the results you expect from the money you spend. From our research and customer management software to our artificial intelligence-led search engine products, we have the latest technology to grow your business.`;
    let paragraphText2 = `2Once the technology is in place, our team of specialists will partner with you along the way to handle all of the marketing for your business, so you can focus on providing a great experience to your customers.`;

    let textInput = `${paragraphText1} ${paragraphText2}`;
    console.log(textInput)

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

    wordCount(textInput)

    return (
        <div>
            <p>{paragraphText1}</p>
            <p>{paragraphText2}</p>
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