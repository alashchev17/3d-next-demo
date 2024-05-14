import Settings from '@/components/Settings'

const SettingsContainer = () => {
  return (
    <div className="fixed top-0 left-0 z-10 w-full select-none text-black">
      <div className="flex px-3 items-baseline justify-between">
        <h1 className="text-3xl">3D Card Texture Editor</h1>
        <Settings />
      </div>
    </div>
  )
}

export default SettingsContainer
