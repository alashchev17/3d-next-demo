type TextureEntity = {
  id: number
  name: string
  texture: string
}

type ImageEntity = {
  id: number
  name: string
  image: string
}

export const texturesArray: TextureEntity[] = [
  {
    id: 1,
    name: 'Paper Texture',
    texture: '/assets/textures/paperTexture.jpg',
  },
  {
    id: 2,
    name: 'Brown Texture',
    texture: '/assets/textures/brownTexture.jpg',
  },
  {
    id: 3,
    name: 'Glossy Texture',
    texture: '/assets/textures/glossyTexture.jpg',
  },
]

export const imagesArray: ImageEntity[] = [
  {
    id: 1,
    name: '0to9',
    image: '/assets/images/0to9.png',
  },
  {
    id: 2,
    name: 'Oles Gergun',
    image: '/assets/images/Oles-Gergun.png',
  },
]
