import { useState } from 'react'
import { imagesArray, texturesArray } from '@/constants'
import { useSettings } from '@/context/SettingsContext'

const Settings = () => {
  const { currentTexture, setCurrentTexture, currentImage, setCurrentImage } = useSettings()
  const [isTextureDropdownVisible, setIsTextureDropdownVisible] = useState(false)
  const [isImageDropdownVisible, setIsImageDropdownVisible] = useState(false)

  const handleDropdownVisibility = (dropdown: string) => {
    switch (dropdown) {
      case 'texture':
        setIsTextureDropdownVisible((prev) => !prev)
        setIsImageDropdownVisible(false)
        break
      case 'image':
        setIsImageDropdownVisible((prev) => !prev)
        setIsTextureDropdownVisible(false)
        break
      case 'default':
        break
    }
  }

  return (
    <div className="flex gap-2 items-center flex-col">
      <span className="text-sm font-light cursor-pointer" onClick={() => handleDropdownVisibility('texture')}>
        Click here to change a texture
      </span>
      <span className="text-sm font-light cursor-pointer" onClick={() => handleDropdownVisibility('image')}>
        Click here to change an image
      </span>
      {isTextureDropdownVisible && (
        <div className="flex flex-col gap-2">
          {texturesArray.map((texture) => (
            <span className="cursor-pointer" key={texture.id} onClick={() => setCurrentTexture(texture.texture)}>
              {texture.name} {currentTexture === texture.texture ? '✓' : ''}
            </span>
          ))}
        </div>
      )}
      {isImageDropdownVisible && (
        <div className="flex flex-col gap-2">
          {imagesArray.map((image) => (
            <span className="cursor-pointer" key={image.id} onClick={() => setCurrentImage(image.image)}>
              {image.name} {currentImage === image.image ? '✓' : ''}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

export default Settings
