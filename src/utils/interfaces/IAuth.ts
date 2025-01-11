export interface IProfile {
  id: number
  userId: number
  fullName: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zip: string
  imgUrl: string
  linkedin: string
  website: string
  description: string
  createdAt: string // ISO date string format
  updatedAt: string // ISO date string format
}
