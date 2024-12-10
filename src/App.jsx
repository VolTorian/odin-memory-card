import { useEffect, useState } from 'react'
import './App.css'

import Card from './Card'

function App() {
    const [items, setArray] = useState([]);
    const [clickedItems, setClickedItems] = useState(new Set());

    useEffect(() => {
        fetchPokemon();
    }, []);

    async function fetchPokemon() {
        const pokemonList = []
        const numbers = generateUniqueNumbers();
        for (let i = 0; i < numbers.length; i++) {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${numbers[i]}`);
            const data = await response.json();
            const pokemon = {name: data.name, id: data.id, src: data.sprites.front_default};

            pokemonList.push(pokemon);
        }
        setArray(pokemonList);
    }

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
        if (clickedItems.has(id)) {
            setClickedItems(new Set());
        }
        else {
            setClickedItems((old) => new Set(old).add(id));
        }
        shuffleArray()
    }

    return (
        <>
            <div id="score">Score: {clickedItems.size}</div>
            <br />
            <div id="board">
                {items.map((item) => {
                    return <Card name={item.name} key={item.id} src={item.src} onClick={() => handleCardClick(item.id)}/>
                })}
            </div>
        </>
    )
}

export default App

function generateUniqueNumbers() {
    const numbers = new Set();
    while (numbers.size < 14) {
        numbers.add(Math.floor((Math.random() * 1024) + 1))
    }
    return [...numbers];
}