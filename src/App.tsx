import { useState } from 'react'

import './App.css'
import { Button } from './components/ui/button'
import { Card, CardContent, CardTitle } from './components/ui/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="p-6">
      <Card>
<CardTitle>counter : {count} </CardTitle>
<CardContent>
  <Button onClick={()=>setCount(count+1)}>Click </Button>
  </CardContent>

      </Card>
      
      
     </div>
    </>
  )
}

export default App
