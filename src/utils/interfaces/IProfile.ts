export interface IEducation {
  id: number
  userId: number
  logo: string
  school: string
  title: string
  field: string
  startAt: string // ISO date string
  finishAt: string // ISO date string
  ipk: number
  activity: string | null
  description: string | null
  createdAt: string // ISO date string
  updatedAt: string // ISO date string
}
