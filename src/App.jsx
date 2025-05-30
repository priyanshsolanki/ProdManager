import { useState } from 'react'
import './App.css'

import ProdManagerApp from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
   <ProdManagerApp/>
  )
}

export default App
