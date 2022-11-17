import React, {useState} from 'react';
import Counter from './counter';

const CountersList = () => {
    const initialState = [
        { id: 0, value: 0, name:"Ненужная вещь"}, 
        { id: 1, value: 4, name:"Ложка"},
        { id: 2, value: 0, name:"Вилка"},
        { id: 3, value: 0, name:"Тарелка"},
        { id: 4, value: 0, name:"Набор минималиста"},
    ]
    const [counters, setCounters] = useState(initialState)

    const handleDelete = (id) => {
        const newCounters = counters.filter(c => c.id !== id)
        setCounters(newCounters)
    }

    const handleIncrement = (counter) => {
        const newValue = counters.map((c) => {
                if (c.id===counter.id) {
                    c.value += 1
                }
                return c
        })
                
        setCounters(newValue)
    }

    const handleDecrement = (counter) => {
        const newValue = counters.map((c) => {
            c.id===counter.id? c.value -= 1 : c.value=c.value
            return c
        })
                
        setCounters(newValue)
    }

    return (
        <>
            {counters.map((count) =>
                <Counter 
                    key={count.id}
                    {...count}
                    onDelete={handleDelete}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                />
            )}
        </>
    )
}

export default CountersList