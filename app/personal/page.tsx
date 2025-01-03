'use client'

import { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import "styles/priv.css"

export default function ProtectedPage() {
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<boolean>(false)
  const router = useRouter()
  const pathname = usePathname()

  // Reset state when the pathname changes
  useEffect(() => {
    setPassword('')
    setError(false)
  }, [pathname])  // Runs whenever the path changes

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    // Send the password to the server for verification
    const res = await fetch('/api/verify-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password }),
    })

    const data = await res.json()

    if (data.success) {
      // Set a cookie indicating the user is authenticated
      document.cookie = 'authenticated=true; path=/'

      // Redirect to the protected content page
      router.push('/protected-content/access')
    } else {
      // Redirect to a failure or error page on incorrect password
      router.push('/')  
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  return (
    <div className="main">
      <h1 className="heading">Password Protected Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={handleChange}
          className="enter"
        />
        <button className="button" type="submit">Submit</button>
      </form>
      {error && <p style={{ color: 'red' }}>Incorrect password. Try again.</p>}
    </div>
  )
}
