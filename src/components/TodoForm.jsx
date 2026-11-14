export default function TodoForm({ theme, value, onChange, onSubmit }) {
  return (
    <form id="form" className="todo-form" onSubmit={onSubmit}>
      <input
        className={`todo-input ${theme}-input`}
        type="text"
        placeholder="Add a task."
        value={value}
        onChange={onChange}
      />
      <button className={`todo-btn ${theme}-button`} type="submit">
        I Got This!
      </button>
    </form>
  )
}