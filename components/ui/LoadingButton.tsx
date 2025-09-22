import React from 'react'
import { Button } from '@radix-ui/themes'

interface LoadingButtonProps {
  isLoading: boolean
  loadingText: string
  children: React.ReactNode
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  className?: string
}

export const LoadingButton: React.FC<LoadingButtonProps> = ({
  isLoading,
  loadingText,
  children,
  disabled = false,
  type = 'button',
  onClick,
  className = ''
}) => {
  return (
    <Button
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      className={className}
    >
      {isLoading ? (
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          {loadingText}
        </div>
      ) : (
        children
      )}
    </Button>
  )
}
