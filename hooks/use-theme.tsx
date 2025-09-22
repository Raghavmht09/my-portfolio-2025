'use client'

import { useTheme as useNextTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function useTheme() {
  const [mounted, setMounted] = useState(false)
  const theme = useNextTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return { ...theme, theme: 'system' }
  }

  return theme
}