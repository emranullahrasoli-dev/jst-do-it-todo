export function getSavedTheme() {
  return localStorage.getItem('savedTheme') || 'standard'
}

export function saveTheme(name) {
  localStorage.setItem('savedTheme', name)
}

export function getStoredTodos() {
  const raw = localStorage.getItem('todos')
  if (!raw) return []

  try {
    const list = JSON.parse(raw)
    return Array.isArray(list) ? list : []
  } catch {
    return []
  }
}

export function saveStoredTodos(texts) {
  localStorage.setItem('todos', JSON.stringify(texts))
}