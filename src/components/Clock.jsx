import { useEffect, useState } from 'react'

export default function Clock() {
  const [now, setNow] = useState(() => new Date().toLocaleString())

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date().toLocaleString())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return <p id="datetime">{now}</p>
}