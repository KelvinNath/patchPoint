'use client'
import React, { useState, useEffect } from 'react'
import { TextField, Button } from '@radix-ui/themes'
import dynamic from 'next/dynamic'

// Dynamically import SimpleMDE to avoid SSR issues
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), { 
  ssr: false 
})

function NewIssuePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className='max-w-xl space-y-3'>
      <TextField.Root placeholder="Title" />
      {mounted && <SimpleMDE placeholder="Description" />}
      <Button>Submit New Issue</Button>
    </div>
  )
}

export default NewIssuePage  