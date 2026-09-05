import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'


export default function Login() {
  const [mode, setMode] = useState('login')
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const navigate = useNavigate()


  function handleSubmit(e) {
    e.preventDefault()
    navigate('/dashboard')
  }


  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <Link to="/" className="block text-center mb-8 text-[#E3DBCC] text-sm tracking-wide">
          ← back to StudyCorner
        </Link>


        <div className="bg-[#141414] border border-white/10 rounded-2xl p-8 shadow-xl">
          <h1 className="text-2xl font-semibold text-[#E3DBCC] mb-1 text-center">
            {mode === 'login' ? 'Welcome back' : 'Create your account'}
          </h1>
          <p className="text-sm text-[#8a8578] text-center mb-6">
            {mode === 'login' ? 'Log in to your StudyCorner' : 'Start organizing your semester'}
          </p>


          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'register' && (
              <input
                type="text"
                placeholder="Full name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-[#E3DBCC] placeholder:text-[#6b6558] focus:outline-none focus:border-[#a1d5ee]/50"
                required
              />
            )}
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-[#E3DBCC] placeholder:text-[#6b6558] focus:outline-none focus:border-[#a1d5ee]/50"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-[#E3DBCC] placeholder:text-[#6b6558] focus:outline-none focus:border-[#a1d5ee]/50"
              required
            />


            <button
              type="submit"
              className="w-full bg-[#E3DBCC] text-[#0a0a0a] font-medium rounded-lg py-2.5 text-sm hover:bg-[#d7f3a3] transition-colors"
            >
              {mode === 'login' ? 'Log in' : 'Sign up'}
            </button>
          </form>


          <p className="text-center text-sm text-[#8a8578] mt-6">
            {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
            <button
              onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
              className="text-[#a1d5ee] hover:underline"
            >
              {mode === 'login' ? 'Sign up' : 'Log in'}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
