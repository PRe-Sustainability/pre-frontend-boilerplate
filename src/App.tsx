import React from 'react'
import { Counter } from './features/counter/Counter'
import { useGetAllQuery } from './services/postsApi'
import logo from './logo.svg'
import './App.css'

const App: React.FC = () => {
  const { data, error, isLoading } = useGetAllQuery()

  return (
    <main className="App">
      <img src={logo} className="App__logo" alt="logo" />
      <div>PRE-SUSTAINABILITY - BOILERPLATE</div>

      <Counter />

      <div className="flex flex-col">
        {error ? (
          <>There was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          data.map((v, i) => <span key={i}>{v.title}</span>)
        ) : (
          false
        )}
      </div>
    </main>
  )
}

export default App
