import TodoItem from './TodoItem'

export default function TodoList({ todos, theme, onToggle, onDelete }) {
  return (
    <div id="myUnOrdList">
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            theme={theme}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  )
}