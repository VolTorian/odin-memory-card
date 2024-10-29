import { useState } from 'react'
import './App.css'

import Card from './Card'

function App() {
    const items = [
        {name: "apple", id: crypto.randomUUID(), src: ""},
        {name: "banana", id: crypto.randomUUID(), src: ""},
        {name: "kiwi", id: crypto.randomUUID(), src: ""},
        {name: "grape", id: crypto.randomUUID(), src: ""},
        {name: "strawberry", id: crypto.randomUUID(), src: ""},
        {name: "peach", id: crypto.randomUUID(), src: ""},
    ]

    return (
        <>
            <div id="board">
                {items.map((item) => {
                    return <Card name={item.name} key={item.id} src={item.src}/>
                })}
            </div>
        </>
    )
}

export default App
