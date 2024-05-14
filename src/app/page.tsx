'use client'
import { SettingsProvider } from '@/context/SettingsContext'
import SettingsContainer from '@/components/SettingsContainer'
import Model from '@/components/Model'

export default function Home() {
  return (
    <SettingsProvider>
      <main>
        <SettingsContainer />
        <Model />
      </main>
    </SettingsProvider>
  )
}
