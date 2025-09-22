import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { ErrorMessage } from './ErrorMessage'

// Dynamically import SimpleMDE to avoid SSR issues
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), { 
  ssr: false 
})

interface MarkdownEditorProps {
  placeholder: string
  value: string
  onChange: (value: string) => void
  error?: string
  className?: string
}

export const MarkdownEditor: React.FC<MarkdownEditorProps> = ({
  placeholder,
  value,
  onChange,
  error,
  className = ''
}) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className={`space-y-1 ${className}`}>
      {mounted ? (
        <SimpleMDE
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={error ? 'border-red-500' : ''}
        />
      ) : (
        <div className="h-32 border border-gray-300 rounded-md p-3 bg-gray-50 flex items-center justify-center">
          <span className="text-gray-500">Loading editor...</span>
        </div>
      )}
      <ErrorMessage message={error || ''} />
    </div>
  )
}
