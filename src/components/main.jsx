import React from 'react';
import WordCount from './wordCounts';
import './styles/main.css';

function main() {

    // const element = document.querySelector("p").innerHTML;
    // console.log(element)
    
    
    return (
        <div>
            {/* <p>
            They had no proof. He knew that they knew he had done it but they didn't have any proof. It was a huge distinction and it was the difference between him keeping his freedom or being locked away for decades. They continued to question him, probing him for information that they could use against him or find the proof they needed to put him away. He smiled and continued to block their every inquiry by feigning his innocence for a crime they all knew he committed. What were the chances? It would have to be a lot more than 100 to 1. It was likely even more than 1,000 to 1. The more he thought about it, the odds of it happening had to be more than 10,000 to 1 and even 100,000 to 1. People often threw around the chances of something happening as being 1,000,000 to 1 as an exaggeration of an unlikely event, but he could see that they may actually be accurate in this situation. Whatever the odds of it happening, he knew they were big. What he didn't know was whether this happening was lucky or unlucky.
            </p> */}
            <div>
                <WordCount 
                    // paragraphText = {element}
                />
            </div>
        </div>
    );
}

export default main;