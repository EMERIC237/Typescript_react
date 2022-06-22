import React, { useRef } from "react"
import './NewTodo.css'
type NewTodoProps = {
    onAddHandler: (text: string) => void
}
function NewTodo({ onAddHandler }: NewTodoProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    const formSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault()
        const enteredText = inputRef.current!.value;
        onAddHandler(enteredText)
        inputRef.current!.value = ''

    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div>
                <label htmlFor="todo-text">Todo Text</label>
                <input ref={inputRef} type="text" id="todo-text" />
            </div>
            <button type='submit'>ADD TODO</button>
        </form>
    )
}

export default NewTodo