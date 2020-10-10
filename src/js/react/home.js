import React, { useState } from 'react'
import { Button } from 'rsuite'
import 'rsuite/dist/styles/rsuite-default.css'

export default function Home() {
  const [state, setState] = useState({ name: '' })
  return (
    <main>
      <h1>{state.name}</h1>
      <Button appearance="primary">Primary</Button>
    </main>
  )
}
