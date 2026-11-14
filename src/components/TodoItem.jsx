import { useRef } from 'react'

export default function TodoItem({ todo, theme, onToggle, onDelete }) {
  const rowRef = useRef(null)

  const handleDelete = () => {
    const row = rowRef.current
    if (!row) return

    row.classList.add('fall')
    row.addEventListener(
      'transitionend',
      () => onDelete(todo.id),
      { once: true },
    )
  }

  const classes = [
    'todo',
    `${theme}-todo`,
    todo.completed ? 'completed' : '',
  ].join(' ')

  return (
    <li>
      <div className={classes} ref={rowRef}>
        <span className="todo-item">{todo.text}</span>
        <button
          type="button"
          className={`check-btn ${theme}-button`}
          onClick={() => onToggle(todo.id)}
        >
          <i className="fas fa-check" />
        </button>
        <button
          type="button"
          className={`delete-btn ${theme}-button`}
          onClick={handleDelete}
        >
          <i className="fas fa-trash" />
        </button>
      </div>
    </li>
  )
}