export default function ThemePicker({ onPick }) {
  return (
    <div className="flexrow-container">
      <button
        type="button"
        className="standard-theme theme-selector"
        onClick={() => onPick('standard')}
      />
      <button
        type="button"
        className="light-theme theme-selector"
        onClick={() => onPick('light')}
      />
      <button
        type="button"
        className="darker-theme theme-selector"
        onClick={() => onPick('darker')}
      />
    </div>
  )
}