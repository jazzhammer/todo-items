import React from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'


function TodoListItem({ className, name, onComplete, onDelete, onChange }) {
    return (
        <li className={className}>
            <button onClick={onComplete}>Complete</button>
            <input onChange={onChange} value={name} />
            <button onClick={onDelete}>DELETE</button>
        </li>
    )
}

export default styled(observer(TodoListItem))`
    color: red;
`
