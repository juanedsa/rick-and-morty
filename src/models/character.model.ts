export interface CharacterModel {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: Origin
  location: Origin
  image: string
  episode: string[]
  url: string
  created: string
  error?: string
}

interface Origin {
  name: string
  url: string
}
