import React, { createContext, useContext, useState } from 'react'
import { imagesArray, texturesArray } from '@/constants'

type SettingsContextType = {
  currentTexture: string
  setCurrentTexture: (texture: string) => void
  currentImage: string
  setCurrentImage: (image: string) => void
}

export const SettingsContext = createContext<SettingsContextType | null>(null)

type SettingsProviderProps = {
  children: React.ReactNode
}

export const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const [currentTexture, setCurrentTexture] = useState<string>(texturesArray[0].texture)
  const [currentImage, setCurrentImage] = useState<string>(imagesArray[0].image)

  return (
    <SettingsContext.Provider value={{ currentTexture, currentImage, setCurrentTexture, setCurrentImage }}>
      {children}
    </SettingsContext.Provider>
  )
}

export const useSettings = () => {
  const context = useContext(SettingsContext)

  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider')
  }

  return context
}
