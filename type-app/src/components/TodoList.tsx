import "./TodoList.css"
type TodoProps = {
    items: { id: string, text: string }[]
    onDeleteHandler: (id: string) => void
}
function TodoList({ items, onDeleteHandler }: TodoProps) {

    return (<ul>
        {items.map((todo) => <li key={todo.id} onClick={onDeleteHandler.bind(null, todo.id)}>
            {todo.text}
        </li>)}
    </ul>)
}

export default TodoList