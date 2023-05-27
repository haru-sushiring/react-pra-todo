import React, {useState} from "react";
import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';

//ランダムなkeyを発行
const getKey = () => Math.random().toString(32).substring(2);

function Todo() {
    const [items, setItesm] = useState([
        {key: getKey(), text: 'Learn JavaScript', done: false},
        {key: getKey(), text: 'Learn React', done: false},
        {key: getKey(), text: 'Get some good sleep', done: false},
    ]);

    const handleCheck = checked => {
        const newItems = items.map(item => {
            if (item.key == checked.key) {
                item.done = !item.done;
            }
            return item;
        });
        setItesm(newItems);
    };

    const handleAdd = text => {
        setItesm([...items, {key: getKey(), text, done: false }]);
    }

    const [filter, setFilter] = useState('ALL');

    const handleFilterChange = value => setFilter(value);

    const displayItems = items.filter(item => {
        if (filter === 'ALL') return true;
        if (filter === 'TODO') return !item.done;
        if (filter === 'DONE') return item.done;
    });

    return (
        <div className="panel">
            <div className="panel-heading">
                ⚛️ React ToDo
            </div>
            <Input onAdd={handleAdd} />
            <Filter
                onChange={handleFilterChange}
                value={filter}
            />
            {displayItems.map(item => (
                <TodoItem
                    key={item.key}
                    item={item}
                    onCheck={handleCheck}
                />
            ))}
            <div className="panel-block">
                {displayItems.length} items
            </div>
        </div>
    );
}

export default Todo;