import React from 'react'
import { TextField } from '@radix-ui/themes'
import { ErrorMessage } from './ErrorMessage'

interface FormFieldProps {
  label?: string
  placeholder: string
  value: string
  onChange: (value: string) => void
  error?: string
  required?: boolean
  className?: string
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  placeholder,
  value,
  onChange,
  error,
  required = false,
  className = ''
}) => {
  return (
    <div className={`space-y-1 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <TextField.Root
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className={error ? 'border-red-500' : ''}
      />
      <ErrorMessage message={error || ''} />
    </div>
  )
}
