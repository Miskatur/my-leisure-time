import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div className='QandA'>
            <h1>Here are some Frequanntly Asked Question</h1>
            <div className='question'>
                <h2>How does React work?</h2>
                <p><strong>Ans: </strong> ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>
            <div className="question">
                <h2>What is the difference between Props and State?</h2>
                <p>
                    <strong>Ans: </strong> Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this.setState property is used to update the state values in the component.
                </p>
            </div>
            <div className="question">
                <h2>What are the uses of UseEffect in React?</h2>
                <p><strong>Ans: </strong>The useEffect Hook lets you run additional code after React has already updated the DOM.

                    Here are some uses of UseEffect :
                    <ul>
                        <li>Add an event listener for a button.</li>
                        <li> Data fetching from API when component mounts.</li>
                        <li>Perform an action when state or props change.</li>
                        <li> Clean up event listeners when the component unmounts.</li>
                    </ul>



                </p>
            </div>
        </div>
    );
};

export default Question;