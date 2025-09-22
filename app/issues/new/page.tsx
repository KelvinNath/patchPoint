'use client'
import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { FormField } from '../../../components/ui/FormField'
import { MarkdownEditor } from '../../../components/ui/MarkdownEditor'
import { LoadingButton } from '../../../components/ui/LoadingButton'

interface IssueForm {
  title: string
  description: string
}

interface FormErrors {
  title?: string
  description?: string
}

function NewIssuePage() {
  const router = useRouter()
  const [formData, setFormData] = useState<IssueForm>({
    title: '',
    description: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required'
    } else if (formData.title.trim().length < 3) {
      newErrors.title = 'Title must be at least 3 characters long'
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required'
    } else if (formData.description.trim().length < 10) {
      newErrors.description = 'Description must be at least 10 characters long'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof IssueForm, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      toast.error('Please fix the errors below')
      return
    }

    setIsSubmitting(true)
    
    try {
      await axios.post('/api/issues', formData)
      toast.success('Issue created successfully!')
      router.push('/issues')
    } catch (error: any) {
      console.error('Error submitting issue:', error)
      const errorMessage = error.response?.data?.error || 'Failed to create issue. Please try again.'
      toast.error(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Create New Issue</h1>
      <form className='space-y-6' onSubmit={handleSubmit}>
        <FormField
          label="Title"
          placeholder="Enter issue title"
          value={formData.title}
          onChange={(value) => handleInputChange('title', value)}
          error={errors.title}
          required
        />
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description <span className="text-red-500">*</span>
          </label>
          <MarkdownEditor
            placeholder="Describe the issue in detail..."
            value={formData.description}
            onChange={(value) => handleInputChange('description', value)}
            error={errors.description}
          />
        </div>
        
        <div className="flex gap-3">
          <LoadingButton
            type="submit"
            isLoading={isSubmitting}
            loadingText="Creating Issue..."
            disabled={isSubmitting}
          >
            Create Issue
          </LoadingButton>
          
          <button
            type="button"
            onClick={() => router.push('/issues')}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            disabled={isSubmitting}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default NewIssuePage  