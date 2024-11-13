import { useState } from 'react'
import './App.css'

import Card from './Card'

function App() {
    const [items, setArray] = useState([
        {name: "apple", id: crypto.randomUUID(), src: ""},
        {name: "banana", id: crypto.randomUUID(), src: ""},
        {name: "kiwi", id: crypto.randomUUID(), src: ""},
        {name: "grape", id: crypto.randomUUID(), src: ""},
        {name: "strawberry", id: crypto.randomUUID(), src: ""},
        {name: "peach", id: crypto.randomUUID(), src: ""},
    ]);

    const [clickedItems, setClickedItems] = useState(new Set());

    function shuffleArray() {
        const nextArr = [...items];
        for (let i = nextArr.length - 1; i >= 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = nextArr[i];
            nextArr[i] = nextArr[j];
            nextArr[j] = temp;
        }
        setArray(nextArr);
    }

    function handleCardClick(id) {
        // console.log(clicked ? "ALREADY CLICKED" : "NOT CLICKED");
        if (clickedItems.has(id)) {
            //reset score
            console.log("game over")
            setClickedItems(new Set());
        }
        else {
            //increase score
            setClickedItems((old) => new Set(old).add(id));
            console.log("continue")
        }
        shuffleArray()
    }

    return (
        <>
            {/* <button onClick={shuffleArray}>Shuffle</button> */}
            <div id="board">
                {items.map((item) => {
                    return <Card name={item.name} key={item.id} src={item.src} onClick={() => handleCardClick(item.id)}/>
                })}
            </div>
            <div>Score: {clickedItems.size}</div>
        </>
    )
}

export default App