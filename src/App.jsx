import { useState } from 'react'
import './App.css'

import Card from './Card'

function App() {
    const initialItems = [
        {name: "apple", id: crypto.randomUUID(), src: ""},
        {name: "banana", id: crypto.randomUUID(), src: ""},
        {name: "kiwi", id: crypto.randomUUID(), src: ""},
        {name: "grape", id: crypto.randomUUID(), src: ""},
        {name: "strawberry", id: crypto.randomUUID(), src: ""},
        {name: "peach", id: crypto.randomUUID(), src: ""},
    ]
    const [items, setArray] = useState(initialItems);

    function shuffleArray() {
        const nextArr = [...initialItems];
        for (let i = nextArr.length - 1; i >= 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = nextArr[i];
            nextArr[i] = nextArr[j];
            nextArr[j] = temp;
        }
        setArray(nextArr);
    }

    return (
        <>
            <button onClick={shuffleArray}>Shuffle</button>
            <div id="board">
                {items.map((item) => {
                    return <Card name={item.name} key={item.id} src={item.src}/>
                })}
            </div>
        </>
    )
}

export default App