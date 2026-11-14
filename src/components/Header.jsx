import ThemePicker from './ThemePicker'

export default function Header({ theme, onThemeChange }) {
  const titleExtra = theme === 'darker' ? 'darker-title' : ''

  return (
    <header id="header">
      <ThemePicker onPick={onThemeChange} />
      <h1 id="title" className={titleExtra}>
        Just do it.
      </h1>
    </header>
  )
}