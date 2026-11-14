import { useEffect, useState } from 'react'
import Clock from './components/Clock'
import Header from './components/Header'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import {
  getSavedTheme,
  getStoredTodos,
  saveStoredTodos,
  saveTheme,
} from './utils/storage'

function todosFromStorage() {
  return getStoredTodos().map((text, i) => ({
    id: i,
    text,
    completed: false,
  }))
}

export default function App() {
  const [theme, setTheme] = useState(getSavedTheme)
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState(todosFromStorage)

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  const syncStorage = (list) => {
    saveStoredTodos(list.map((t) => t.text))
  }

  const handleThemeChange = (name) => {
    saveTheme(name)
    setTheme(name)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const text = input.trim()
    if (!text) {
      alert('You must write something!')
      return
    }

    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    }

    const updated = [...todos, newTodo]
    setTodos(updated)
    syncStorage(updated)
    setInput('')
  }

  const handleToggle = (id) => {
    setTodos((list) =>
      list.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    )
  }

  const handleDelete = (id) => {
    setTodos((list) => {
      const updated = list.filter((item) => item.id !== id)
      syncStorage(updated)
      return updated
    })
  }

  return (
    <>
      <Header theme={theme} onThemeChange={handleThemeChange} />
      <TodoForm
        theme={theme}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onSubmit={handleSubmit}
      />
      <Clock />
      <TodoList
        todos={todos}
        theme={theme}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
    </>
  )
}