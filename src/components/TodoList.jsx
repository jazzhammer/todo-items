import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'
import { observable } from 'mobx';
import { v4 as uuid} from 'uuid';

import deleteItem from '../functions/deleteItem'
import pushNewItem from '../functions/pushNewItem'
import updateItem from '../functions/updateItem'
import fetchAllItems from '../functions/fetchAllItems'

import TodoListItem from './TodoListItem'


function TodoList({ className }) {
    const [ store ] = useState(createTodoStore);

    // On mount, get all the items from the server
    useEffect(() => {
        fetchAllItems().then(values => {
            store.setItems(values);
        })
    }, [ store ])

    return (
        <div className={className}>
            <header>
                <h1 className="title">TODO List Example</h1>
            </header>
            <section>
                <ul>
                    {store.activeItems.map(item => (
                        <TodoListItem
                            key={item.id}
                            name={item.name}
                            isComplete={item.isComplete}
                            onComplete={() => store.setCompleted(item.id)}
                            onChange={(e) => store.setItemName(item.id, e.target.value)}
                            onDelete={() => store.delete(item.id)}
                        />
                    ))}
                </ul>
                <button onClick={store.addItem}>
                    Add New Item
                </button>
            </section>
            <footer>
                <h2 className="completedTitle">Completed Items</h2>
                <ul>
                    {store.completedItems.map(item => (
                        <li key={item.id}>
                            {item.name}
                        </li>
                    ))}
                </ul>
            </footer>
        </div>
    )
}

// TODO: this is the area you need to modify
function createTodoStore() {
    const self = observable({
        items: [],

        get activeItems() {
            return self.items.filter(i => !i.isComplete);
        },
        get completedItems() {
            return self.items.filter(i => i.isComplete);
        },

        setItems(value) {
            if (value == null) {
                return;
            }
            
            self.items = value;
        },

        addItem() {
            self.items.push({
                id: uuid(),
                name: `Item ${self.items.length}`,
            });

            const item = self.items[self.items.length - 1];

            // Also push to the backend.
            pushNewItem(item)
        },
        setItemName(id, name) {
            const item = self.items.find(i => i.id === id);
            item.name = name;

            // Also push the update to the backend.
            updateItem(item);
        },
        setCompleted(id) {
            const item = self.items.find(i => i.id === id);
            item.isComplete = true;

            // Also push the update to the backend.
            updateItem(item);
        },

        delete(id) {
            self.items = self.items.filter(i => i.id !== id);

            // Also delete the item from the backend
            deleteItem(id)
        }
    })

    return self;
}

export default styled(observer(TodoList))`
    background-color: lightgray;

    .title {
        color: orange;
    }
`
